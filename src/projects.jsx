//import sortBy from "sort-by";

export async function getProjects() {
  const response = await fetch("http://localhost:5000/api/projects");
  const projects = await response.json();
  console.log(projects);
  return projects.projects;
}

export async function getProject(id) {
  const response = await fetch(`http://localhost:5000/api/projects/${id}`);
  const project = await response.json();
  return project.project;
}