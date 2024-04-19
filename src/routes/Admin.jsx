import { connected, getUsers } from "../Users";
import { useLoaderData } from "react-router-dom";
import { getProjectAnalysis } from "../Analysis";
import { createUser } from "../Users";
import { useState } from "react";

import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export async function loader() {
  const connectedUser = await connected();
  const user = await getUsers();
  const projectAnalysis = await getProjectAnalysis();
  return { connectedUser, user, projectAnalysis};
}

export default function Admin() {
  const { connectedUser, user,projectAnalysis } = useLoaderData();
  console.log(Array.isArray(user));
  const [nameP, setNameP] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  if (!connectedUser) {
    return <div>Unauthorized</div>;
  }
  return (

    <div className="w-full mx-auto flex flex-col h-screen overflow-y-hidden p-10">
      <div className="container">
        <h1 className="text-2xl text-black pb-6">Tableau de bord</h1>{" "}
      </div>
      <h2 className="text-xl pb-3 flex items-center">Nombre de visite par projet</h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={projectAnalysis}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="nombre" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
        </BarChart>
      </ResponsiveContainer>
      <div className="w-full mt-12">
        <p className="text-xl pb-3 flex items-center">
          <i className="fas fa-list mr-0"></i> Liste des utilisateurs
        </p>
        <div className="bg-white overflow-auto">
          <table className="min-w-full bg-white">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">
                  Nom
                </th>
                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                  Email
                </th>
                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                  Role
                </th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {user.map((user) => (
                <tr key={user.id}>
                  <td className="w-1/3 text-left py-3 px-4">{user.name}</td>
                  <td className="text-left py-3 px-4">{user.email}</td>
                  <td className="text-left py-3 px-4">{user.role}</td>
                </tr>
              ))}
              

            </tbody>
          </table>
        </div>
        
      </div>
      <div className="pb-12 px-20">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Créer un compte
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Nom
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e) => {
                    setNameP(e.target.value);
                  }}
                  value={nameP}
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="last-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email
              </label>
              <div className="mt-2">
                <input
                  type="email"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  value={email}
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              <div className="mt-2">
                <input
                  type="pasword"
                  name="pasword"
                  id="pasword"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  value={password}
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="last-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Rôle
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e) => {
                    setRole(e.target.value);
                  }}
                  value={role}
                />
              </div>
            </div>
          </div>
          <div className="mt-10">
            <a
              type="button"
              className="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
              onClick={async () => {
                let newUser = {
                  nameP: nameP,
                  email: email,
                  password: password,
                  role: role,
                };

                await createUser(newUser);
                window.location.reload();
              }}
            >
              Créer
            </a>
          </div>
        </div>
    </div>
    
  );
}
