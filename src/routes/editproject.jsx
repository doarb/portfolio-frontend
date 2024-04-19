import { useState } from "react";
import { Form, useLoaderData, redirect, useNavigate } from "react-router-dom";
import { getProject, updateProject } from "../Projects";
import "./editproject.css";

export async function action({ request, params }) {
  const formData = await request.formData();
  console.log(formData);
  const updates = Object.fromEntries(formData);
  console.log(updates);
  updates.listWord = updates.listWord.split(",");
  updates.illustrations = updates.illustrations.split(",");
  //retire de update le champ word
  delete updates.word;
  delete updates.illustration;
  await updateProject(updates);
  return redirect(`/projects/${params.projectId}`);
}

export default function Editproject() {
  const { project } = useLoaderData();
  const navigate = useNavigate();

  const [editedProject, setEditedProject] = useState(project);
  const [thumbnail, setThumbnail] = useState(project.thumbnail);
  const [descriptionMainWords, setDescriptionMainWords] = useState(
    project.descriptionMain.split(" ").filter((word) => word !== "")
  );

  const [listWord, setListWord] = useState(project.listWord);
  const [word, setWord] = useState("");
  const [illustrations, setIllustrations] = useState(project.illustrations);
  const [illustration, setillustration] = useState("");




  return (
    <div className="edit-project-container">
      <Form method="POST" id="project-form">

        <h1>Modifier un projet</h1>
        <label htmlFor="thumbnail">Miniature</label>
       
        <img name="thumbnailImg" src={thumbnail} alt={project.title} />
        <input name="thumbnail" defaultValue={project.thumbnail}
          onChange={(e) => {
            setThumbnail(e.target.value);
          }
        } />
        <input type="hidden" name="id" defaultValue={project.id} />
        <label htmlFor="title">Titre</label>
        <input
          type="text"
          name="title"
          id="title"
          defaultValue={project.title}
        />
        <label htmlFor="descriptionIntro">Description (introduction)</label>
        <textarea
          name="descriptionIntro"
          id="descriptionIntro"
          defaultValue={project.descriptionIntro}
          maxLength={80}
        />
        <label htmlFor="descriptionMain">Description (développement) :</label>
        <textarea
          name="descriptionMain"
          id="descriptionMain"
          defaultValue={editedProject.descriptionMain}
          onChange={(e) => {
            const { name, value } = e.target;
            const words = value.split(" ").filter((worda) => worda !== "");
            if (words.length <= 250) {
              setEditedProject({
                ...editedProject,
                [name]: value,
              });
              setDescriptionMainWords(words);
            }
          }}
        />

        <p>Nombre de mots : {descriptionMainWords.length}</p>
        <label htmlFor="listWord">Mots-clés :</label>
        <input
          disabled={listWord.length >= 10}
          type="text"
          id="word"
          name="word"
          value={word}
          onChange={(e) => setWord(e.target.value)}
          
        />
        <label
          disabled={listWord.length >= 10}
          onClick={() => {
            setListWord([...listWord, word]);
            setWord("");
          }}
        >
          Ajouter
        </label>
        <ul>
          {listWord.map((word, index) => (
            <li key={index}>
              {word}
              <label
                onClick={() => {
                  setListWord((prevListWord) =>
                    prevListWord.filter((_, i) => i !== index)
                  );
                }}
              >
                Supprimer
              </label>
            </li>
          ))}
        </ul>
        <input type="hidden" name="listWord" value={listWord.join(',')} />
        <label htmlFor="date">Date :</label>
        <input
          type="text"
          id="date"
          name="date"
          defaultValue={editedProject.date}
        />

        <label htmlFor="illustrations">Illustrations :</label>
        <input 
          disabled={illustrations.length >= 5}
          type="text"
          id="illustration"
          name="illustration"
          value={illustration}
          onChange={(e) => setillustration(e.target.value)}
        />
        <label
          disabled={illustrations.length >= 5}
          onClick={() => {
            setIllustrations([...illustrations, illustration]);
            setillustration("");
          }}
        >
          Ajouter
        </label>
        <div>
          {illustrations.map((illustration, index) => (
            <div key={index}>
              <img src={illustration} alt={`Illustration ${index + 1}`} />
              <label
                onClick={() => {
                  setIllustrations((prevIllustrations) =>
                    prevIllustrations.filter((_, i) => i !== index)
                  );
                }}
              >
                Supprimer
              </label>
            </div>
          ))}
        </div>
        <input type="hidden" name="illustrations" value={illustrations.join(',')} />

        <button type="submit">Modifier</button>
        <p>
          <button
            onClick={() => {
              navigate(-1);
            }}
          >
            Retour
          </button>
        </p>
      </Form>
    </div>
  );
}
