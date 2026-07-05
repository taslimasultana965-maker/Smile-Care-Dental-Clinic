javascript
// ================================
// Sticky Header Shadow
// ================================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        header.style.boxShadow = "0 8px 20px rgba(0,0,0,0.10)";
    } else {
        header.style.boxShadow = "0 4px 15px rgba(0,0,0,0.08)";
    }

});


// ================================
// Smooth Scroll
// ================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});


// ================================
// Back To Top Button
// ================================

const topBtn = document.createElement("button");

topBtn.id = "topBtn";

topBtn.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';

document.body.appendChild(topBtn);


window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});


topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


// ================================
// Reveal Animation
// ================================

const revealElements = document.querySelectorAll(

"section, .service-card, .doctor-card, .testimonial-card"

);

const reveal = () => {

    revealElements.forEach(item => {

        const windowHeight = window.innerHeight;

        const elementTop = item.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {

            item.style.opacity = "1";

            item.style.transform = "translateY(0)";

        }

    });

};

revealElements.forEach(item => {

    item.style.opacity = "0";

    item.style.transform = "translateY(40px)";

    item.style.transition = "all .8s ease";

});

window.addEventListener("scroll", reveal);

reveal();


// ================================
// Appointment Form
// ================================

const form = document.querySelector(".appointment-form");

if(form){

form.addEventListener("submit", function(e){

    e.preventDefault();

    alert("✅ Thank you! Your appointment request has been submitted.");

    form.reset();

});

}


// ================================
// Active Menu
// ================================

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", ()=>{

    let current = "";

    sections.forEach(section=>{

        const sectionTop = section.offsetTop - 120;

        const sectionHeight = section.clientHeight;

        if(pageYOffset >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});
```
// JavaScript Here
