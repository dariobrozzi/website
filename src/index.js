const init = () => {
  const readabilityNav = document.querySelector('readability-nav');
  readabilityNav.addEventListener('optionSelected', event => {
    if (event.detail.currentClass !== undefined) {
      document.body.classList.remove(event.detail.currentClass);
    }
    if (event.detail.newClass !== undefined) {
      document.body.classList.add(event.detail.newClass);
    }
  });
};
document.addEventListener("DOMContentLoaded", init);
