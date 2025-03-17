import { search} from './search.js';
import { updateFeedback, nextFeedback, prevFeedback } from './feedback.js';
import { updateImageBasedOnTheme } from './updateImages.js';
import { registration } from './registration.js';
import { initScrollProgress } from "./scroll.js";


document.addEventListener('DOMContentLoaded', () => {
    search();
    updateFeedback();
    updateImageBasedOnTheme();
    initScrollProgress();
    

    // Hier fügen wir die Registrierung auf den Button hinzu
    document.querySelector('.newsletter_button').addEventListener('click', registration);
    document.getElementById('next-button')?.addEventListener('click', nextFeedback);
    document.getElementById('prev-button')?.addEventListener('click', prevFeedback);

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', updateImageBasedOnTheme);

    document.querySelector('search').addEventListener('click' , search);

  
       
    });
