function openNav() {
  document.getElementById("myNav").style.width = "100%";
}
function closeNav() {
  document.getElementById("myNav").style.width = "0";
}
function modoDark(){
  closeNav();
  let elementList = ['body', '.logo-adress', '.nav-content', '.sobre', "#h1-Instagram", "#p-instagram-car", ".icon-ir-instagram",'.title','.footer'];
  let classDarkList = ['body-dark','logo-adress-dark','nav-content-dark', 'sobre-dark', "h1-Instagram-dark",'p-instagram-car-dark', 'icon-ir-instagram-dark','title-dark','footer-dark']

  for(let i=0; i<elementList.length; i++){
    let elementoflist = document.querySelector(elementList[i]);
    if(elementoflist !== null){
      elementoflist.classList.toggle(classDarkList[i]);
    }
  }

  let infoFalConos = document.querySelectorAll(".info");
  if(infoFalConos !== null){
    for(let i=0; i<infoFalConos.length;i++){
      infoFalConos[i].classList.toggle('info-dark');
    }
  }
  let buttonDark = document.querySelectorAll(".button-dark");
  buttonDark[0].classList.toggle("button-dark-mode-dark");
  buttonDark[1].classList.toggle("button-dark-mode-dark");
  if(buttonDark[0].innerHTML == 'Dark Mode'){
    buttonDark[0].innerHTML = 'Light Mode';
    buttonDark[1].innerHTML = 'Light Mode';
  }else{
    buttonDark[0].innerHTML = 'Dark Mode';
    buttonDark[1].innerHTML = 'Dark Mode';
  }
}