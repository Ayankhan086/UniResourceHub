import express from "express";
import "dotenv/config"
import userRoutes from "./routes/user.routes.js"
import deptRoutes from "./routes/Department.routes.js"
import semRoutes from "./routes/Semester.routes.js"
import courseRoutes from "./routes/Courses.routes.js"
import resourceRoutes from "./routes/Resource.routes.js"
import activityRoutes from "./routes/Activity.routes.js"
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors({
   origin: ["https://uni-resource-hub.vercel.app"], // Change to your frontend URL for production
   credentials: true,
   allowedHeaders: ['Content-Type', 'Authorization']
}));

app.get("/", (req, res) => {
    res.send("Okay");
});
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/departments", deptRoutes);
app.use("/api/v1/semesters", semRoutes);
app.use("/api/v1/courses", courseRoutes);
app.use("/api/v1/resources", resourceRoutes);
app.use("/api/v1/activities", activityRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is listening at port ${PORT}`);
});