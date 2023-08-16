import Alpine from 'alpinejs';
import tippy from 'tippy.js';

import { sidebar } from './components/sidebar';
import { darkmode } from './components/darkmode';
import { actionsDropdown } from './components/actionsDropdown';

// CSS TippyJS
import 'tippy.js/dist/tippy.css';
import './tippy-custom-theme.css'


window.tippy = tippy;
window.Alpine = Alpine; 

document.addEventListener('alpine:init', () => {
    Alpine.data('sidebar', sidebar);
    Alpine.data('darkmode', darkmode);
    Alpine.data('actionsDropdown', actionsDropdown);
});

Alpine.start();

document.addEventListener('DOMContentLoaded', () => {
    const templateTooltipMessahes = document.querySelector('#templateTooltipMessahes');
    const templatePopoverNotifications = document.querySelector('#templatePopoverNotifications');

    if (templateTooltipMessahes) {       
        tippy('#messages-notify', {
            content: templateTooltipMessahes.innerHTML,
            allowHTML: true,
        });
    }

    if (templatePopoverNotifications) {        
        tippy('#notifications', {
            content: templatePopoverNotifications.innerHTML,
            allowHTML: true,
            theme: 'custom',
            interactive: true,
            trigger: 'click',
        });
    }    
});