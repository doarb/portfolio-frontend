//import sortBy from "sort-by";
const URLBACK = import.meta.env.VITE_URL_BACK;



export async function getProjects() {
  const response = await fetch(URLBACK+"/api/projects");
  const projects = await response.json();
  return projects.projects;
}

export async function getProject(id) {
  const response = await fetch(URLBACK+`/api/projects/${id}`);
  const project = await response.json();
  return project.project;
}

export async function createProject(object) {
  
  await fetch(URLBACK+"/api/projects", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(object),
  });
}

export async function updateProject(project) {
  await fetch(URLBACK+`/api/projects/${project.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(project),
  });
}

export async function deleteProject(id) {
  await fetch(URLBACK+`/api/projects/${id}`, {
    method: "DELETE",
  });
}