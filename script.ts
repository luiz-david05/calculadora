document.addEventListener("DOMContentLoaded", () => {
    const display = document.getElementById("display") as HTMLInputElement;
    const buttons = document.querySelectorAll("button");
    let expression = "";
    const easteregg = document.getElementById("easteregg") as HTMLInputElement; 

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const buttonText = button.textContent;

            if (buttonText === "=") {
                if (display.value === "") {
                    return;
                }
                try {
                    const result = eval(expression);
                    display.value = `${expression} = ${result}`;
                    expression = "";
                } catch (error) {
                    display.value = "Error";
                    expression = "";
                }
            } else if (buttonText === "AC") {
                display.value = "";
                expression = "";
            } else if (buttonText === "CE") {
                display.value = display.value.slice(0, -1);
                expression = expression.slice(0, -1);
            } else if (buttonText === "x") {
                display.value += "*";
                expression += "*";
            } else if (buttonText === "÷") {
                display.value += "/";
                expression += "/";
            } else if (buttonText === "^") {
                display.value += "**";
                expression += "**";
            } else {
                display.value += buttonText;
                expression += buttonText;
            }

            if (display.value.length > 20) {
                display.value = display.value.slice(0, 20);
            }

            if (expression === "3385"){
                display.value = "Te amo, Camila!";
                easteregg.textContent = "❤️";
                expression = "";

                setTimeout(() => {
                    easteregg.textContent = "";
                    display.value = "";
                }
                , 5000);
            }
        });
    });
    document.addEventListener("keydown", (event) => {
        const key = event.key;

        if (/[0-9]/.test(key)) {
            display.value += key;
            expression += key;
        } else if (key === "+" || key === "-" || key === "*" || key === "/") {
            display.value += key;
            expression += key;
        } else if (key === "Enter") {
            try {
                const result = eval(expression);
                display.value = `${expression} = ${result}`;
                expression = "";
            } catch (error) {
                display.value = "Error";
                expression = "";
            }
        } else if (key === "Backspace") {
            display.value = display.value.slice(0, -1);
            expression = expression.slice(0, -1);
        }
    });
});
