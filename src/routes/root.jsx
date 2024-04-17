import { Outlet,NavLink } from "react-router-dom";
import utilisateurSvg from "../assets/utilisateur.svg";

export default function Root() {
  return (
    <>
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <a href="/" className="text-2xl font-bold text-gray-800">
              Portfolio
            </a>
            <nav className="space-x-8">
              <a href="/" className="text-gray-800 hover:text-gray-600">
                Accueil
              </a>
              <NavLink to="/projects" className="text-gray-800 hover:text-gray-600">
                Projects
              </NavLink>
              
            </nav>
            <NavLink to="/signin" className="text-gray-800 hover:text-gray-600">

            <button className="text-gray-800 hover:text-gray-600">
              <img src={utilisateurSvg} alt="Utilisateur" />
            </button>
            </NavLink>
          </div>
        </div>
      </header>
      <Outlet />
    </>
  );
}
