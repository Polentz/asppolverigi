inView(".section")
    .on("enter", section => {
        section.classList.add("in-viewport");
    })
    .on("exit", section => {
        section.classList.remove("in-viewport");
    });

inView.threshold(0.2);

const sections = document.querySelectorAll(".section");
sections.forEach((section, index) => {
    const content = section.querySelectorAll(".content");
    const icons = section.querySelectorAll(".icon");
    content.forEach((icon, index) => {
        const delay = index * 100;
        icon.style.transitionDelay = `${delay}ms`;
    });
    icons.forEach((shape, index) => {
        const delay = (content.length + index) * 100;
        shape.style.transitionDelay = `${delay}ms`;
    });
});

const scrollLinks = document.querySelectorAll(".js-scroll");
scrollLinks.forEach(link => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        const href = link.getAttribute("href");
        document.querySelector(href).scrollIntoView({
        });
    });
});

const questions = document.querySelectorAll(".list");
questions.forEach(question => {
    const opener = question.querySelector(".list-title")
    opener.addEventListener("click", () => {
        // close all the other sections
        [...questions].filter(q => q !== question).forEach(q => q.classList.remove("opened"))

        // then open the current section
        question.classList.toggle("opened")
    })
});

document.getElementById("hamburger").addEventListener("click", (event) => {
    document.getElementById("menu").classList.toggle("show");
    document.querySelector("header").classList.toggle("color")
    event.stopPropagation();
});
