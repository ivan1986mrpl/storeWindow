const modals = () => {
    function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) {
        const trigger = document.querySelectorAll(triggerSelector),
              modal = document.querySelector(modalSelector),
              close = document.querySelector(closeSelector),
              windows = document.querySelectorAll('[data-modal]'),//(дата атрибут в квадратных скобках)
              scroll = calcScroll();

        trigger.forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();//(отменяем стандартное поведение браузера (перезагрузку) если пользователь кликнет на ссылку)
                }

                windows.forEach(item => {//(закрываем все открытые модальные окна)
                    item.style.display = 'none';
                });
    
                modal.style.display = "block";
                document.body.style.overflow = "hidden";//(чтобы не скроллилась страница при открытом модальном окне)
                // document.body.classList.add('modal-open')
                document.body.style.marginRight = `${scroll}px`;
                // document.body.classList.add('modal-open');
            });
        });

        close.addEventListener('click', () => {
            windows.forEach(item => {//(закрываем все открытые модальные окна)
                item.style.display = 'none';
            });

            modal.style.display = "none";
            document.body.style.overflow = "";
            document.body.style.marginRight = `0px`;
            // document.body.classList.remove('modal-open');
        });

        modal.addEventListener('click', (e) => {//(чтобы окно закрывалось при клике на подложку)
            if (e.target === modal && closeClickOverlay) {//(если пользователь кликнул на подложку closeClickOverlay == true)
                windows.forEach(item => {//(закрываем все открытые модальные окна)
                    item.style.display = 'none';
                });

                modal.style.display = "none";
                document.body.style.overflow = ""; 
                document.body.style.marginRight = `0px`;
                // document.body.classList.remove('modal-open');
            }
        });
    }

    function showModalByTime(selector, time) {//(показ модального окна, если пользователь time секунд на странице)
        setTimeout(function() {
            document.querySelector(selector).style.display = 'block';
            document.body.style.overflow = "hidden";
        }, time);
    }

    function calcScroll() {//(чтобы страница не прыгала при открытии модального окна на ширину полосы прокрутки)
        let div = document.createElement('div');

        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';

        document.body.appendChild(div);
        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();

        return scrollWidth;
    }

    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');//(вызвать замерщика)
    bindModal('.phone_link', '.popup', '.popup .popup_close');//(заказать обратный звонок)
    bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');//(калькулятор рассчитать стоимость)
    bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);//(переход из калькулятора рассчитать стоимость в Далее)
    bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);//(последнее модальное окно калькулятора)
    // showModalByTime('.popup', 60000);//(показ модального окна, если пользователь 60 секунд на странице)
};

export default modals;