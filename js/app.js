const path = `https://601803ee971d850017a3f625.mockapi.io/members`;

async function main() {
  const me = await getData(path);

  putData(path + "/" + me[0].id, me[0]).then((data) => {
    console.log("put", data);
  });
  setInfo(me);
  setSkills(me);
}

main();

async function getData(url) {
  return fetch(url)
    .then((response) => response.json())
    .then((data) =>
      data
        .map((member) =>
          member.name == "Sjoerd"
            ? {
                id: member.id,
                teamId: member.teamId,
                name: member.name,
                prefix: member.name,
                surname: member.surname,
                mugshot:
                  "https://scontent-ams4-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/64849546_465398650884939_2123255587850790776_n.jpg?_nc_ht=scontent-ams4-1.cdninstagram.com&_nc_cat=103&_nc_ohc=gPcUYcj7gU4AX8UWQ1I&tp=1&oh=430d622a4d8499a2103b5f9bdca770dc&oe=60424584",
                githubHandle: "sreen020",
                other: {
                  skills: {
                    html: 4,
                    css: 4,
                    js: 3,
                  },
                  bio:
                    "Ik ben Sjoerd, 22 jaar oud en student CMD. Geboren en getogen in Amstedam-Noord. Eerder ben ik in Alkmaar werkzaam geweest als front-end developer.",
                },
              }
            : false
        )
        .filter((item) => typeof item === "object")
    );
}

async function postData(url, data) {
  console.log(data);
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

  for (let index = 0; index < data.other.skills.html; index++) {
    htmlContainer.children.classList.add("accomplished");
  }
}
