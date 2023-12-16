const subHeadings = document.getElementsByClassName("subHeading");
const paragraphs = document.querySelectorAll(".dummyParagraph");

const subHeadingsArray = Array.from(subHeadings);
const paragraphsArray = Array.from(paragraphs);
subHeadingsArray.forEach(subHeading => {
    subHeading.style.color = "indigo"
})
paragraphsArray.forEach(para => {
    para.style.color = "violet";
})

