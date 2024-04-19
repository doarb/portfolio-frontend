import { Outlet, NavLink, Form } from "react-router-dom";
import utilisateurSvg from "../assets/utilisateur.svg";
import { connected } from "../Users";
import { useLoaderData } from "react-router-dom";

export async function loader() {
  const connectedUser = await connected();
  return { connectedUser };
}

export default function Root() {
  const { connectedUser } = useLoaderData();
  const isLoggedIn = connectedUser;

  return (
    <>
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <a href="/" className="text-2xl font-bold text-gray-800">
              Portfolio
            </a>
            <nav className="space-x-8">
              <NavLink to="/" className="text-gray-800 hover:text-gray-600">
                Accueil
              </NavLink>
              <NavLink
                to="/projects"
                className="text-gray-800 hover:text-gray-600"
              >
                Projects
              </NavLink>
              {isLoggedIn ? (
                <NavLink
                  to="/admin"
                  className="text-gray-800 hover:text-gray-600"
                >
                  Admin
                </NavLink>
              ) : null}
            </nav>
            {isLoggedIn ? (
              <Form
                method="post"
                action="signout"
                className="flex items-center text-gray-800 hover:text-gray-600"
              >
                <button
                  type="submit"
                  className="flex items-center text-gray-800 hover:text-gray-600">
                <img src={utilisateurSvg} alt="Utilisateur" className="mr-2" />

                <span>Sign Out</span>
                </button>
              </Form>
            ) : (
              <NavLink
                to="/signin"
                className="flex items-center text-gray-800 hover:text-gray-600"
              >
                <img src={utilisateurSvg} alt="Utilisateur" className="mr-2" />
                <span>Sign In</span>
              </NavLink>
            )}
          </div>
        </div>
      </header>
      <Outlet />
    </>
  );
}
