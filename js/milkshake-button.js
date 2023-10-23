(() => {
    const toggleButton = document.getElementById('milkshake-toggleButton');
    const content = document.getElementById('milkshake-content');
    const buttonImage = document.getElementById('milkshake-buttonImage')
    let isOpen = false;

    toggleButton.addEventListener('click', () => {
      if (isOpen) {
        content.classList.remove('opened');
        content.classList.add('retracted');
        buttonImage.style.transform = "rotate(0deg)";
      } else {
        content.classList.remove('retracted');
        content.classList.add('opened');
        buttonImage.style.transform = "rotate(180deg)";
      }
      isOpen = !isOpen;
    });
})();