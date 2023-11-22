const checkNumInputs = (selector) => {
    const numInputs = document.querySelectorAll(selector);

    numInputs.forEach(item => {//(чтобы в поле ввода инпута можно было ввести только числа)
        item.addEventListener('input', () => {
            item.value = item.value.replace(/\D/, '');//(ищем все не цифры и заменяет на пустую строку)
        });
    });
};

export default checkNumInputs;