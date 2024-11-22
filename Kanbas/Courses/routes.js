import * as dao from "./dao.js";

export default function CourseRoutes(app) {
  app.get("/api/courses", (req, res) => {
    const courses = dao.findAllCourses();
    res.send(courses);
  });

  app.post("/api/courses", (req, res) => {
    const course = req.body;
    const newCourse = dao.createCourse(course);
    res.json(newCourse);
  });

  app.delete("/api/courses/:courseId", (req, res) => {
    const { courseId } = req.params;
    const status = dao.deleteCourse(courseId);
    res.send(status);
  });

  app.put("/api/courses/:courseId", (req, res) => {
    const { courseId } = req.params;
    const courseUpdates = req.body;
    const updatedCourse = dao.updateCourse(courseId, courseUpdates);
    if (updatedCourse) {
      res.json(updatedCourse);
    } else {
      res.status(404).send({ error: "Course not found" });
    }
  });
}