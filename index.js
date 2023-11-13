let loading = document.getElementById("loading");
let logo = document.getElementById("logo");
let content = document.getElementById("dynamic-content");
let contentContainer=document.getElementById("content-container")
let navSection=document.getElementById("nav")
let nav = document.getElementById("ul");
let back1 = document.getElementById("background-1");
let back2 = document.getElementById("background-2");
let heading = document.getElementById("heading");
let info = document.getElementById("info");
let project = document.getElementById("project");
let about = document.getElementById("about");
let contact = document.getElementById("contact");
let handson = document.getElementById("handson");
let home = document.getElementById("home");

setTimeout(() => {
  back1.style.top = "250px";
  back1.style.left = "-1%";
  back1.style.rotate = "-65deg";
  back2.style.top = "250px";
  back2.style.right = "-1%";
  back2.style.rotate = "-65deg";
}, 1900);

setTimeout(() => {
  loading.style.display = "none";
  logo.style.opacity = 1;
  logo.style.filter = "blur(0)";
  logo.style.transform = "translate(0px)";
  content.style.opacity = 1;
  content.style.filter = "blur(0)";
  content.style.transform = "translate(0px)";
  nav.style.opacity = 1;
  nav.style.filter = "blur(0)";
  nav.style.transform = "translate(0px)";
}, 3000);

home.addEventListener("click", function() {
  navSection.style.transition='transform 2s ease'
  console.log(this.id)
  // cntentCoontainer.style.transform
  navSection.style.transform='translateX(0)'
  content.style.transition='transform 2s ease'
  content.style.animation='blurAnimation 2s';
  content.style.transform='translateX(0vw)'
  heading.innerText = "WELCOME";
  info.innerText =
    "My name is Pranav. I create websites that drive conversions and enhance online visibility.";
});

about.addEventListener("click", () => {
  heading.innerText = "About Me";
  info.innerText =
    "Hello, I'm Pranav, a web developer with a passion for creating unique and impactful web applications. I have a versatile skill set, encompassing HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB. I've undertaken numerous personal projects, each of which has provided a valuable opportunity to delve into different aspects of web development, from designing responsive and visually appealing front-end interfaces, to creating robust back-end solutions using Node.js and Express, often paired with MongoDB for data storage. Thank you for visiting my portfolio!";
});

project.addEventListener("click",()=>{
  navSection.style.transition='transform 2s ease'
  // cntentCoontainer.style.transform
  navSection.style.transform='translateX(-50vw)'
  content.style.transition='transform 2s ease'
  content.style.animation='blurAnimation 2s';
  content.style.transform='translateX(50vw)'
  heading.innerText = "PROJECTS";
  info.innerText =
    "My name is Pranav. I create websites that drive conversions and enhance online visibility.";
})