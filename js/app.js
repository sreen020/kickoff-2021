const url = "https://600ff44f6c21e1001704fac2.mockapi.io/minor-web/api";
const squad = 2;
const team = 5;

const putData = {
  id: 3,
  teamId: 5,
  name: "Sjoerd",
  prefix: "",
  surname: "Reen",
  mugshot: "",
  githubHandle: "",
  other: {
    sport: "Voetbal, Kickboks",
    muziek: "Hip Hop",
    werkplek: "Thuis",
  },
};

// GET REQUEST
const teams = fetch(`${url}/squads/${squad}/teams/${team}/members`)
  .then((response) => response.json())
  .then((data) => selecData(data));

async function postData(url = "", data = {}) {
  const response = await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
}

postData(`${url}/squads/${squad}/teams/${team}/members`, putData).then(
  (data) => {
    console.log("put", data);
  }
);

function selecData(data) {
  setName(data);
  console.log(data);
}

function setName(data) {
  const name = document.getElementsByClassName("name");
  name[0].innerText = data[0].name + " " + data[0].surname;
  console.log(name);
}
