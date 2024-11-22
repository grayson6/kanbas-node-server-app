import Database from "../Database/index.js";


export function findAllCourses() {
  return Database.courses;
}

export function findCoursesForEnrolledUser(userId) {
    const { courses, enrollments } = Database;
    const enrolledCourses = courses.filter((course) =>
      enrollments.some((enrollment) => enrollment.user === userId && enrollment.course === course._id));
    return enrolledCourses;
  }

  export function createCourse(course) {
    const newCourse = { ...course, _id: Date.now().toString() };
    Database.courses = [...Database.courses, newCourse];
    return newCourse;
  }

  export function deleteCourse(courseId) {
    const { courses, enrollments } = Database;
    Database.courses = courses.filter((course) => course._id !== courseId);
    Database.enrollments = enrollments.filter(
      (enrollment) => enrollment.course !== courseId
    );
    
  }

  export function updateCourse(courseId, courseUpdates) {
    const courseIndex = Database.courses.findIndex((course) => course._id === courseId);
    if (courseIndex === -1) {
      return null; // Course not found
    }
    
    Database.courses[courseIndex] = { ...Database.courses[courseIndex], ...courseUpdates };
    return Database.courses[courseIndex];
  }
  
  