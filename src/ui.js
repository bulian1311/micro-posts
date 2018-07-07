export default class UI {
  constructor() {
    this.posts = document.querySelector('#posts');
    this.titleInput = document.querySelector('#title');
    this.bodyInput = document.querySelector('#body');
    this.idInput = document.querySelector('#id');
    this.postSubmit = document.querySelector('.post-submit');
    this.container = document.querySelector('.posts-container');
  }

  showPosts(posts) {
    let output = '';

    posts.forEach(post => {
      output += `
        <div class="card mt-3">
          <div class="card-body">
            <h4 class="card-title">${post.title}</h4>
            <p class="card-text">${post.content}</p>
            <a id="delete" class="delete card-link" href="#" data-id="${
              post.id
            }">
              <i class="fas fa-times fa-lg float-right"></i>
            </a>
          </div>
        </div>
      `;
    });
    this.posts.innerHTML = output;
  }

  showAllert(message, className) {
    const div = document.createElement('div');
    div.className = className;
    div.id = 'alert';
    div.appendChild(document.createTextNode(message));

    this.container.insertBefore(div, this.posts);

    setTimeout(() => {
      document.querySelector('#alert').remove();
    }, 2000);
  }

  clearFields() {
    this.titleInput.value = '';
    this.bodyInput.value = '';
  }
}
