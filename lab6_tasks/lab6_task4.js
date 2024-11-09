function Storage(initialItems) {
    this.items = initialItems;
}

Storage.prototype.getItems = function() {
    return this.items;
};

Storage.prototype.addItem = function(item) {
    this.items.push(item);
};

Storage.prototype.removeItem = function(item) {
    const index = this.items.indexOf(item);
    if (index !== -1) {
        this.items.splice(index, 1);
    }
};

const arr = ["apple", "banana", "mango"];
const storage = new Storage(arr);

console.log(storage.getItems());      // ["apple", "banana", "mango"]

storage.addItem("orange");
console.log(storage.getItems());      // ["apple", "banana", "mango", "orange"]

storage.removeItem("banana");
console.log(storage.getItems());      // ["apple", "mango", "orange"]
