const skipToContent = () => {
  const skipLink = document.querySelector('.skip-to-content');

  // Event listener for click event
  skipLink.addEventListener('click', (event) => {
    event.preventDefault();
    const target = document.querySelector('.content');
    target.tabIndex = -1;
    target.focus();
  });

  // Event listener for keydown event
  skipLink.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      const target = document.querySelector('.content');
      target.tabIndex = -1;
      target.focus();
    }
  });
};

export default skipToContent;
