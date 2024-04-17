import { Form, useLoaderData } from "react-router-dom";
import { getProject } from "../projects";


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
            <h1>{project.title}</h1>
            <p>{project.descriptionIntro}</p>
            <p>{project.descriptionMain}</p>
            <ul>
                {project.listWord.map((word, index) => (
                    <li key={index}>{word}</li>
                ))}
            </ul>
        

        </>
    );
}