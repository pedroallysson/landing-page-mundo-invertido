

let tema = document.querySelector("body");

function switchTheme(){
    if (tema.classList.contains("light-theme")){
        tema.classList.remove("light-theme");
        tema.classList.add("dark-theme");
    }else {
        tema.classList.remove("dark-theme");
        tema.classList.add("light-theme");
    }
}

let botao = document.getElementById("switch-theme-button");

botao.addEventListener("click", switchTheme);

