let input = document.getElementById("inp");
let buttons = document.querySelectorAll('button');
let string = "";

buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        if (e.target.innerHTML === "=") {
            try {
                string = eval(string);
                input.value = string;
            } catch (error) {
                input.value = "Error";
            }
        } else if (e.target.innerHTML === "AC"||e.target.innerHTML =="DEL") {
            string = "";
            input.value = string;
        } else {
            string += e.target.innerHTML;
            input.value = string;
        }
    });
});
