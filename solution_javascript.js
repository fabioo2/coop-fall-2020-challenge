class EventSourcer {
    constructor() {
        this.value = 0;
        this.storage = 0;
        this.array = [];
    }

    add(num) {
        this.array.push(num);
        this.value = this.array.reduce((a, b) => a + b, 0);
        console.log(this.array);
        console.log(this.value);
    }
    subtract(num) {
        this.array.push(-num);
        this.value = this.array.reduce((a, b) => a + b, 0);
        console.log(this.array);
        console.log(this.value);
    }
    undo() {
        this.storage = this.array[this.array.length - 1];
        this.array.pop();
        this.value = this.array.reduce((a, b) => a + b, 0);
        console.log(this.array);
        console.log(this.value);
    }
    redo() {
        this.array.push(this.storage);
        this.value = this.array.reduce((a, b) => a + b, 0);
        console.log(this.array);
        console.log(this.value);
    }
    bulk_undo(num) {
        for (let i = 0; i < num; i++) {
            this.undo();
        }
        console.log(this.array);
        console.log(this.value);
    }
    bulk_redo(num) {
        for (let i = 0; i < num; i++) {
            this.redo();
        }
        console.log(this.array);
        console.log(this.value);
    }
}

// ----- Do not modify anything below this line (needed for test suite) ------
module.exports = EventSourcer;
