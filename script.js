document.getElementById("checkButton").addEventListener('click', () => {   //Run the function, when click "Check" button 
let num = parseInt(document.getElementById("numberInput").value);
let resultMsg = document.getElementById("resultMsg");

if (isNaN(num)) {
        resultMsg.textContent = "Please Enter a Valid Number";
        resultMsg.style.color = "red";
    }

else if (isPrime(num)) {
        resultMsg.textContent = `${num} is a Prime Number`;
        resultMsg.style.color = "green";
    }
    
else {
        resultMsg.textContent = `${num} is not a Prime Number`;
        resultMsg.style.color = "red";
    }
});

function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;

    return true;
}