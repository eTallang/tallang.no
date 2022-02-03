import { onMounted } from 'vue';
import './reveal.scss';

export const useReveal = () => {
  onMounted(() => {
    const elements = document.querySelectorAll('.reveal');
    console.log(elements);
    elements.forEach((element, index) => {
      element.classList.remove('visible');

      setTimeout(() => {
        element.classList.add('visible');
      }, 300 * index);
    });
  });
};
