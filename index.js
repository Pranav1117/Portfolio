let loading = document.getElementById("loading");
let logo = document.getElementById("logo");
let content = document.getElementById("dynamic-content");
let contentContainer = document.getElementById("content-container");
let navSection = document.getElementById("nav");
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
let projectSection = document.getElementById("project-sec");
let navBtn = document.querySelectorAll(".nav-btn");
let section = document.getElementById("section");

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

home.addEventListener("click", function () {
  heading.innerText = "WELCOME";
  info.innerText =
    "My name is Pranav. I create websites that drive conversions and enhance online visibility.";
  projectSection.style.display = "none";

  home.classList.add("active");
  project.classList.remove("active");
  handson.classList.remove("active");
  about.classList.remove("active");
  contact.classList.remove("active");
});

about.addEventListener("click", () => {
  heading.innerText = "About Me";
  info.innerText =
    "Hi, I'm Pranav, a Full Stack Developer who transitioned from mechanical engineer to Web developer. I completed a comprehensive MERN stack course at PrepBytes Elevation Academy, where I gained expertise in HTML, CSS, JavaScript, React.js, Node.js, Express.js, and MongoDB. I've undertaken numerous personal projects, each of which has provided a valuable opportunity to delve into different aspects of web development, from designing responsive and visually appealing front-end interfaces, to creating robust back-end solutions using Node.js and Express, often paired with MongoDB for data storage. Thank you for visiting my portfolio!";
  projectSection.style.display = "none";

  home.classList.remove("active");
  project.classList.remove("active");
  handson.classList.remove("active");
  about.classList.add("active");
  contact.classList.remove("active");
});

project.addEventListener("click", () => {
  heading.innerText = "PROJECTS";
  info.innerText = "";
  projectSection.style.display = "flex";

  home.classList.remove("active");
  project.classList.add("active");
  handson.classList.remove("active");
  about.classList.remove("active");
  contact.classList.remove("active");
});

handson.addEventListener("click", () => {
  heading.innerText = "Handson";
  info.innerHTML = `
  <div class='hs-container'>
  <p >During my mern stack course, I actively engaged in various hands-on projects as following to establish a robust foundation in each stack.</p>
    <div class='hs-wrapper'>
      <div onClick="handleHtmlHandson()">
      <p>HTML</p>
        <img src='./media/html.png'>
      </div>
      <div onClick='handleCSSHandson()'>
        <p>CSS</p>
         <img src='./media/css.png'>
      </div>
      <div onClick='handleJsHandson()'>
        <p>Javascript</p>
          <img src='./media/javascript.png'>
      </div>
      <div onClick='handleReactHandson()'>
        <p>React</p>
          <img src='./media/react.png'>
      </div>

    </div>
    </div>
  `;
  projectSection.style.display = "none";

  home.classList.remove("active");
  project.classList.remove("active");
  handson.classList.add("active");
  about.classList.remove("active");
  contact.classList.remove("active");
});

contact.addEventListener("click", () => {
  heading.innerText = "Connect With Me";
  // heading.style.color = "#4c919";
  info.innerText = "";
  projectSection.style.display = "none";
  // 4;
  section.style.border = "none";

  home.classList.remove("active");
  project.classList.remove("active");
  handson.classList.remove("active");
  about.classList.remove("active");
  contact.classList.add("active");

  info.style.justifyContent = "";
  info.style.textAlign = "start";

  info.innerHTML = `
    <div class='contact-icon-wrapper'>
        <div>
        <a href='https://www.linkedin.com/in/pranav-bavaskar-a154a5232/' target="_blank">
          <img src='./media/Contact Icons/linkedin icon.png' alt='linkedIn'/>
        </a>
        
        <a href='https://twitter.com/Wei_Dev' target='_blank'>
          <img src='./media/Contact Icons/x icon.jpg' alt='X'/>
        </a>
        
        <a href='mailto:pranavbavaskar1@gmail.com'>
          <img src='./media/Contact Icons/mail icon.png' alt='Mail'/>
        </a>


        </div>
    </div>
`;
});

// Functions defination of handsons

