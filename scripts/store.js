import item from './item.js';

const items = [];
const hideCheckedItems = false;

function findById(id) {
    return items.find(item => item.id === id);
}

function addItem(name) {
    try {
        item.validateName(name);
        this.items.push(item.create(name));
    }catch(e) {}
}

function findAndToggleChecked(id) {
    this.findById(id).checked = !this.findById(id).checked;
}

function findAndUpdateName(newName) {
    try {
        item.validateName(newName);
        this.findById(item.create(newName));
    }catch (e) {
        throw new Error(`Cannot update name: ${error.message}`)
    }
}

function findAndDelete(id) {
    let word = this.findById(id).name;
    this.items.splice(this.items.findIndex(word => word === word), 1);
}

function toggleCheckedFilter() {
    this.hideCheckedItems = !this.hideCheckedItems;
}

export default {
    items,
    hideCheckedItems,
    findById,
    addItem,
    findAndToggleChecked,
    findAndUpdateName,
    findAndDelete,
    toggleCheckedFilter
};