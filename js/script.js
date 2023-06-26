//Array di oggetti: MILESTONE 0

const membersTeam = [
    {
        name: "Wayne Bernett",
        role: "Founder & CEO",
        photo: "img/wayne-barnett-founder-ceo.jpg",
    },
    {
        name: "Angela Caroll",
        role: "Chief Editor",
        photo: "img/angela-caroll-chief-editor.jpg",
    },
    {
        name: "Walter Gordon",
        role: "Office Manager",
        photo: "img/walter-gordon-office-manager.jpg",
    },
    {
        name: "Angela Lopez",
        role: "Social Media Manager",
        photo: "img/angela-lopez-social-media-manager.jpg",
    },
    {
        name: "Scott Estrada",
        role: "Developer",
        photo: "img/scott-estrada-developer.jpg",
    },
    {
        name: "Barbara Ramos",
        role: "Graphic Designer",
        photo: "img/barbara-ramos-graphic-designer.jpg",
    },
];
// STAMPA IN CONSOLE: MILESTONE 1
for(let index = 0; index < membersTeam.length; index++){
    const member = membersTeam[index];
    console.log(`Nome: ${member.name}`);
    console.log(`Ruolo: ${member.role}`);
    console.log(`Foto: ${member.photo}`);
    console.log("------------------------");
};


// STAMPA SUL DOM: MILESTONE 2
const cardsTeam = document.getElementsByClassName("the-team");
for(let index = 0; index < cardsTeam.length; index++){
    const member = membersTeam[index];
    const card = cardsTeam[index];
    const nameElement = card.getElementsByClassName("name")[0];
    const roleElement = card.getElementsByClassName("role")[0];
    const photoElement = card.getElementsByTagName("img")[0];

    nameElement.textContent = member.name;
    roleElement.textContent = member.role;
    photoElement.src = member.photo;
}