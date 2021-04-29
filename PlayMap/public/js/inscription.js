let statusBar = document.getElementById("statue"); 
let sect1 = document.getElementById("sectRegister1");
let sect2 = document.getElementById("sectRegister2");
let sect3 = document.getElementById("sectRegister3");

let bt1 = document.getElementById("btn1");
let bt2 = document.querySelector("#btn2");




bt1.addEventListener('click', function () {
  sect1.classList.toggle('d-none');
  sect2.classList.toggle('d-none');
  statusBar.style.width = "55%";
});


bt2.addEventListener('click', function () {
  sect2.classList.toggle('d-none');
  sect3.classList.toggle('d-none');
  statusBar.style.width = "95%";
});