function handleHtmlHandson() {
  info.innerHTML = `
  <div class='Html-hs-section-wrapper hs-box-wrapper'>
  <a href='https://pranav1117.github.io/Handson-1-HTML-/' target="_blank">
      <div class='hs-box'>
            <img src='./media/Html hs/1.png' alt='logo'>
            <p>Use of heading, Anchor, List tags</p>
      </div>
   </a>

            <a href='https://pranav1117.github.io/Handson-2-HTML-/' target="_blank">
            <div class='hs-box'>
            <img src='./media/Html hs/2.png' alt='logo'>
            <p>Created form which shows user info in url after submitting and use of Table tag</p>
            </div>
            </a>

            <a href='https://pranav1117.github.io/Handson-3-HTML-/' target="_blank">
            <div class='hs-box'>
            <img src='./media/Html hs/3.png' alt='logo'>
            <p>Use of Iframe and Video tags</p>
            </div>
            </a>
  </div>
  `;
}

function handleCSSHandson() {
  info.innerHTML = `
  <div class='css-hs-section-wrapper hs-box-wrapper'>
  <a href='https://pranav1117.github.io/css-assignment-1/' target="_blank">
      <div class='hs-box'>
            <img src='./media/Css hs/1.png' alt='logo'>
            <p>Implementation of Inline, inline and external Css. Text-color , Text-decoration implementation</p>
            </div>
            </a>

            <a href='https://pranav1117.github.io/css-assignment-2/' target="_blank">
      <div class='hs-box'>
            <img src='./media/Css hs/2.png' alt='logo'>
            <p>Created Menu card of Hotel by using Flex for layout</p>
            </div>
            </a>

            <a href='https://pranav1117.github.io/css-assignment-3/' target="_blank">
            <div class='hs-box'>
            <img src='./media/Css hs/3.png' alt='logo'>
            <p>Created Store card using different position's</p>
            </div>
          </a>

          <a href='https://pranav1117.github.io/css-assignment-4/' target="_blank">
          <div class='hs-box'>
            <img src='./media/Css hs/4.png' alt='logo'>
            <p>Created tution pamhlet using Grid and gradients</p>
            </div>
            </a>

            <a href='https://pranav1117.github.io/css-assignment-5/' target="_blank">
            <div class='hs-box'>
            <img src='./media/Css hs/5.png' alt='logo'>
            <p>Use of Animation and Transition</p>
            </div>
            </a>

            <a href='https://pranav1117.github.io/css-assignment-6/' target="_blank">
            <div class='hs-box'>
            <img src='./media/Css hs/6.png' alt='logo'>
            <p>Created Landing page with responsiveness</p>
            </div>
            </a>
  </div>
  `;
}

function handleJsHandson() {
  info.innerHTML = `
  <div class='Js-hs-section-wrapper'>
  <a href='https://pranav1117.github.io/DOM-handson-1/' target="_blank">
  <div class='hs-box'>
        <img src='./media/Js hs/1.png' alt='logo'>
        <p>Created a game in which user have to guess the number and it will show high score as well</p>
        </div>
        </a>
  </div>
  `;
}

function handleReactHandson() {
  info.innerHTML = `
  <div class='react-hs-section-wrapper hs-box-wrapper'>
  <a href='https://regal-manatee-4c4d2a.netlify.app/' target="_blank">
  <div class='hs-box'>
            <img src='./media/React hs/1.png' alt='logo'>
            <p>Implemented conditional rendering with functional and class based components</p>
            </div>
            </a>

            <a href='https://effortless-cannoli-1ea1e8.netlify.app/' target="_blank">
            <div class='hs-box'>
            <img src='./media/React hs/2.png' alt='logo'>
            <p>Implementated state management and form handling in class based component</p>
            </div>
            </a>

            <a href='https://fluffy-flan-485eac.netlify.app/' target="_blank">
            <div class='hs-box'>
            <img src='./media/React hs/3.png' alt='logo'>
            <p>Implemented form handling using props in function components</p>
            </div>
            </a>

            <a href='https://calm-starlight-848576.netlify.app/' target="_blank">
            <div class='hs-box'>
            <img src='./media/React hs/4.png' alt='logo'>
            <p>Implementated routing and used hooks like useState, usecontext useLocation and useNavigate</p>
            </div>
            </a>

            <a href='https://adorable-otter-69519f.netlify.app/' target="_blank">
            <div class='hs-box'>
            <img src='./media/React hs/5.png' alt='logo'>
            <p>Implementation Pure and Higher Order Component</p>
            </div>
            </a>


            <a href='https://cute-peony-0e4625.netlify.app/' target="_blank">
            <div class='hs-box'>
            <img src='./media/React hs/7.png' alt='logo'>
            <p>State management with Redux toolkit</p>
            </div>
            </a>
  </div>
  `;
}
