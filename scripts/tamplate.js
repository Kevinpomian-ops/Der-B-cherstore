function getBookTemplate(product, index) {
    return `
        <div class="book_content">

            <img src="${product.path}" alt="${product.name}">

            <ul>
                <li>${product.name}</li>
                <li>Preis: ${product.preis}</li>
                <li>Autor: ${product.writer}</li>
            </ul>

            <div class="like-container">
                <button
                    class="${product.liked ? 'liked' : ''}"
                    onclick="toggleLike(${index})">
                    ❤️
                </button>

                <span>
                    ${product.likes} Likes
                </span>
            </div>

            <h4>Kommentare</h4>

            ${renderComments(product.comments)}

            <input
                type="text"
                id="commentInput${index}"
                placeholder="Kommentar eingeben">

            <button onclick="addComment(${index})">
                Kommentar hinzufügen
            </button>

        </div>
    `;
}


function getCommentTemplate(comment) {
    return `
        <p>${comment}</p>
    `;
}

