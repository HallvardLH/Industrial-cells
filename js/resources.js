const resources = {
    wood: 0,
    plank: 0,
    coal: 0,
    stone: 0,
    iron_ore: 0,
    steel: 10,
    copper_ore: 0,
    gold_ore: 0,
    silver_ore: 0,
    unprocessed_diamond: 0,
    uranium_235: 0,
    uranium_238: 0,
    crude_oil: 0,
    sulphuric_acid: 0,
    petroleum: 10,
    plastic: 0,
    water: 100,
    kilowatts: 92,

    names: ['Wood', 'Plank', 'Coal', 'Stone', 'Iron ore', 'Steel', 'Copper ore', 'Gold ore', 'Silver ore', 'Unprocessed diamond', 'Uranium 235', 'Uranium 238', 'Crude oil', 'Sulphuric acid', 'petroleum', 'Plastic', 'water', 'Kilowatts'],
}

const recipes = {
    wood: [50, 'kilowatts'],
    wood_output: [1, 'wood'],

    coal: [100, 'kilowatts'],
    coal_output: [1, 'coal'],

    sulphuric_acid: [10, 'water', 5, 'petroleum', 2, 'steel'],
    sulphuric_acid_output: [10, 'sulphuric_acid'],
}