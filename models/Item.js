const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  name: String,
  description: String,
  
});

const Item = mongoose.model("Item", itemSchema);

// Create a new item
const newItem = new Item({
    name: "Example Item",
    description: "Data goes to db",
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