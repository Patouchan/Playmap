
/*---------------- MODALE CHALLENGER -------------------*/

let btnGo = document.getElementById('btnGo');
let userChal = document.getElementById('user-chal');

btnGo.addEventListener('click', function(event){
  event.preventDefault();
  userChal.classList.toggle('d-none');

});

/*---------------- FIN DU MODALE CHALLENGER -------------------*/

/*------------------------------
    Faire apparaitre l'image Ombre+Vélo.png au moment de cliquer sur le button Vélo
------------------------------*/

let btnVelo = document.getElementById('btnVelo');
let btnTrottinette = document.getElementById('btnTrottinette');
let btnPied = document.getElementById('btnPied');
let transport = document.getElementById('transport');

let velo = document.querySelector('.ombreVelo');
let trottinette = document.querySelector('.ombretrottinette');
let pied = document.querySelector('.ombrePied');

btnVelo.addEventListener('click', function(event){
  event.preventDefault();

  velo.classList.remove('d-none');
  transport.setAttribute("src", "../images/Vélo.png");
  pied.classList.add('d-none');
  trottinette.classList.add('d-none');

});


btnTrottinette.addEventListener('click', function(event){
  event.preventDefault();

  trottinette.classList.remove('d-none');
  transport.setAttribute("src", "../images/Trottinette.png");
  pied.classList.add('d-none');
  velo.classList.add('d-none');

});

btnPied.addEventListener('click', function(event){

  event.preventDefault();
  pied.classList.remove('d-none');
  transport.setAttribute("src", "../images/boots.png");
  trottinette.classList.add('d-none');
  velo.classList.add('d-none');

});








let userModal = document.querySelector('#user-acc');

let btnModal = document.querySelector('#btnModal');
let btnModalAvat = document.querySelector('#btnModalAvat');

btnModal.addEventListener('click', function (e) {
  e.preventDefault();
  userModal.classList.toggle('d-none');

  let timer = setInterval(() => {
    let op = parseFloat(userModal.style.opacity);
    op = op + 0.025;
    userModal.setAttribute('style', `opacity: ${op};`);
    console.log(op);
    if (op > 1) {
      clearInterval(timer);
    }
  }, 10);
  
});

btnModalAvat.addEventListener('click', function (e) {
  e.preventDefault();
  userModal.classList.toggle('d-none');

  let timer = setInterval(() => {
    let op = parseFloat(userModal.style.opacity);
    op = op + 0.025;
    userModal.setAttribute('style', `opacity: ${op};`);
    console.log(op);
    if (op > 1) {
      clearInterval(timer);
    }
  }, 10);
});


userModal.addEventListener('click', function () {
  userModal.classList.toggle('d-none');
  userModal.style.opacity = 0;
});

