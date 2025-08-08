import Course from "../app/models/course.mjs";
import mongoose from "mongoose";

export async function findDeletedCourses(filter = {}) {
  return await Course.findDeleted(filter); // dùng API plugin
}

export async function countDeletedCourses(filter = {}) {
  return await Course.countDocumentsDeleted(filter); // dùng API plugin
}

export async function restoreCourseById(id) {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new Error("ID không hợp lệ");
  }
  return await Course.restore({ _id: id });
}
