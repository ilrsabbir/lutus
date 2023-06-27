var humbarg = document.getElementById("humbarg");
var mobileMenu = document.getElementById("mobileMenu");
var dark = document.getElementById("dark");
var darkBg = document.getElementById("dark-bg");
let darkMode = document.querySelector("body");

let hlinks = document.querySelectorAll("#hLink");

humbarg.addEventListener("click", showMenu);


darkBg.addEventListener("click", change);

function change(){
    dark.classList.toggle("fa-sun");
    dark.classList.toggle("fa-moon");
    darkMode.classList.toggle('dark');
}

function showMenu(){
    humbarg.classList.toggle("fa-times");
    if(mobileMenu.style.left !=="0%"){
        mobileMenu.style.left = "0%";
    }else{
        mobileMenu.style.left = "110%";
    }
}
console.log(hlinks);

hlinks.forEach(link =>{
    link.addEventListener("click", ()=>{
        humbarg.classList.toggle("fa-times");
        mobileMenu.style.left = "110%";

    });
});
