document.addEventListener('DOMContentLoaded', () => {
    const tabsSection = document.querySelector('[data-tabs]');
    if (!tabsSection) return;
  
    const buttons = tabsSection.querySelectorAll('[data-tab-button]');
    const contents = tabsSection.querySelectorAll('[data-tab-content]');
  
    buttons.forEach((button, index) => {
      button.addEventListener('click', () => {
        buttons.forEach(btn => btn.classList.remove('active'));
        contents.forEach(content => content.classList.remove('active'));
  
        button.classList.add('active');
        contents[index].classList.add('active');
      });
    });
  });
  