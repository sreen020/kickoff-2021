const path = `https://601803ee971d850017a3f625.mockapi.io/members`;
document.getElementById("menu").addEventListener("click", (e) => {
  const selectedName = e.path[0].innerText;
  main(selectedName);
});
async function main(option) {
  const me = await getData(path);

  me.map((key) =>
    option ? me.map((elem) => (elem.name == option ? elem : false)) : me[0]
  );

  me.map((key) => {});
  setInfo(me);
  setSkills(me);
}

main();

async function getData(url) {
  return fetch(url)
    .then((response) => response.json())
    .then((data) => data);
}

async function postData(url, data) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
}

async function putData(url, data) {
  console.log(data);
  const response = await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
}

async function del(url, data) {
  const response = await fetch(url, {
    method: "DELELTE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
}

function setInfo(data) {
  const image = document.querySelector("#profile-image");
  const bio = document.querySelector("#bio");
  const name = document.querySelector("#name");
  image.src = data[0].mugshot;
  bio.innerText = data[0].other.bio;
  name.innerText = data[0].name + " " + data[0].surname;
}

function setSkills(data) {
  const htmlContainer = document.querySelector("#html-container");
  const cssContainer = document.querySelector("#css-container");
  const jsContainer = document.querySelector("#js-container");

  for (let index = 0; index < data[0].other.skills.html; index++) {
    htmlContainer.children[index].classList.add("accomplished");
  }
  for (let index = 0; index < data[0].other.skills.css; index++) {
    cssContainer.children[index].classList.add("accomplished");
  }
  for (let index = 0; index < data[0].other.skills.js; index++) {
    jsContainer.children[index].classList.add("accomplished");
  }
}
