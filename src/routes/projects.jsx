import { NavLink, useLoaderData } from "react-router-dom";
import { getProjects } from "../projects";

export async function loader() {
  const projects = await getProjects();
  if (!projects) {
    console.log("projects not found");

    throw new Response("", {
      status: 404,
      statusText: "Not Found",
    });
  }

  return { projects };
}

export default function Projects() {
  const { projects } = useLoaderData();
  return (
    <>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <ul role="list" className="divide-y divide-gray-100">
          {projects.map((project) => (
            <li key={project.id} className="flex justify-between gap-x-6 py-5">
              <div className="flex min-w-0 gap-x-4">
                <img
                  className="h-24 w-24 flex-none  bg-gray-50"
                  src="https://imgs.search.brave.com/qI-MeniGgKPStyOtnC4kTT6_-Ls1KYfqv7AIPrrBPSQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTI1/NTkwNTMzMS9mci9w/aG90by9waG90b2dy/YXBoZS1kZS12b3lh/Z2UtcmV0ZW5hbnQt/ZGVzLWltYWdlcy12/dWUtc3VwJUMzJUE5/cmlldXJlLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1nRHZX/T1ZfWHVWdER4SEgw/Z0Z2bGdhTUhCMFpO/dzhhUkF6NXFRakVo/TUxnPQ"
                  alt=""
                />
                <div className="min-w-0 flex-auto">
                  <p className="text-sm font-semibold leading-6 text-gray-900">
                    {project.title}
                  </p>
                  <p className="text-sm leading-6 text-gray-500">
                    {project.descriptionIntro}
                  </p>
                </div>
              </div>
              <div className="hidden sm:flex  grid place-items-center">
                <NavLink
                  to={`/projects/${project.id}`}
                  className="text-indigo-600 hover:text-indigo-900"
                >
                <button
                  type="button"
                  className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Voir
                </button>
                </NavLink>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
