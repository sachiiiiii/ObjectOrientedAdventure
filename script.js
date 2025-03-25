/**
 * Part 1: Humble Beginings
 */
console.log("\nPart 1: Humble Beginings");

// const adventurer = {
//     name: "Robin",
//     health: 10,
//     inventory: ["sword", "potion", "artifact"],
//     companion: {
//         name: "Leo",
//         type: "Cat",
//         companion: {
//             name: "Frank",
//             type: "Flea",
//             belongings: ["small hat", "sunglasses"]
//         }
//     },
//     roll(mod = 0) {
//         const result = Math.floor(Math.random() * 20) + 1 + mod;
//         console.log(`${this.name} rolled a ${result}.`)
//     }
// }
// adventurer.inventory.forEach(item => {
//     console.log(item);
// });

// adventurer.roll(1);
// adventurer.roll();
// adventurer.roll();


/**
 * Part 2: Class Fantasy
 */
console.log("\nPart 2: Class Fantasy");

class Character {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.inventory = [];
    }
    getInventory() {
        return this.inventory;
    }
    roll(mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`)
    }
}

// const robin = new Character("Robin");
// robin.inventory = ["sword", "potion", "artifact"];
// robin.companion = new Character("Leo");
// robin.companion.type = "Cat";
// robin.companion.companion = new Character("Frank");
// robin.companion.companion.type = "Flea";
// robin.companion.companion.inventory = ["small hat", "sunglasses"];

// robin.roll();
// robin.companion.roll();
// robin.companion.companion.roll();


/**
 * Part 3: Class Features
 */
console.log("\nPart 3: Class Features");

class Adventurer extends Character {
    constructor(name, role, hasCompanions) {
        super(name);
        // Adventurers have specialized roles and companions.
        this.role = role;
        this.hasCompanions = hasCompanions;
        // Every adventurer starts with a bed and 50 gold coins.
        this.inventory.push("bedroll", "50 gold coins");
    }
    getInventory() {
        return this.inventory;
    }
    // Adventurers have the ability to scout ahead of them.
    scout() {
        console.log(`${this.name} is scouting ahead...`);
        super.roll();
    }
}

class Companion extends Adventurer {
    constructor(name, type, hasCompanions) {
        super(name, "companion", hasCompanions);
        // Companions must have a type
        this.type = type;
    }
    // Get adventurer's inventory
    getAdvInventory() {
        return super.getInventory();
    }
    // Companions can loan a random item to their adventurer when he/she requests
    // And then take them back after a minute
    loanItems() {
        let randomIndex = Math.floor(Math.random() * this.inventory.length)
        let pInventory = robin2.inventory;
        pInventory.push(this.inventory[randomIndex]);
        this.inventory.splice(randomIndex, 1);
        console.log(pInventory);
        console.log(this.inventory);
        setTimeout(() => {
            this.inventory.splice(randomIndex, 0, pInventory.pop());
            console.log(pInventory);
            console.log(this.inventory);
        }, 60000);
        
    }
}

const robin2 = new Adventurer("Robin", "leader", true);
robin2.inventory = ["sword", "potion", "artifact"];
const leo = new Companion("Leo", "Cat", true);
leo.inventory = [];
leo.companion = new Companion("Frank", "Flea", false);
leo.companion.inventory = ["small hat", "sunglasses"];
leo.companion.loanItems();