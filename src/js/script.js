

//variaveis
let menu = document.getElementById("menu");
let menu_bar = document.getElementById("menu-bar");
let navbar = document.getElementById("navegacao");

let dropdown_product = document.getElementById("button_product");
let product_arrow = document.getElementById("product_arrow");
let product = document.getElementById("product");

let dropdown_company = document.getElementById("button_company");
let company_arrow = document.getElementById("company_arrow");
let company = document.getElementById("company");

let dropdown_connect = document.getElementById("button_connect");
let connect_arrow = document.getElementById("connect_arrow");
let connect = document.getElementById("connect");


let min_width = window.matchMedia("(min-width: 768px)")

menu.addEventListener('click', (e) => {
  if(menu_bar.src.includes("src/img/icon-hamburger.svg")){
    menu_bar.src = "../../src/img/icon-close.svg";
  }else{
    menu_bar.src = "../../src/img/icon-hamburger.svg"
  }
  navbar.classList.toggle("open")
})

dropdown_product.addEventListener('click', (e) =>  {
  product_arrow.classList.toggle("girar");
  product.classList.toggle("aparecer");
  if(company.classList.contains("aparecer")){
    company.classList.toggle("aparecer");
  }
  if(connect.classList.contains("aparecer")){
    connect.classList.toggle("aparecer");
  }
});

dropdown_company.addEventListener('click', (e) =>  {
  company_arrow.classList.toggle("girar");
  company.classList.toggle("aparecer");
  if(product.classList.contains("aparecer")){
    product.classList.toggle("aparecer");
  }
  if(connect.classList.contains("aparecer")){
    connect.classList.toggle("aparecer");
  }
});


dropdown_connect.addEventListener('click', (e) =>  {
  connect_arrow.classList.toggle("girar");
  connect.classList.toggle("aparecer");
  if(product.classList.contains("aparecer")){
    product.classList.toggle("aparecer");
  }
  if(company.classList.contains("aparecer")){
    company.classList.toggle("aparecer");
  }
});



window.addEventListener('resize',() =>{

  if (window.innerWidth >= 768 ) {
    connect_arrow.src = "./../../src/img/icon-arrow-light.svg";
    product_arrow.src = "./../../src/img/icon-arrow-light.svg";
    company_arrow.src = "./../../src/img/icon-arrow-light.svg";
  } else {
    connect_arrow.src = "./../../src/img/icon-arrow-dark.svg";
    product_arrow.src = "./../../src/img/icon-arrow-dark.svg";
    company_arrow.src = "./../../src/img/icon-arrow-dark.svg";
  }
});

