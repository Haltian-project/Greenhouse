
const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  name: String,
  description: String,
  age: Number
  
});

const Item = mongoose.model("Item", itemSchema);
module.exports = Item

// Create a new item
const newItem = new Item({
    name: "Example Item1111",
    description: "Data goes to db",
    age: "25"
});

// Save the item to the database
newItem.save()
    .then((savedItem) => {
        console.log("Item saved:", savedItem);
    })
    .catch((error) => {
        console.error("Error saving item:", error);
    });

module.exports = mongoose.model("Item", itemSchema);