//navbar section start//


const nav = document.createElement("nav");
document.getElementById("counter_container").append(nav);
nav.setAttribute("class", "navbar navbar-expand-lg fixed-top navbarDark navbarScroll bg-light");
nav.id = "navbar";

const div = document.createElement("div");
document.getElementById("navbar").append(div);
div.setAttribute("class", "container");
div.id = "nav_div"

const a = document.createElement("a");
document.getElementById("nav_div").append(a);
a.setAttribute("class", "navbar-brand");
a.textContent = "Andrea Coffetti";
a.href = "#footer"


//navbar section end//

//counter main start//

const h1 = document.createElement("h1");
document.getElementById("counter_container").append(h1);
h1.textContent = "CountMe!";

const span = document.createElement("span");
document.getElementById("counter_container").append(span);
span.setAttribute("class", "counter")
span.id = "counter";
span.textContent = "0";

const div1 = document.createElement("div");
document.getElementById("counter_container").append(div1);
div1.setAttribute("class", "btn_container");
div1.id = "btn_container";

const btn = document.createElement("button");
document.getElementById("btn_container").append(btn);
btn.setAttribute("class", "btn  btn-outline-light btn-floating decrease_ten");
btn.textContent = "-10";


const btn1 = document.createElement("button");
document.getElementById("btn_container").append(btn1);
btn1.setAttribute("class", "btn  btn-outline-light btn-floating decrease");
btn1.textContent = "-";


const btn2 = document.createElement("button");
document.getElementById("btn_container").append(btn2);
btn2.setAttribute("class", "btn  btn-outline-light btn-floating reset");
btn2.textContent = "reset";


const btn3 = document.createElement("button");
document.getElementById("btn_container").append(btn3);
btn3.setAttribute("class", "btn  btn-outline-light btn-floating increase");
btn3.textContent = "+";


const btn4 = document.createElement("button");
document.getElementById("btn_container").append(btn4);
btn4.setAttribute("class", "btn  btn-outline-light btn-floating increase_ten");
btn4.textContent = "+10";

//counter main end//

//footer sect start//

const footerdiv = document.createElement("div");
document.getElementById("footer").append(footerdiv);
footerdiv.id = "social_sect"
footerdiv.setAttribute("class", "footer container-fluid");

//social links//

const socialdiv = document.createElement("div");
document.getElementById("social_sect").append(socialdiv);
socialdiv.setAttribute("class", "social");

const a_ig = document.createElement("a");
socialdiv.append(a_ig);
a_ig.setAttribute("class", "btn btn-lg btn-floating")
a_ig.href = "https://www.instagram.com/andrea.cof/";
a_ig.rel = "noopener";
a_ig.target = "_blank"

const i = document.createElement("i");
a_ig.append(i);
i.setAttribute("class", "fab fa-instagram");

const a_tw = document.createElement("a");
socialdiv.append(a_tw);
a_tw.setAttribute("class", "btn btn-lg btn-floating")
a_tw.href = "https://twitter.com/andrea_coffetti";
a_tw.rel = "noopener";
a_tw.target = "_blank"

const i2 = document.createElement("i");
a_tw.append(i2);
i2.setAttribute("class", "fab fa-twitter");

const a_ln = document.createElement("a");
socialdiv.append(a_ln);
a_ln.setAttribute("class", "btn btn-lg btn-floating")
a_ln.href = "https://www.linkedin.com/in/andrea-coffetti-45a000206/";
a_ln.rel = "noopener";
a_ln.target = "_blank"

const i3 = document.createElement("i");
a_ln.append(i3);
i3.setAttribute("class", "fab fa-linkedin");

const a_gh = document.createElement("a");
socialdiv.append(a_gh);
a_gh.setAttribute("class", "btn btn-lg btn-floating")
a_gh.href = "https://github.com/CofAndrea";
a_gh.rel = "noopener";
a_gh.target = "_blank"

const i4 = document.createElement("i");
a_gh.append(i4);
i4.setAttribute("class", "fab fa-github");

//social links end//

//copyright start//

const h6 = document.createElement("h6");
footerdiv.append(h6);
h6.textContent = "© 2023 Copyright:";
h6.setAttribute("class", "mt-4");

const a_home = document.createElement("a");
h6.append(a_home);
a_home.setAttribute("class", "to_home");
a_home.textContent = "Andrea Coffetti";
a_home.href = "#";   
 
//copyright end//

//footer section end //