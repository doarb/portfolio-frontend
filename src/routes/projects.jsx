import { NavLink, useLoaderData } from "react-router-dom";
import { getProjects } from "../Projects";

export async function loader() {
  const projects = await getProjects();
  if (!projects) {

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
                  src={project.thumbnail}
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
