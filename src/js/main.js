import "./slider";
import modals from './modules/modals';
import tabs from './modules/tabs';
import forms from './modules/forms';
import changeModalState from './modules/changeModalState';
import timer from './modules/timer';
import images from './modules/images';

window.addEventListener('DOMContentLoaded', () => {//(глобальный обработчик события DOMContentLoaded отвечает за то, что скрипты начинают выполняться на странице тогда, когда DOM структура готова)
    "use strict";

    let modalState = {};
    let deadline = '2024-02-18';

    changeModalState(modalState);//(объект с данными из калькулятора)
    modals();
    tabs('.glazing_slider ', '.glazing_block', '.glazing_content', 'active');
    tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');
    tabs('.balcon_icons', '.balcon_icons_img', '.big_img > img', 'do_image_more', 'inline-block');
    forms(modalState);
    timer('.container1', deadline);
    images();
});