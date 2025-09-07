class Library {
    // Property
    books = [];

    // Constructor


    // Methods
    addBook (title, author) {
        this.books.push({title, author});
        return this.books;
    }

    removeBook (title) {
        const idx = this.books.findIndex(b => b.title === title);
        if (idx === -1) return false;
        this.books.splice(idx, 1);
        return this.books;
    }

    listBooks() {
        return this.books;
    }
}

const library1 = new Library();

console.log(library1.addBook("Red Light", "David"));

console.log(library1.removeBook("Red Light"));

