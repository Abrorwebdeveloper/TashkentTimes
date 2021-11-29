let languageList = document.querySelectorAll(".language__list");
let languageText = document.querySelector(".language__text")
let languagess = document.querySelector(".language__span");

let burgerBtn = document.querySelector(".burger__btn");
let burgerBtnSection = document.querySelector(".burger_btn_section");

let searchSection = document.querySelector(".search__section");
let searchBtnSection = document.querySelector(".search_btn_section");

let modalsWindows = document.querySelector('.modals__windows');
let userSection = document.querySelector('.user__section');

userSection.addEventListener('click', ()=>{
    if(userSection.src.match('../images/User.svg')){
        userSection.src = '../images/Userreddd.svg'
        modalsWindows.style.transform = "translateY(0)";
        modalsWindows.style.transition = ".5s ease";searchSection.src = '../images/Search.svg'
        searchBtnSection.style.transform = "translateY(-120%)"
        searchBtnSection.style.transition = ".5s ease"
        burgerBtn.src = '../images/Burger.svg'
        burgerBtnSection.style.transform = "translateY(-120%)"
        burgerBtnSection.style.transition = ".5s ease"
        
    }else{
        userSection.src = '../images/User.svg'
        modalsWindows.style.transform = "translateY(-120%)";
        modalsWindows.style.transition = ".5s ease";
    }
})

languageText.addEventListener('click', ()=>{
    if(languagess.classList.contains('open__list')){
        languagess.style.display = 'none';
        languagess.classList.remove('open__list');
    }else{
        languagess.style.display = 'block';
        languagess.classList.add('open__list');
    }
})

searchSection.addEventListener('click', ()=>{
    if(searchSection.src.match('../images/Search.svg')){
        searchSection.src = '../images/X.svg';
        searchBtnSection.style.transform = "translateY(0)"
        searchBtnSection.style.transition = ".5s ease"
        burgerBtn.src = '../images/Burger.svg'
        burgerBtnSection.style.transform = "translateY(-120%)"
        burgerBtnSection.style.transition = ".5s ease"
        userSection.src = '../images/User.svg'
        modalsWindows.style.transform = "translateY(-120%)";
        modalsWindows.style.transition = ".5s ease";
    }else{
        searchSection.src = '../images/Search.svg'
        searchBtnSection.style.transform = "translateY(-120%)"
        searchBtnSection.style.transition = ".5s ease"
    }
})

burgerBtn.addEventListener('click', ()=> {
    if(burgerBtn.src.match('../images/Burger.svg')){
        burgerBtn.src = '../images/X.svg'
        burgerBtnSection.style.transform = "translateY(0)"
        burgerBtnSection.style.transition = ".5s ease" 
        searchSection.src = '../images/Search.svg'
        searchBtnSection.style.transform = "translateY(-120%)"
        searchBtnSection.style.transition = ".5s ease"
        userSection.src = '../images/User.svg'
        modalsWindows.style.transform = "translateY(-120%)";
        modalsWindows.style.transition = ".5s ease";
    } else{
        burgerBtn.src = '../images/Burger.svg'
        burgerBtnSection.style.transform = "translateY(-120%)"
        burgerBtnSection.style.transition = ".5s ease"
    }
   
})




