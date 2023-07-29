import Alpine from 'alpinejs';
import tippy from 'tippy.js';

// CSS TippyJS
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/light.css';

window.tippy = tippy;


// DarkMode
// Alpine.data('theme', () => ({
//     dark: false,

//     toggleDark: () => {
//         console.log('dark');
//         this.dark = !this.dark;
//     }
// }));

window.Alpine = Alpine; 
Alpine.start();