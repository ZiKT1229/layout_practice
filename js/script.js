const articles = document.getElementsByTagName('article');
const btns = document.getElementsByClassName('link-btn');

Array.from(btns).forEach((btn, index) => {
  btn.addEventListener('click', (event) => {
    event.preventDefault();
    Array.from(articles).forEach(article => {
      article.classList.toggle('hide', true);
    });
    articles[index].classList.toggle('hide', false);
  });
});
