import { Form, NavLink, useLoaderData } from "react-router-dom";
import { getProject } from "../Projects";
import "../index.css";

export async function loader({ params }) {
  const project = await getProject(params.projectId);
  if (!project) {
    throw new Response("", {
      status: 404,
      statusText: "Not Found",
    });
  }
  return { project };
}

export default function Project() {
  const { project } = useLoaderData();
  return (
    <>
      <div className="bg-white">
        <div className="container mx-auto flex flex-wrap py-6">
          <div className="w-full flex flex-col px-3 md:w-3/4">
            <div className="bg-white flex items-center flex-col p-6">
              <img src={project.thumbnail} alt={project.title} />
              <p className="text-3xl font-bold hover:text-gray-700 pb-4">
                {project.title}
              </p>
              <p className="text-sm pb-3">Fait le {project.date}</p>
            </div>
          </div>

          <aside className="w-full md:w-1/4 flex flex-col items-center px-3">
            
            <div className="w-full px-3 bg-white items-center p-6 flex flex-col">
            <div className=" p-6">
              {project.listWord.map((word, index) => (
                <span
                  key={index}
                  className="items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10 m-1"
                >
                  {word}
                </span>
              ))}
              </div>
              <div className="w-full bg-white shadow  p-4">
                <Form action="edit">
                  <button
                    className="w-full bg-green-800 text-white font-bold text-sm uppercase rounded hover:bg-green-700 flex items-center justify-center px-2 py-3 mt-4"
                    type="submit"
                  >
                    Modifier
                  </button>

                </Form>
                <Form
                  method="post"
                  action="destroy"
                  onSubmit={(e) => {
                    if (
                      !confirm("Voulez-vous vraiment supprimer ce projet ?")
                    ) {
                      e.preventDefault();
                    }
                  }}
                >
                  <button
                    className="w-full bg-red-800 text-white font-bold text-sm uppercase rounded hover:bg-red-700 flex items-center justify-center px-2 py-3 mt-4"
                    type="submit"
                  >
                    Supprimer
                  </button>
                </Form>
              </div>
            </div>
          </aside>

          <div className="w-full flex flex-col px-3 md:w-3/4">
            <div className="bg-white flex flex-col p-6 items-center">
              <h1 className="text-2xl font-bold">Introduction</h1>
              <p className="pb-6">{project.descriptionIntro}</p>
              <h1 className="text-2xl font-bold">Description</h1>
              <p className="pb-6">{project.descriptionMain}</p>
            </div>
          </div>
          <footer className="w-full  bg-white pb-12">
            <div className="relative w-full flex items-center invisible md:visible md:pb-12 ">
              {project.illustrations.map((image, index) => (
                <img
                  key={index}
                  className={`w-1/${project.illustrations.length}`}
                  src={image}
                  alt={`Illustration ${index + 1}`}
                />
              ))}
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
