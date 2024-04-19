import { redirect } from "react-router-dom";
import { deleteProject } from "../Projects";

export async function action({ params }) {
  await deleteProject(params.projectId);
  return redirect("/projects");
}