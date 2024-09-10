import './reveal.scss';

export const useReveal = (delay = 300) => {
  return () => {
    const elements = document.querySelectorAll('.reveal');
    elements.forEach((element, index) => {
      element.classList.remove('visible');

      setTimeout(() => {
        element.classList.add('visible');
      }, delay * index);
    });
  };
};
