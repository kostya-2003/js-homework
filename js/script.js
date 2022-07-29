// function hello(text, callback) {
//     console.log(text);
//     callback();
// }

// function me(){
//     console.log("Im from South Korea");
// }

// hello("Hello my name is Joe", me);

// hello("Hello my name is Joe", function(){
//     console.log("Im from South Korea");
// });

const firstBtn = document.querySelector("[data-firstBtn]");
const btns = document.querySelectorAll("button");
const link = document.querySelector("a");
const wrapper = document.getElementById("wrapper");
const box = document.getElementById("box");

// firstBtn.onclick = function(){
//     alert(1);
// };

// firstBtn.onclick = function(){
//     alert(2);
// };
// let i = 0;
// firstBtn.onclick = function(){
//     console.log(1);
//     ++i;
// };

// firstBtn.onclick = function(){
//     console.log(2);
//     i++;
//     firstBtn.setAttribute("disabled", "disabled");
// };

// console.log(i)
// let firstName = "Jack";
// let lastName = "Doe";

// firstBtn.addEventListener("click", () => {
//     alert(19 * 87);
//     console.log(firstName);
// });

// firstBtn.addEventListener("click", () => {
//     prompt("Greq dzer anuny");
//     console.log(lastName);
// });

// let i = 0;
// firstBtn.addEventListener("click", () => {
//     console.log(i++);
// }, {once: true});

// firstBtn.addEventListener("click", (e) => {
//         console.log(this);
//         console.log(e.target);
// });

// btns.forEach(btn => {
//     btn.addEventListener("mouseenter", function(e){
//         e.target.remove();
//     });
// });

// btns.forEach(btn => {
//     btn.addEventListener("click", function(e){
//         const elem = document.createElement("input");
//         document.body.append(elem);
//     });
// });

// function delateElement(miBan) {
//     miBan.target.remove();
// }

// btns.forEach(btn => {
//     btn.addEventListener("click", function(e){
//         delateElement(e)
//     });
// });

// let counter = 0;

// function removeHandler(){
//     if(counter === 10){
//         firstBtn.removeEventListener("click", removeHandler)
//     }
//     console.log(counter++);
// }

// firstBtn.addEventListener("click", removeHandler)

// link.addEventListener("click", (e) => {
//     e.preventDefault();
// });

// link.addEventListener("dblclick", function(e) {
//     e.preventDefault();
//     window.open(e.target.href);
// });

// function showSettings(e) {
//     console.log(this);
//     console.log(e.target);
// }

// firstBtn.addEventListener("click", showSettings);
// wrapper.addEventListener("click", showSettings);

// box.addEventListener("mouseenter", (e) => {
//     e.target.style.background = "red";
// });

// box.addEventListener("mouseleave", (e) => {
//     e.target.style.background = "green";
// });

// box.addEventListener("click", (e) => {
//     e.target.style.borderRadius = "50%";
// });

// setTimeout(() => {
//     box.removeAttribute("style")
// }, 5000);