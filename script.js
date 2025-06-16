let buttonOneElem = document.querySelector(".button-one");
let captionOneElem = document.querySelector(".caption-one");

let buttonTwoElem = document.querySelector(".button-two");
let captionTwoElem = document.querySelector(".caption-two");

buttonOneElem.addEventListener("click", function() {
    // 1. Declare a variable named spidyCaption.
    let spidyCaption = document.querySelector(".comment-one").value;
    //  - Store the value of the input with a class of "comment-one".

    // 2. Display the variable spidyCaption to captionOne.
    captionOneElem.innerHTML += spidyCaption;

});

// 3. Repeat the previous steps for the second meme.
buttonTwoElem.addEventListener("click", function() {
    // 1. Declare a variable named spidyCaption.
    let kermitCaption = document.querySelector(".comment-two").value;
    //  - Store the value of the input with a class of "comment-one".

    // 2. Display the variable spidyCaption to captionOne.
    captionTwoElem.innerHTML += kermitCaption;

});
//  - Be sure to store variables for the button and caption.