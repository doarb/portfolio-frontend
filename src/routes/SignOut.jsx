import { redirect } from "react-router-dom";
import { logout } from "../Users";

export async function action() {
    console.log("action");
  await logout();
  return redirect("/");
}


