let list = document.querySelectorAll("ul li");
let div = document.querySelector("div");
let inputPick = document.querySelector("input");

if(window.localStorage.getItem("color")) {
    div.style.backgroundColor = window.localStorage.getItem("color");
    list.forEach((li) => {
        li.classList.remove("active");
    });
    document.querySelector(`[data-color="${window.localStorage.getItem("color")}"]`).classList.add("active");
    inputPick.value = window.localStorage.getItem("color");
} else {
    div.style.backgroundColor = "crimson";
    inputPick.value = "crimson";
}

list.forEach((li) => {
    li.addEventListener("click",(e) => {
        /* console.log(e.currentTarget.dataset.color); */
        list.forEach((li) => {
            li.classList.remove("active");
        })
        e.currentTarget.classList.add("active");

        window.localStorage.setItem("color",e.currentTarget.dataset.color);
        div.style.backgroundColor = window.localStorage.getItem("color");
        inputPick.value = window.localStorage.getItem("color");
    })
})
