// component logic goes in here

var app = new Vue({                     // initialize new instance of a Vue object
    el: '#app',                           // Vue attaches itself to this dom element (el) with the id "app"
    data: {                               // the Vue instance accepts a object attribute called data
        message: "Tugce Nur's Todo app",    // the data attribute accepts a key called message, with the value stated,
        itemTitle: "",
        toDoItems: [
            {
                id: 1,
                title: "Make ToDo app",
                isCompleted: false
            },
            {
                id: 2,
                title: "Fill ToDo App with content",
                isCompleted: false
            },
        ],
        selectedCat: 0
    },
    methods: {
        
        addItem() {
            this.toDoItems.push({
                id: this.toDoItems.length + 1,
                title: this.itemTitle,
                isCompleted: false,
                category: this.selectedCat
            });
            this.itemTitle = "";              // clear input field after adding new item
        },
    
        deleteItem(index) {
            this.toDoItems.splice(index, 1)
        }
    }
})
