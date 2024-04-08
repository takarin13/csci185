function generateRandomNumber(low, high) {
    const range = high - low + 1;
    const num = Math.floor(Math.random() * range) + low;
    return num;
}

const secret = generateRandomNumber(1, 100);
console.log(secret);

// Your task:
function check() {
    document.querySelector("#guess").value;
    
    //console.log("CHECK!!!!")

    if (guess > secret){
        console.log("Too high")
    }
    if (guess < secret){
        console.log("Too low")
    }
    if (guess === secret){
        console.log("You win!")
    }
}
