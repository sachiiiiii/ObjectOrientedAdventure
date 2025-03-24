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
        type: "Cat"
    }
}
adventurer.inventory.forEach(item => {
    console.log(item);
});