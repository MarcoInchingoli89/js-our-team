/* Our Team */

//Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team. Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

//MILESTONE 0: Creare l’array di oggetti con le informazioni fornite.

const teamMembers = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg',
    },

    {
        name: 'Angela',
        role: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg',
    },

    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg',
    },

    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        image: 'angela-lopez.social-media-manager.jpg',
    },

    {
        name: 'Scott Estrada',
        role: 'Developer',
        image: 'scott-estrada.developer.jpg',
    },

    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        image: 'barbara-ramos.graphic-designer.jpg',
    }
];

//console.log(teamMembers);

//MILESTONE 1: Stampare su console le informazioni di nome, ruolo e la stringa della foto

//MILESTONE 2: Stampare le stesse informazioni su DOM sottoforma di stringhe

const nameElement = document.querySelector('.name');
const roleElement = document.querySelector('.role');
const imageElement = document.querySelector('.image');
//console.log(colElement)
/*
for (const key in teamMembers) {
    console.log(key);
    console.log(teamMembers[key]);
    //colElement.innerHTML(teamMembers[key]);
}*/

for (let i = 0; i < teamMembers.length; i++) {
    const element = teamMembers[i];
    console.log(element.name);
    console.log(element.role);
    console.log(element.image);

    nameElement.innerText += " " + element.name;
    roleElement.innerText += " " + element.role;
    imageElement.innerText += " " + element.image;
}



//BONUS 1: Trasformare la stringa foto in una immagine effettiva

//BONUS 2: Organizzare i singoli membri in card/schede


/* Dati */

/* Name: Wayne Barnett
Role: Founder & CEO
Image: wayne-barnett-founder-ceo.jpg
___________________________________
Name: Angela 
Role: Chief Editor
Image: angela-caroll-chief-editor.jpg
____________________________________
Name: Waleter gordon
Role: Chief Editor
Image: walter-gordon-office-manager.jpg
____________________________________
Name: Waleter gordon
Role: Social Media Manager
Image: angela-lopez-social-media-manager.jpg
_________________________________
Name: Scott Estrada
Role: Developer
Image: scott-estrada-developer.jpg
_________________________________
Name: Barbara Ramos
Role: Grafic designer
Image: barbara-ramos-graphic-designer.jpg */


