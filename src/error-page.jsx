import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    //Mettre un fonction de debug à la palce de console.error
    console.error(error);
  
    return (
      <div id="error-page">
        <h1>Erreur</h1>
        <p>Une erreur est survenu</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    );
  }