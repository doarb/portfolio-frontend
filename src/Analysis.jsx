import localforage from "localforage";
const URLBACK = import.meta.env.VITE_URL_BACK;


export async function consultProject(log) {
  let analysis = {
    type: "Project",
    description: log,
    date: new Date(),
  };
  const response = await fetch(URLBACK+"/api/analysis/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(analysis),
  });
  const data = await response.json();
  return data;
}

export async function CreateEmail(email) {
  let analysis = {
    type: "Email",
    description: email,
    date: new Date(),
  };
  const response = await fetch(URLBACK+"/api/analysis/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(analysis),
  });
  const data = await response.json();
  return data;
}

export async function getProjectAnalysis() {
  const token = await localforage.getItem("token");
  let searchparams = {
    type: "Project",
  };

  const response = await fetch(URLBACK+"/api/analysis/search", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token.accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(searchparams),
  });
  const data = await response.json();
  console.log(data.message);
  const groupedData = {};
  const datasub = [];
  data.message.forEach((item) => {
    if (groupedData[item.description]) {
      groupedData[item.description].push(item);
        datasub.forEach((element) => {
            if (element.name === "Project " +item.description) {
            element.nombre += 1;
            }
        });
      
    } else {
      groupedData[item.description] = [item];
      datasub.push({"name": "Project "+ item.description, "nombre": 1});
    }
  });
  console.log(groupedData);
  console.log(datasub);
  return datasub;
}
