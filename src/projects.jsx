//import sortBy from "sort-by";



export async function getProjects() {
  const response = await fetch("http://localhost:5000/api/projects");
  const projects = await response.json();
  return projects.projects;
}

export async function getProject(id) {
  const response = await fetch(`http://localhost:5000/api/projects/${id}`);
  const project = await response.json();
  return project.project;
}

export async function createProject(object) {
  
  await fetch("http://localhost:5000/api/projects", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(object),
  });
}

export async function updateProject(project) {
  await fetch(`http://localhost:5000/api/projects/${project.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(project),
  });
}

export async function deleteProject(id) {
  await fetch(`http://localhost:5000/api/projects/${id}`, {
    method: "DELETE",
  });
}