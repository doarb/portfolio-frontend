import { useState } from "react";
import {CreateEmail } from "../Analysis";
export default function About() {
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");

  return (
    <>
      <div className="container mx-auto ">
        <div className="flex justify-center items-center py-6">
          <div className="flex -space-x-2 ">
            <img
              className="inline-block h-60 w-60 rounded-full ring-2 ring-white"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
          </div>
        </div>

        <div className="flex justify-center flex-col items-center py-6">
          <h1 className="text-3xl font-bold hover:text-gray-700 pb-4">
            Damien Boucher
          </h1>
          <div className="flex justify-center items-center py-6">
            <span className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20 m-1">
              JavaScript
            </span>
            <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20 m-1">
              CSS
            </span>
            <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 m-1">
              Azure
            </span>
            <span className="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10 m-1">
              Node
            </span>
            <span className="inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10 m-1">
              PHP
            </span>
            <span className="inline-flex items-center rounded-md bg-pink-50 px-2 py-1 text-xs font-medium text-pink-700 ring-1 ring-inset ring-pink-700/10 m-1">
              Badge
            </span>
          </div>
          <dd className="mt-1 text-sm leading-6 text-gray-700 px-20">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
            repellat pariatur animi ut in, facilis, tenetur harum velit minus
            quisquam nesciunt explicabo commodi natus, recusandae sed nulla
            vitae similique. Natus. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quam repellat pariatur animi ut in, facilis,
            tenetur harum velit minus quisquam nesciunt explicabo commodi natus,
            recusandae sed nulla vitae similique. Natus. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Quam repellat pariatur animi ut
            in, facilis, tenetur harum velit minus quisquam nesciunt explicabo
            commodi natus, recusandae sed nulla vitae similique. Natus. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Quam repellat
            pariatur animi ut in, facilis, tenetur harum velit minus quisquam
            nesciunt explicabo commodi natus, recusandae sed nulla vitae
            similique. Natus. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Quam repellat pariatur animi ut in, facilis, tenetur harum
            velit minus quisquam nesciunt explicabo commodi natus, recusandae
            sed nulla vitae similique. Natus.
          </dd>
        </div>
        <div className="pb-12 px-20">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Information personnelle
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Utilisez une adresse e-mail que vous consultez régulièrement.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Prénom
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="last-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Nom
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e) => {
                    setLastname(e.target.value);
                  }}
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="about"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Message
              </label>
              <div className="mt-2">
                <textarea
                  id="about"
                  name="about"
                  rows={3}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={""}
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                />
              </div>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                Ecrire votre demande.
              </p>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-end gap-x-6">
            <a
              href={`mailto:damienboucher25@gmail.com?subject=Portfolio Message&body=${
                message + "%0D%0A" + name + " " + lastname + "%0D%0A" + email
              }`}
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={async () => {
                if (message !== ""  && email !== "")
                await CreateEmail(email + " " + name + " " + lastname + " " + message);
              }}
            >
              Envoyer
            </a>
          </div>
        </div>
      </div>

      <div className=" justify-center items-center mx-auto container ">
        <div className="space-y-1"></div>
      </div>
    </>
  );
}
