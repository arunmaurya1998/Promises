let button = document.getElementById("order-button");
let min = 0;
let max = 1000;

let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
document.getElementById("order-number").innerText = randomNumber;
console.log(randomNumber)

button.addEventListener('click', function(){
    
    let min = 1000;
    let max = 10000;

let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(randomNumber)

    setTimeout(function(){
        new Promise(function(resolve, reject){
            document.getElementById("hidden").style.display = "block";
            resolve();
        }).then(function(){
        
        });
    },randomNumber);
});

