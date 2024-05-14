  function onToggle(event) {
  if (event.target.open) {
    document.querySelectorAll(".resume__main__content > details[open]").forEach((el) => {
      // Исключаем из перебора елемент который мы только что открыли
      if (el === event.target) {
        return;
      }

      // Закрываем все остальные елементы <details>
      el.open = false;
    });
  }
}

// Вешаем наблюдатель на все елементы <details> внутри акордиона
document
  .querySelectorAll(".resume__main__content > details")
  .forEach((el) => el.addEventListener("toggle", onToggle));



// По клику на тело документа
document.body.onclick = (event) => {
  // Проверяем, что клик не был совершён по изображению
  if (event.target.tagName !== 'IMG') {
    // Найти все открытые <details>
    document.body.querySelectorAll('details[open]')
      // И закрыть каждый из них
      .forEach(e => e.open = false);
  }
}
