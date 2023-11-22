import checkNumInputs from './checkNumInputs';

const changeModalState = (state) => {
    const windowForm = document.querySelectorAll('.balcon_icons_img'),//(форма окна)
          windowWidth = document.querySelectorAll('#width'), 
          windowHeight = document.querySelectorAll('#height'), 
          windowType = document.querySelectorAll('#view_type'),
          windowProfile = document.querySelectorAll('.checkbox');

    checkNumInputs('#width');//(чтобы в поле ввода инпута можно было ввести только числа)
    checkNumInputs('#height');

    function bindActionToElems (event, elem, prop) {//(event = событие, elem = элемент, на котором происходит, )
        elem.forEach((item, i) => {
            item.addEventListener(event, () => {
                switch(item.nodeName) {
                    case 'SPAN' ://(когда мы используем свойство nodeName, нам приходят названия элементов в верхнем регистре)
                        state[prop] = i;
                        break;
                    case 'INPUT' :
                        if (item.getAttribute('type') === 'checkbox') {
                            i === 0 ? state[prop] = "Холодное" : state[prop] = "Теплое";
                            elem.forEach((box, j) => {
                                box.checked = false;//(убираем галочки со всех чекбоксов, кроме того, в который кликнул пользователь)
                                if (i == j) {
                                    box.checked = true;//(отмечаем тот чекбокс, который кликнул пользователь)
                                }
                            });
                        } else {
                            state[prop] = item.value;
                        }
                        break;
                    case 'SELECT' :
                        state[prop] = item.value;
                        break;
                }

                console.log(state);
            });
        });
    }

    bindActionToElems('click', windowForm, 'form');
    bindActionToElems('input', windowHeight, 'height');
    bindActionToElems('input', windowWidth, 'width');
    bindActionToElems('change', windowType, 'type');
    bindActionToElems('change', windowProfile, 'profile');
};

export default changeModalState;