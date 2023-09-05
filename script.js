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
const monsterHealthText = document.querySelector("#monsterHealth");

const weapons = [
    {
        name: "stick",
        power: 5
    },
    {
        name: "dagger",
        power: 30
    },
    {
        name: "claw hammer",
        power: 50
    },
    {
        name: "sword",
        power: 100
    }
];

const monsters = [
    {
        name: "slime",
        level: 2,
        health: 15
    },
    {
        name: "franged beast",
        level: 8,
        health: 60
    },
    {
        name: "dragon",
        level: 20,
        health: 300
    },
]

const locations = [
    {
        name: "town square",
        "button text": ["Go TO Store", "Go To Cave", "Fight Dragon"],
        "button function": [goStore, goCave, fightDragon],
        text: "You Are In The Town Square. You Will See Sign For Store"
    },
    {
        name: "store",
        "button text": ["Buy 10 Health (10 Gold)", "Buy weapon (30 Gold)", "Go To Town Square"],
        "button function": [buyHealth, buyWeapon, goTown],
        text: "You Are In The Store"
    },
    {
        name: "cave",
        "button text": ["Fight Slime", "Fight Fanged Beast", "Go To Town Square"],
        "button function": [fightSlime, fightBeast, goTown],
        text: "You Are In The Cave. You Can See Some Monsters"
    },
    {
        name: "fight",
        "button text": ["Attak", "Dodge", "Run"],
        "button function": [attack, dodge, goTown],
        text: "You Are Fighting With Monster"
    },
    {
        name: "kill monster",
        "button text": ["Go To Town Square", "Go To Town Square", "Go To Town Square"],
        "button function": [goTown, goTown, goTown],
        text: "You kill the monster and gain some XP and Gold."
    },
    {
        name: "lose",
        "button text": ["Replay", "Replay", "Replay"],
        "button function": [restart, restart, restart],
        text: "You die ☠️"
    }
];

// Initialize Button
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

function update(locations) {
    monsterStats.style.display = none;
    button1.innerText = locations["button text"][0];
    button2.innerText = locations["button text"][1];
    button3.innerText = locations["button text"][2];

    button1.onclick = locations["button function"][0];
    button2.onclick = locations["button function"][1];
    button3.onclick = locations["button function"][2];

    text.innerText = locations.text;
}

// Main Page (Town Square)
function goTown() {
    update(locations[0]);
}

//Main Page Store Button
function goStore() {
    update(locations[1]);
}

function buyHealth() {
    if(gold <= 10){
        gold -= 10;
        health += 10;
        goldText.innerText = gold;
        healthText.innerText = health;
    } else {
        text.innerText = "You Don't Have Enough Gold";
    }
}

function buyWeapon() {
    if(currentWeapon < weapons.length-1){
        if(gold >=30){
            gold -= 30;
            currentWeapon++;
            goldText.innerText = gold;
            let newWeapon = weapons[currentWeapon].name;
            text.innerText = "Now, you have a new " + newWeapon;
            inventory.push(newWeapon);
            text.innerText += "\nIn your inventory  you have: " + inventory ;
        } else {
            text.innerText = "You do not have enough gold for buy weapon";
        }
    } else {
        text.innerText = "You have already own the most powerfull weapon...!";
        button2.innerText = "Sell weapon for 15 gold";
        button2.onclick = sellWeapon;
    }
}

function sellWeapon(){
    if(inventory.length > 1){
        gold +=30;
        goldText.innerText = gold;
        let currentWeapon = inventory.shift();
        text.innerText = "You sold " + currentWeapon + " for 30 gold";
        // text.innerText = "You sold " + currentWeapon + ".";
        text.innerText += "In your inventory you have: " + inventory;
    } else {
        text.innerText = "Don't sell your only weapon";
    }
}

//Main Page Cave Button
function goCave() {
  // console.log("Going To Cave");
    update(locations[2]);
}

function fightSlime(){
    fighting = 0;
    goFight();
}
function fightBeast(){
    fighting = 1;
    goFight();
}

function fightDragon() {
    fighting = 2;
    goFight();
}

function goFight(){
    update(locations[3]);
    monsterHealth = monsters[fighting].health;
    monsterStats.style.display ="block";
    monsterNameText.innerText = monsters[fighting].name;
    monsterHealthText.innerText = monsterHealth;
}

function attack(){
    text.innerText = "The " + monsters[fighting].name + " attacks.";
    text.innerText += "You can attack with your " + weapons[currentWeapon].name + '.';
    health -= monsters[fighting].level;
    monsterHealth -= weapons[currentWeapon].power;
    monsterHealth -= weapons[currentWeapon].power + Math.floor(Math.random() * xp) + 1;
    health.innerText = health;
    monsterHealthText.innerText = monsterHealth;
    if(health <= 0){
        lose();
    } else if(monsterHealth <= 0){
        defatMonster();
    }
}

function dodge(){
    text.innerText = "You dodge the attack from the " + monsters[fighting].name + ".";
}

function lose(){
    update(locations[5]);
}

function defatMonster(){
    gold += Math.floor(monsters[fighting].level * 6.7);
    xp += monsters[fighting].level;
    goldText.innerText = gold;
    xpText.innerText = xp;
    update(locations[4]);
}

function restart(){
    xp = 0;
    health = 100;
    gold = 50;
    currentWeapon = 0;
    inventory = ["stick"];
    goldText.innerText = gold;
    healthText.innerText = health;
    xpText.innerText = xp;
    goTown();
}
