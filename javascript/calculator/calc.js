let display = document.getElementById('display');
buttons = document.querySelectorAll('button');
for (item of buttons) {

    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        if (buttonText == 'C') {
            display.value = "";
        }
        else if (buttonText == '=') {
            display.value = eval(display.value);
        }
        else {
            display.value += buttonText;
        }

    })
}



