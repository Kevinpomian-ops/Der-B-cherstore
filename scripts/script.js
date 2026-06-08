let products = [
    {
        name: "Der Alchimist",
        path: "../assats/img/Der_Alchimist.jpg",
        preis: "12,99 €",
        writer: "Paulo Coelho",
        likes: 0,
        liked: false,
        comments: [
            "Eine inspirierende Geschichte über Träume und den Mut, ihnen zu folgen.",
            "Leicht zu lesen und voller schöner Lebensweisheiten."
        ]
    },
    {
        name: "Harry Potter und der Stein der Weisen",
        path: "../assats/img/Harry_Potter_und_der_Stein_der_Weisen.jpg",
        preis: "14,99 €",
        writer: "J. K. Rowling",
        likes: 0,
        liked: false,
        comments: [
            "Magische Welt, spannende Handlung und tolle Charaktere.",
            "Ein perfekter Einstieg in die Harry-Potter-Reihe."
        ]
    },
    {
        name: "Dune",
        path: "../assats/img/Dune.jpg",
        preis: "13,50 €",
        writer: "Frank Herbert",
        likes: 0,
        liked: false,
        comments: [
            "Eines der besten Science-Fiction-Bücher überhaupt.",
            "Komplexe Welt, aber unglaublich faszinierend."
        ]
    },
    {
        name: "It Ends With Us",
        path: "../assats/img/It_Ends_With_Us.jpg",
        preis: "13,00 €",
        writer: "Colleen Hoover",
        likes: 0,
        liked: false,
        comments: [
            "Emotional und bewegend bis zur letzten Seite.",
            "Eine Geschichte, die lange im Gedächtnis bleibt."
        ]
    },
    {
        name: "Die Tribute von Panem – Tödliche Spiele",
        path: "../assats/img/Die_Tribute_von_Panem.jpg",
        preis: "15,99 €",
        writer: "Suzanne Collins",
        likes: 0,
        liked: false,
        comments: [
            "Spannend von der ersten bis zur letzten Seite.",
            "Eine fesselnde Geschichte mit einer starken Hauptfigur."
        ]
    }
];


function init() {
    loadProducts();
    renderProducts();
}


function renderProducts() {
    let content = "";

    for (let index = 0; index < products.length; index++) {
        content += getBookTemplate(products[index], index);
    }

    document.getElementById("books").innerHTML = content;
}


function renderComments(comments) {
    let content = "";

    for (let comment of comments) {
        content += getCommentTemplate(comment);
    }

    return content;
}


function toggleLike(index) {
    let product = products[index];

    if (!product.liked) {
        product.likes++;
        product.liked = true;
    } else {
        product.likes--;
        product.liked = false;
    }

    saveProducts();
    renderProducts();
}


function addComment(index) {
    let input = document.getElementById(`commentInput${index}`);

    if (!input.value.trim()) return;

    products[index].comments.push(input.value);

    saveProducts();
    renderProducts();
}


function addBook() {
    let name = document.getElementById("bookName").value;
    let price = document.getElementById("bookPrice").value;
    let author = document.getElementById("bookAuthor").value;
    let image = document.getElementById("bookImage").value;

    if (!name || !price || !author || !image) return;

    products.push({
        name: name,
        preis: price,
        writer: author,
        path: image,
        likes: 0,
        liked: false,
        comments: []
    });

    clearInputs();
    saveProducts();
    renderProducts();
}


function clearInputs() {
    document.getElementById("bookName").value = "";
    document.getElementById("bookPrice").value = "";
    document.getElementById("bookAuthor").value = "";
    document.getElementById("bookImage").value = "";
}


function saveProducts() {
    localStorage.setItem("products", JSON.stringify(products));
}


function loadProducts() {
    let savedProducts = localStorage.getItem("products");

    if (savedProducts) {
        products = JSON.parse(savedProducts);
    }
}

