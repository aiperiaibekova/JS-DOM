// let text1=document.getElementsByTagName ('h1') [0];
// let text2=document.getElementsByTagName ('h1') [1];
// document.getElementsByTagName ('h1') [0].innerText='privet mir';
// document.getElementsByTagName ('h1') [1].innerText='I love ITC';
// text1.innerText='privet mir';
// text2.innerText='I love ITC';

// let texts=document.getElementsByTagName ('h1');
// let div=document.getElementsByTagName ('div');
// let block=document.getElementsByClassName ('block');
// let demo=document.getElementById('demo');
// let item=document.querySelector('.item');
//  texts[0].innerText='privet mir';
//  texts[1].innerText='I love ITC';

//  div[0].innerHTML='<span>Hello</span>';
//  block[0].innerText='block';
//  demo.innerText='demo';
//  demo.innerText='item';

//  let ask=prompt('Как вас зовут?');
//  document.getElementsByTagName('h1')[0].innerText=ask;

// let ask = prompt("Ваш логин");
// let password1 = prompt("Ваш пароль?");
// if (ask === name) {
//   document.getElementsByTagName("h1")[0].innerText = "Welcome " + ask;
// } else {
//   document.getElementsByTagName("h1")[0].innerText = "error 404";
// }

// let password = prompt("Ваш пароль?");
// if (password === "1234") {
//   document.getElementsByTagName("h2")[1].innerText = "Welcome ";
// } else {

// let demo=document.getElementById('demo');
// let demo1=document.getElementById('demo1');
// demo.style.backgroundColor='red';
// demo.style.width='100px';
// demo.style.height='100px';

// demo1.style.backgroundColor='blue';
// demo1.style.width='100px';
// demo1.style.height='100px';

// document.getElementsByTagName('img')[0].src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Kot-026.jpg/1200px-Kot-026.jpg'


let demo=document.getElementById('demo');
demo.innerHTML="<header>Header</header> <div> <nav>Nav</nav> <div>Content</div></div>";
demo.style.width = '800px';
demo.style.height = '500px';
demo.style.marginLeft = '300px';
demo.style.marginTop = '50px';
demo.style.border = '1px solid grey';

let header=demo.getElementsByTagName('header');
header[0].style.width="100%";
header[0].style.height="100px";
header[0].style.background="skyblue";
header[0].style.textAlign="center";
header[0].style.fontSize="30px";
header[0].style.paddingTop="50px";

let div=demo.getElementsByTagName('div');
div[0].style.display='flex';
div[0].style.justifyContent='flex-start';


let nav=demo.getElementsByTagName('nav');
nav[0].style.width="250px";
nav[0].style.height="350px";
nav[0].style.background="yellow";
nav[0].style.textAlign="center";
nav[0].style.fontSize="30px";
div[0].style.lineHeight="300px";


let div2=demo.getElementsByTagName('div');
div[1].style.width="100%";
div[1].style.height="350px";
div[1].style.background="pink";
div[1].style.textAlign="center";
div[1].style.fontSize="30px";
div[1].style.lineHeight="300px";
div[1].style.borderRadius="50%";
