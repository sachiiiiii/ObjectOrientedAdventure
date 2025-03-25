/**
 * Part 1: Humble Beginings
 */
console.log("\nPart 1: Humble Beginings");

const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],
    companion: {
        name: "Leo",
        type: "Cat",
        companion: {
            name: "Frank",
            type: "Flea",
            belongings: ["small hat", "sunglasses"]
        }
    },
    roll(mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`)
    }
}
adventurer.inventory.forEach(item => {
    console.log(item);
});

adventurer.roll(1);
adventurer.roll();
adventurer.roll();


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
    roll(mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`)
    }
}

const robin = new Character("Robin");
robin.inventory = ["sword", "potion", "artifact"];
robin.companion = new Character("Leo");
robin.companion.type = "Cat";
robin.companion.companion = new Character("Frank");
robin.companion.companion.type = "Flea";
robin.companion.companion.inventory = ["small hat", "sunglasses"];

robin.roll();
robin.companion.roll();
robin.companion.companion.roll();

// class Adventurer extends Character {
//     constructor(name, role, hasCompanions) {
//         super(name);
//         // Adventurers have specialized roles and companions.
//         this.role = role;
//         this.hasCompanion = hasCompanions.
//         // Every adventurer starts with a bed and 50 gold coins.
//         this.inventory.push("bedroll", "50 gold coins");
//     }
//     // Adventurers have the ability to scout ahead of them.
//     scout() {
//         console.log(`${this.name} is scouting ahead...`);
//         super.roll();
//     }
// }

// class Companion extends Adventurer {
//     //constructor()
// }