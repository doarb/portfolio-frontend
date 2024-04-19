import localforage from "localforage";
const URLBACK = import.meta.env.VITE_URL_BACK;
export async function login(log) {
  const response = await fetch(URLBACK+"/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(log),
  });
  const data = await response.json();
  set(data);
  return data;
}

export async function getUsers() {
    const token = await localforage.getItem("token");

    const response = await fetch(URLBACK+"/api/users", {
        headers: {
            Authorization: `Bearer ${token.accessToken}`,
        },
    });

    const users = await response.json();
    return users.message;
}

export async function deleteUser(id) {
    const token = await localforage.getItem("token");

    await fetch(`http://localhost:5000/api/users/${id}`, {
        method: "DELETE",
        headers: {
            Authorization: `Bearer ${token.accessToken}`,
        },
    });

    return getUsers();
}

export async function updateUser(id, user) {
    const token = await localforage.getItem("token");

    await fetch(`http://localhost:5000/api/users/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token.accessToken}`,
        },
        body: JSON.stringify(user),
    });

    return getUsers();
}

export async function createUser(user) {
    const token = await localforage.getItem("token");

    await fetch(URLBACK+"/api/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token.accessToken}`,
        },
        body: JSON.stringify(user),
    });

    return getUsers();
}

export async function connected() {
  const token = await localforage.getItem("token");

  if (token === null) {
    return false;
  }
  const response = await fetch(URLBACK+"/api/auth/logCheck", {
    headers: {
      Authorization: `Bearer ${token.accessToken}`,
    },
  });
  const data = await response.json();
  if (data.message === "Authorized") {
    return true;
  }
  logout()
  return false;
}

function set(token) {
  return localforage.setItem("token", token);
}

export async function logout() {
  await localforage.removeItem("token");
  
  await localforage.clear();
}
