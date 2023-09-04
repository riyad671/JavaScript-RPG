let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let fighting;
let monsterHealth;
// let inventory = ["stick", "dagger", "sword"];
let inventory = ["stick"];

const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterNameText = document.querySelector("#monsterName");
const monsterHealthTxt = document.querySelector("#monsterHealth");

const locations = [
    {
        name: "town square",
        "button text": ["Go TO Store", "Go To Cave", "Fight Dragon"],
        "button function": [goStore, goCave, fightDragon],
        text: "You Are In The Town Square. You Will See Sign For \"Store\""
    },
    {
        name: "store",
        "button text": ["Buy 10 Health (10 Gold)", "Buy weapon (30 Gold)", "Go To Town Square"],
        "button function": [buyHealth, buyWeapon, goTown],
        text: "You Are In The Store"
    }
];

// Initialize Button
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

function location() {
    button1.innerText = locations["button text"][0];
    button2.innerText = locations["button text"][1];
    button3.innerText = locations["button text"][2];

    button1.onclick = locations["button function"][0];
    button2.onclick = locations["button function"][1];
    button3.onclick = locations["button function"][2];

    text.innerText = locations.text;
}

function goTown() {
    update(locations[0]);
}

function goStore() {
    
}
function goCave() {
  // console.log("Going To Cave");
}
function fightDragon() {
  // console.log("Fighting With Dragon");
}
function buyHealth() {}
function buyWeapon() {}
