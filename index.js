let inputString = "";
let output = "";

let btn = document.querySelectorAll(".val-for-cal");
let showInput = document.querySelector(".input-val");
let showOutput = document.querySelector(".output-val");
let specialBtn = document.querySelectorAll(".special-btn");

const evaluation = () => {
    if (inputString === "") return;
    while(isNaN(inputString[inputString.length-1]) && inputString.length > 0){
        inputString = inputString.slice(0,-1);
    }
    output = eval(inputString);
};

const setInput = () => {
    inputString = showInput.innerText;
};

const setOutput = () => {
        showOutput.innerText = output;
};

const clear = () => {
    showInput.innerText = "";
    showOutput.innerText = "";
    output = "";
    inputString = "";
};

const back = () => {
    showInput.innerText = showInput.innerText.slice(0,-1);
    setInput();
    if (inputString === ""){
        clear();
    }else{
        evaluation();
        setOutput();
    }
};

const equal = () => {
    showOutput.classList.add("output-equal");
    showInput.classList.add("input-equal");
    setTimeout(() => {
        showOutput.classList.remove("output-equal");
        showInput.classList.remove("input-equal");
    }, 2000);
};

btn.forEach((element) => {
    element.addEventListener("click", () => {
        let val = element.getAttribute("id");
        showInput.innerText += val;
        setInput();
        if(!isNaN(val)){
            evaluation();
        }
        if(isNaN(inputString)){
            setOutput();
        }
    });
});

specialBtn.forEach((specialElement) => {
    specialElement.addEventListener("click", () => {
        let specialVal = specialElement.getAttribute("id");
        if(specialVal === "clear"){
            clear();
        }else if(specialVal === "back"){
            back();
        }else if(specialVal === "equal"){
            equal();
        }
    });
});