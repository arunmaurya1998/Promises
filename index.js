let button = document.getElementById("button")

button.addEventListener("click", function(){
    setTimeout(function(){
       
        new Promise(function(resolve,reject){
            document.getElementById("hidden").style.display = "block"
            resolve()

        }).then(res)
    }, 1000);
    document.getElementById("input").value = ""
})
