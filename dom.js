console.log("hii");

const p = document.querySelector("p");
const slider = document.querySelector(".slider");
const body = document.querySelector(".body");
const btn = document.querySelector("button");

btn.addEventListener("click" , () =>
{
    if (p.innerHTML ==="Light") {
        
        p.innerHTML = "Dark";
        p.style.color = "black";
        p.style.transform = "translateX(90px)";
        body.style.backgroundColor = "white";
        slider.style.transform = "translateX(-90px)";
        slider.innerHTML = `<img src="Daymode.png" alt="img"></img>`;
        btn.style.boxShadow = "0px 10px 15px 10px #919191";
        btn.style.backgroundColor = "white";
}
else {
    p.innerHTML = "Light";
    p.style.color = "White";
    p.style.transform = "translateX(0px)";
    body.style.backgroundColor = "#222943";
    slider.style.transform = "translateX(0)";
    slider.innerHTML = `<img src="darkmode.png" alt="img"></img>`;
    btn.style.boxShadow = "0px 10px 15px 10px #0d111f";
    btn.style.backgroundColor = "#222943";
}
}
);