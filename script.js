/**
 * Part 1: Humble Beginings
 */
console.log("\nPart 1: Humble Beginings");

// Model a simple adventurer - Robin - with basic properties such as health and an inventory.
const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],
    // Give Robin a companion to travel with – a cat called “Leo”. Give Leo a friend of his own: a flea named "Frank".
    companion: {
        name: "Leo",
        type: "Cat",
        companion: {
            name: "Frank",
            type: "Flea",
            belongings: ["small hat", "sunglasses"]
        }
    },
    // Give Robin a method for “dice rolls” - rolls() - a common way to handle outcomes in adventuring games. 
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
    /**
     * Part 4: Class Uniforms
     */
    static MAX_HEALTH = 100;

    getInventory() {
        return this.inventory;
    }
    roll(mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`)
        return result;
    }
}

// Re-create Robin using the Character class
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


/**
 * Part 3: Class Features
 */
console.log("\nPart 3: Class Features");

class Adventurer extends Character {
    /**
     * Part 4: Class Uniforms
     */
    static ROLES = ["Fighter", "Healer", "Wizard", "Captain"];
    constructor(name, role, hasCompanions) {
        super(name);
        // Adventurers have specialized roles.
        // If role matches one of the roles in ROLES, then assign to role property
        if (Adventurer.ROLES.includes(role)) this.role = role;
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
    /**
     * Part 6: Developing Skills
    */
    // Adventurers have the ability to fight each other
    duel(adventurer) { // Accept an Adventurer as a parameter.
        let count = 1;
        // Repeat this process until one of the two adventurers reaches 50 health.
        while (adventurer.health > 50 && this.health > 50) {
            // Use the roll() functionality to create opposing rolls for each adventurer.
            let player1Roll = adventurer.roll();
            let player2Roll = this.roll();
            // Subtract 1 from the adventurer with the lower roll.
            if (player1Roll < player2Roll) --adventurer.health;
            if (player2Roll < player1Roll) --this.health;
            // Log the results of this “round” of the duel, including the rolls and current health values.
            console.log(`\nRound ${count} Results:\n  Player 1\n    Dice roll: ${player1Roll}\n    Health: ${adventurer.health}`);
            console.log(`   Player 2\n    Dice roll: ${player2Roll}\n    Health: ${this.health}`);
            count++;
        }
        // Log the winner of the duel: the adventurer still above 50 health.
        if (adventurer.health > 50) console.log(`And the winner is...${adventurer.name}!`);
        if (this.health > 50) console.log(`And the winner is...${this.name}!`);
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
        console.log(`${robin2.name} just borrowed ${pInventory[pInventory.length - 1]} from ${this.name}. 
        ${robin2.name}'s inventory: ${pInventory}
        ${this.name}'s inventory: ${this.inventory}`);
        setTimeout(() => {
            this.inventory.splice(randomIndex, 0, pInventory.pop());
            console.log(`${this.inventory[randomIndex]} was returned to ${this.name}. 
            ${this.name}'s inventory: ${this.inventory}
            ${robin2.name}'s inventory: ${pInventory}`);
        }, 60000);

    }
}

// Change the declaration of Robin and the companions to use the new Adventurer and Companion classes.
const robin2 = new Adventurer("Robin", "captain", true);
robin2.inventory = ["sword", "potion", "artifact"];
const leo = new Companion("Leo", "Cat", true);
leo.inventory = [];
leo.companion = new Companion("Frank", "Flea", false);
leo.companion.inventory = ["small hat", "sunglasses"];
// leo.companion.loanItems();

const peter = new Adventurer("Peter", "fighter", false);
robin2.duel(peter);