// main.js

// Example of dynamically loading posts (can expand later)
document.addEventListener("DOMContentLoaded", function() {
    const posts = [
        {
            title: "My Second Blog Post",
            date: "2024-09-29",
            content: "This is my second blog post. Stay tuned for more content!"
        },
        {
            title: "My First Blog Post",
            date: "2024-09-28",
            content: "Welcome to my blog. This is my very first post!"
        }
    ];

    const postsContainer = document.querySelector('.posts');

    posts.forEach(post => {
        const postElement = document.createElement('article');
        postElement.classList.add('post');
        postElement.innerHTML = `
            <h2>${post.title}</h2>
            <p>Published on <time datetime="${post.date}">${new Date(post.date).toLocaleDateString()}</time></p>
            <p>${post.content}</p>
        `;
        postsContainer.appendChild(postElement);
    });
});
