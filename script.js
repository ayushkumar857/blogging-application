document.addEventListener('DOMContentLoaded', function() {
    const blogForm = document.getElementById('blog-form');
    const blogPosts = document.getElementById('blog-posts');

    blogForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const title = document.getElementById('title').value;
        const content = document.getElementById('content').value;

        createBlogPost(title, content);

        blogForm.reset();
    });

    function createBlogPost(title, content) {
        const postDiv = document.createElement('div');
        postDiv.classList.add('blog-post');

        const postTitle = document.createElement('h2');
        postTitle.textContent = title;

        const postContent = document.createElement('p');
        postContent.textContent = content;

        postDiv.appendChild(postTitle);
        postDiv.appendChild(postContent);

        blogPosts.appendChild(postDiv);
    }
});
