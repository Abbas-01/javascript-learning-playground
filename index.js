const firstParagraph = document.querySelector("p:nth-Child(1)")
const subHeading = document.createElement("h2");
subHeading.appendChild(document.createTextNode("About"));

firstParagraph.replaceWith(subHeading);