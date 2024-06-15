document.getElementById("clear").addEventListener("click", () => {
    document.getElementById("result").value = "";
});



let result = document.getElementById("result");

function appendToResult(value) {
    result.value += value;
}

function calculate() {
    result.value = eval(result.value);
}


document.getElementById("Delete").addEventListener("click", () => {
    const resultElement = document.getElementById("result");
    resultElement.value = resultElement.value.slice(0, -1);
});



let result1 = document.getElementById("result");
if (isNaN(result1)) {
    alert("Please enter a valid number")
}
