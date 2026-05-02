import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import fs from "fs";
import path from "path";

/**
 * Cloudflare R2 Client Configuration
 * R2 is S3-compatible, so we use the AWS SDK.
 */
const s3Client = new S3Client({
  region: "auto",
  endpoint: `https://${process.env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID,
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY,
  },
});

/**
 * Uploads a file to Cloudflare R2.
 * Returns an object with the public URL and file type.
 */
export const uploadToR2 = async (localFilePath) => {
  try {
    if (!localFilePath) {
        console.error("No file path provided");
        return null;
    }

    if (!fs.existsSync(localFilePath)) {
        console.error("File does not exist at the provided path");
        return null;
    }

    const fileStream = fs.createReadStream(localFilePath);
    const fileName = `${Date.now()}-${path.basename(localFilePath)}`;

    // Determine Content-Type based on extension
    const ext = localFilePath.split('.').pop().toLowerCase();
    const mimeTypes = {
        'pdf': 'application/pdf',
        'doc': 'application/msword',
        'docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'ppt': 'application/vnd.ms-powerpoint',
        'pptx': 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
        'xls': 'application/vnd.ms-excel',
        'xlsx': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        'txt': 'text/plain',
        'csv': 'text/csv',
        'zip': 'application/zip',
        'rar': 'application/x-rar-compressed',
        'jpg': 'image/jpeg',
        'jpeg': 'image/jpeg',
        'png': 'image/png',
        'gif': 'image/gif',
        'webp': 'image/webp'
    };

    const uploadParams = {
      Bucket: process.env.R2_BUCKET_NAME,
      Key: fileName,
      Body: fileStream,
      ContentType: mimeTypes[ext] || "application/octet-stream",
    };

    // Upload the file to R2
    await s3Client.send(new PutObjectCommand(uploadParams));

    fs.unlinkSync(localFilePath); // Delete local file after upload

    /**
     * Public URL construction
     * This assumes you have enabled public access or connected a custom domain to your R2 bucket.
     */
    const publicUrl = `${process.env.R2_PUBLIC_URL}/${fileName}`;

    // Determine type for DB (consistent with previous implementation)
    const rawTypes = ['pdf', 'doc', 'docx', 'ppt', 'pptx', 'xls', 'xlsx', 'txt', 'csv', 'zip', 'rar'];
    let fileType = "image";
    if (rawTypes.includes(ext)) {
        fileType = ext;
    }

    return {
      url: publicUrl,
      type: fileType
    };

  } catch (error) {
    console.error("R2 Upload Error:", error);
    if (fs.existsSync(localFilePath)) {
      fs.unlinkSync(localFilePath);
    }
    return null;
  }
};
