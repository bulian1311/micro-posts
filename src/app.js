import Http from './http';
import UI from './ui';

const http = new Http('https://reduxblog.herokuapp.com/api/');
const ui = new UI();

document.addEventListener('DOMContentLoaded', getPosts);
document.querySelector('.post-submit').addEventListener('click', submitPost);
document.querySelector('#posts').addEventListener('click', deletePost);

async function getPosts() {
  try {
    const data = await http.get('posts?key=bulian1311');
    ui.showPosts(data);
  } catch (err) {
    console.log(err);
  }
}

async function submitPost() {
  const title = document.querySelector('#title').value;
  const content = document.querySelector('#body').value;

  try {
    await http.post('posts?key=bulian1311', { title, content });
    ui.showAllert('Пост успешно добавлен', 'alert alert-success mt-3');
    ui.clearFields();
  } catch (err) {
    console.log(err);
  }
  getPosts();
}

async function deletePost(event) {
  if (event.target.parentElement.id === 'delete') {
    const id = event.target.parentElement.dataset.id;

    try {
      await http.delete(`posts/${id}?key=bulian1311`);
      ui.showAllert('Пост успешно удален', 'alert alert-success mt-3');
    } catch (err) {
      console.log(err);
    }
  }
  getPosts();
}
