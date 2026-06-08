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
                    id="likeButton${index}"
                    class="${product.liked ? 'liked' : ''}"
                    onclick="toggleLike(${index})">
                    ❤️
                </button>

                <span id="likeCount${index}">
                    ${product.likes}
                </span>
            </div>

            

            <div class="comments-container" id="comments${index}">
                ${renderComments(product.comments)}
            </div>

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

