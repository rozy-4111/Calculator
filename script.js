const display = document.getElementById('input');
const buttons = document.querySelectorAll('button');
const operators = ["+", "-", "*", "/", "%", "**"];

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;
        if(value === "AC"){
            display.value = "";
        }
        else if (value === "="){
            try{
                display.value = eval(display.value);
            }catch{
                display.value = "Err";
                setTimeout(()=>{
                    display.value="";
                }, 2000);
                
            }
        }
        else if(value === "DEL"){
            display.value = display.value.slice(0, -1);
        }
        else{
            const lastChar = display.value.slice(-1);
            if(operators.includes(value)){
                if(operators.includes(lastChar)){
                    return;
                }
            }
            display.value += value;
        }
       
    });
});
