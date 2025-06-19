import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET 
});

/**
 * Uploads a file to Cloudinary.
 * If the file is an image, it uploads as an image.
 * If the file is a raw file (pdf, doc, docx, ppt, pptx, etc.), it uploads as raw and sets the type.
 * Returns an object with url and type.
 */
const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) {
            console.error("No file path provided");
            return null;
        }

        if (!fs.existsSync(localFilePath)) {
            console.error("File does not exist at the provided path");
            return null;
        }

        // Determine file type by extension
        const ext = localFilePath.split('.').pop().toLowerCase();
        const rawTypes = ['pdf', 'doc', 'docx', 'ppt', 'pptx', 'xls', 'xlsx', 'txt', 'csv', 'zip', 'rar'];
        let resource_type = "image";
        let fileType = "image";

        if (rawTypes.includes(ext)) {
            resource_type = "raw";
            fileType = ext; // e.g. pdf, docx, etc.
        }

        // Upload the file to Cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type,
            folder: "UniResourceHub",
        });

        fs.unlinkSync(localFilePath); // Remove the local file

        return {
            url: response.secure_url,
            type: fileType
        };

    } catch (error) {
        if (fs.existsSync(localFilePath)) {
            fs.unlinkSync(localFilePath); // Remove the local file if it exists
        }
        console.error("Error uploading file to Cloudinary:", error);
        return null;
    }
};

export { 
    uploadOnCloudinary 
};