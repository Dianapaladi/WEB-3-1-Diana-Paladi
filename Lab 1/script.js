const button = document.getElementById("themeButton");

button.addEventListener("click", function(){
    document.body.classList.toggle("light-mode");
    if(document.body.classList.contains("light-mode")) {
        button.textContent = "🌙";
    } else{
        button.textContent = "☀️";
    }});