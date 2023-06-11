
const commentsArr = [

    {
        name: "Miles Acost",
        comment: "I can't stop listening. Every time I hear one of their songs the vocals it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
        date: 12 / 20 / 2020
    }

];

const name__submission = document.getElementById("name__submission");
const comment__submission = document.getElementById("comment__submission");
const buttonSubmit = document.getElementById("comment_box");

function displayComment(name, comment) {

    const commentElement = document.createElement("div");
    const commentImg = document.createElement("img");
    const commentDate = document.createElement("span");
    const commentSection = document.getElementById("comment_section");

    const currentDate = new Date();
    const formattedDate = currentDate.toDateString();

    commentImg.src = "/BandSite-Package-Sprint-1/assets/images/Mohan-muruge.jpg"
    commentElement.innerText = `${name} and ${comment}`;
    commentElement.classList.add("commentbox");
    commentDate.innerText = `${formattedDate}`

    commentSection.appendChild(commentImg);
    commentSection.appendChild(commentElement);
    commentSection.appendChild(commentDate)

}

const commentSubmission = buttonSubmit.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = name__submission.value;
    const comment = comment__submission.value;

    displayComment(name,comment)
    // // for (i=0,i =1, i++)
    // displayComment(comments[0]);

});