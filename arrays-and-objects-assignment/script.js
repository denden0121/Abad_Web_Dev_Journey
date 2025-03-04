// Task 1
let book = {
    title: "Three little pigs",
    author: "Denden",
    pages: 99,
    isRead: false
}

console.log("Using Dot Notation");
console.log("Title: " + book.title);
console.log("Author: " + book.author);
console.log("Pages: " + book.pages);
console.log("Is Read: " + book.isRead);

console.log("Using Bracket Notation");
console.log("Title: " + book["title"]);
console.log("Author: " + book["author"]);
console.log("Pages: " + book["pages"]);
console.log("Is Read: " + book["isRead"]);

book.isRead = true;
book.genre = "Horror";
console.log(book);

// Task 2
let movies = [
    {
        title: "Paranormal",
        author: "Denden",
        year: 1792
    },
    {
        title: "Conjuring",
        author: "Jecho",
        year: 1684
    },
    {
        title: "Insidious",
        author: "Denzone",
        year: 2001
    },
]

console.log("Second Movie Title: " + movies[1].title);
movies.push(
    {
        title: "From",
        author: "Denden",
        year: 1969
    }
)

movies[0].year = 2023;
console.log(movies);

// Task 3

let student = {
    name: "Denfer Jericho Abad",
    age: 22,
    subjects: [
        "Javascript",
        "PHP"
    ]
}

console.log(student.subjects[0]);
student.subjects.push("Laravel");
console.log(student);


// Task 4

let recipe = {
    name: "Adobo",
    ingredients : [
        "Meat: 1 kg (2.2 lbs) chicken or pork, or a combination",
        "Soy Sauce: 1/2 cup",
        "Vinegar: 1/4 cup",
        "Garlic: 6 cloves, minced",
        "Pepper: 1 tsp",
        "Onion: 1 medium",
        "Water: 1 cup",
        "Oil: 2 tbsp",
        "Salt & Pepper"
    ],
    isVegetarian: false
}

recipe.ingredients.push("secret ingredient");
console.log(recipe.ingredients[1]);
console.log(recipe);
