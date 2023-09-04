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

// Initialize Button
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

function goTown(){
    button1.innerText = "Go TO Store";
    button2.innerText = "Go To Cave";
    button3.innerText = "Fight Dragon";

    button1.onclick = goStore;
    button2.onclick = goCave;
    button3.onclick = fightDragon

    text.innerText = "You Are In The Town Square. You Will See Sign For Store";
}

function goStore(){
    button1.innerText = "Buy 10 Health (10 Gold)";
    button2.innerText = "Buy weapon (30 Gold)";
    button3.innerText = "Go To Town Square";

    button1.onclick = buyHealth;
    button2.onclick = buyWeapon;
    button3.onclick = goTown;

    text.innerText = "Welcome To The Store";
}
function goCave(){
    console.log("Going To Cave");
}
function fightDragon(){
    console.log("Fighting With Dragon");
}
function buyHealth(){

}
function buyWeapon(){

}
