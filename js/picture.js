
// JavaScript для скрытия ненужных изображений (по языку)
// Предполагается, что у вас есть элемент select с определенным id или классом
const select = document.querySelector('#change-lang'); // Или используйте соответствующий класс

select.addEventListener('change', (event) => {
  const lang = event.target.value;
  const picturesRu = document.querySelectorAll('picture.image.certificate__image.ru');
  const picturesEn = document.querySelectorAll('picture.image.certificate__image.en');

  // Удаление класса 'visually-hidden' со всех элементов <picture>
  picturesRu.forEach(picture => {
    picture.classList.remove('visually-hidden');
  });
  picturesEn.forEach(picture => {
    picture.classList.remove('visually-hidden');
  });

  // Добавление класса 'visually-hidden' к элементам <picture>, не соответствующим выбранному языку
  if (lang === "en") {
    picturesRu.forEach(picture => {
      picture.classList.add('visually-hidden');
    });
  } else {
    picturesEn.forEach(picture => {
    picture.classList.add('visually-hidden');
    });
  }
});


