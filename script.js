
const commentsArr = [

    {
        name: "Miles Acost",
        comment: "I can't stop listening. Every time I hear one of their songs the vocals it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
        date: new Date("12/20/2020")
    },

    {
        name: "Emilie Beach",
        comment: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
        date: new Date("01/09/2021")
    },

    {
        name: "Connor Walton",
        comment: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
        date: new Date("02/17/2021")
    }

];

const name__submission = document.getElementById("name__submission");
const comment__submission = document.getElementById("comment__submission");
const buttonSubmit = document.getElementById("comment_box");

function displayComment(array,number) {

    const commentElement = document.getElementById("submitted_comment_container");
    
    const commentSection = document.createElement("div");
    const commentSectionBottom = document.createElement("div");
    const commentAvatar = document.createElement("div");
    const commentImg = document.createElement("img");
    const placeholder =document.createElement("div");
    const commentSubmitter = document.createElement("div")
    const commentDate = document.createElement("div")
    const commentComment = document.createElement("div")

    const commentDateValue = new Date(array[number].date)
    const formattedDate = commentDateValue.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
      });

    commentComment.innerText = array[number].comment;
    commentDate.innerText = formattedDate;
    commentSubmitter.innerText = array[number].name;
    

    commentSection.classList.add("submitted_container")
    commentSectionBottom.classList.add("submitted_containerBottom")
    commentAvatar.classList.add("submitted_avatar");
    commentImg.classList.add("submitted_img");
    placeholder.classList.add("placeholder");
    commentComment.classList.add("submitted_comment");
    commentSubmitter.classList.add("submitted_name");
    commentDate.classList.add("submitted_date");

    // commentSection.appendChild(commentImg);
  
    commentAvatar.appendChild(commentImg);
    commentSection.appendChild(commentAvatar);
    commentSection.appendChild(commentSubmitter);
    commentSection.appendChild(commentDate);


    commentElement.appendChild(commentSection);

    commentSectionBottom.appendChild(placeholder);
    commentSectionBottom.appendChild(commentComment);
    commentElement.appendChild(commentSectionBottom);
}

const commentSubmission = buttonSubmit.addEventListener("submit", (event) => {
    event.preventDefault();

  

    const name_input = name__submission.value;
    const comment_input = comment__submission.value;
    const currentDate = new Date();
    const formattedDate = currentDate.toDateString();

    const inputComment =
    {
        name: name_input,
        comment: comment_input,
        date: formattedDate
    }

    // add into new array the input boxes
    commentsArr.push(inputComment);

  
    // clear current HTML

    const commentElement = document.getElementById("submitted_comment_container");
    commentElement.innerHTML =""


    const sortedComments = commentsArr.sort((a, b) => {
        return new Date(b.date) - new Date(a.date);

    });

    // i need to loop so that the array is appended in.

    for (let i in commentsArr) {

        console.log(sortedComments[i]);
        displayComment(sortedComments, i)
        
    }

    name__submission.value = "";
    comment__submission.value = "";

})