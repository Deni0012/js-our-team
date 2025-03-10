const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

const parentElement = document.querySelector(".team-cards-container")
let value = "";

renderHTML(parentElement, teamMembers)

function renderHTML(parent, teamMembers) {
  for (let i = 0; i < teamMembers.length; i++) {
    let member = teamMembers[i];
    let teamCard = createHTML(member)
    parent.appendChild(teamCard);
  }
}

function createHTML(member) {
  let element = document.createElement("div");
  element.classList.add("team-card")

  element.innerHTML = `
 <img src= ${member.img} alt=${member.name}>
 <div class="col"> 
 <h3>${member.name}</h3>
 <p>${member.role}</p>
 <a href="#">${member.email}</a>
 </div  `


  return element
}