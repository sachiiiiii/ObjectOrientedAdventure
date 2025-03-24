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
    roll (mod = 0) {
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