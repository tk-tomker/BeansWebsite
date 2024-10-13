let lightmode = localStorage.getItem('lightmode');
const themeSwitch = document.getElementById('themeswitch');

const enablelightmode = () => {
    document.body.classList.add('lightmode');
    header.style.backgroundImage='none';
    localStorage.setItem('lightmode', 'enabled');
};

const disablelightmode = ()=> {
    document.body.classList.remove('lightmode');
    
    localStorage.setItem('lightmode', 'disabled');
};

if(lightmode === "enabled") {
    enablelightmode();
    
}



themeSwitch.addEventListener("click", () => {
    lightMode = localStorage.getItem('lightmode');

    if (lightMode !== 'enabled'){
        enablelightmode();
    } else {
        disablelightmode();
    }
});