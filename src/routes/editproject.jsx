import { useState } from "react";
import { Form, useLoaderData, redirect, useNavigate } from "react-router-dom";
import {  updateProject } from "../projects";
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
    <div className="bg-white">
      <div className="container mx-auto flex flex-wrap py-6">
        <div className="w-full flex flex-col px-3">
          <Form method="POST" id="project-form">
            <div className="bg-white flex items-center flex-col p-6">
              <h1>Modifier un projet</h1>
              <label htmlFor="thumbnail">Miniature</label>

              <img name="thumbnailImg" src={thumbnail} alt={project.title} />
              <div className="w-full">
                <label
                  htmlFor="minature"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Lien Miniature
                </label>
                <input
                  name="thumbnail"
                  defaultValue={project.thumbnail}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e) => {
                    setThumbnail(e.target.value);
                  }}
                />
              </div>
              <input type="hidden" name="id" defaultValue={project.id} />
              <label
                htmlFor="title"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Titre
              </label>
              <input
                type="text"
                name="title"
                id="title"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={project.title}
              />
            </div>
            <div className=" justify-center items-center mx-auto container">
              <div className="space-y-1">
                <div className="pb-1">
                  <label
                    htmlFor="descriptionIntro"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Description (introduction)
                  </label>
                  <textarea
                    name="descriptionIntro"
                    id="descriptionIntro"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    defaultValue={project.descriptionIntro}
                    maxLength={80}
                  />
                  <label
                    htmlFor="descriptionMain"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Description (développement) :
                  </label>
                  <textarea
                    name="descriptionMain"
                    id="descriptionMain"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    defaultValue={editedProject.descriptionMain}
                    onChange={(e) => {
                      const { name, value } = e.target;
                      const words = value
                        .split(" ")
                        .filter((worda) => worda !== "");
                      if (words.length <= 250) {
                        setEditedProject({
                          ...editedProject,
                          [name]: value,
                        });
                        setDescriptionMainWords(words);
                      }
                    }}
                  />
                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    Nombre de mots : {descriptionMainWords.length}
                  </p>
                  <label
                    htmlFor="listWord"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Mots-clés :
                  </label>
                  <input
                    disabled={listWord.length >= 10}
                    type="text"
                    id="word"
                    name="word"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={word}
                    onChange={(e) => setWord(e.target.value)}
                  />
                  <label
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    disabled={listWord.length >= 10}
                    onClick={() => {
                      setListWord([...listWord, word]);
                      setWord("");
                    }}
                  >
                    Ajouter
                  </label>
                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    Cliquez sur le badge pour la supprimer
                  </p>
                  <div className="w-full px-3 bg-white items-center p-6 flex flex-col">
                    <div className=" p-6">
                      {listWord.map((word, index) => (
                        <span
                          key={index}
                          className="items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10 m-1"
                          onClick={() => {
                            setListWord((prevListWord) =>
                              prevListWord.filter((_, i) => i !== index)
                            );
                          }}
                        >
                          {word}
                        </span>
                      ))}
                    </div>
                  </div>
                  <input
                    type="hidden"
                    name="listWord"
                    className="block text-sm font-medium leading-6 text-gray-900"
                    value={listWord.join(",")}
                  />
                  <label
                    htmlFor="date"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Date :
                  </label>
                  <input
                    type="text"
                    id="date"
                    name="date"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    defaultValue={editedProject.date}
                  />
                  <label
                    htmlFor="illustrations"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Illustrations :
                  </label>
                  <input
                    disabled={illustrations.length >= 5}
                    type="text"
                    id="illustration"
                    name="illustration"
                    placeholder="Lien http"
                    value={illustration}
                    onChange={(e) => setillustration(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  <label
                    disabled={illustrations.length >= 5}
                    onClick={() => {
                      setIllustrations([...illustrations, illustration]);
                      setillustration("");
                    }}
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Ajouter
                  </label>
                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    Cliquez sur l&apos;image pour la supprimer
                  </p>
                  <div>
                    <div className="bg-white flex items-center flex-col p-6">
                      {illustrations.map((illustration, index) => (
                        <div key={index}>
                          <img
                            src={illustration}
                            alt={`Illustration ${index + 1}`}
                            onClick={() => {
                              setIllustrations((prevIllustrations) =>
                                prevIllustrations.filter((_, i) => i !== index)
                              );
                            }}
                          />
                          
                        </div>
                      ))}
                    </div>
                    <input
                      type="hidden"
                      name="illustrations"
                      value={illustrations.join(",")}
                      className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="container m-3 p-4">
              <button
                className="rounded-md m-1 bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                type="submit"
              >
                Modifier
              </button>
              <p>
                <button
                  className="rounded-md m-1 bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  onClick={() => {
                    navigate(-1);
                  }}
                >
                  Retour
                </button>
              </p>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}
