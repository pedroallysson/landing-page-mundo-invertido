

function switchTheme(){
    document.body.classList.toggle("dark-theme");
    document.body.classList.toggle("light-theme");
}

let botao = document.getElementById("switch-theme-button");

botao.addEventListener("click", switchTheme);

