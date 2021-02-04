// Vanilla JS --> JS biasa

const commentInput = document.querySelector('#in-1');
const submitBtn = document.querySelector('.submit-btn');
const comments = document.querySelector('.comments');
submitBtn.onclick = () => {
    const input = commentInput.value
    const p = document.createElement('p') // --> method untuk membuat suatu elemen
    p.innerHTML = input
    comments.appendChild(p) // nampilin ke HTML dari JS
    commentInput.value = ""
}

// JQUERY
const commentInputJq = $('#in-1'); //select ID using #
const submitBtnJq = $('.submit-btn') //select class using .
const commentsJq = $('.comments');
submitBtnJq.click(() => {
    const input = commentInputJq.val();
    const p = $('<p></p>') // --> cara ngebuat elemen p dalam JQuery
    p.html(input[0]) // --> nampilin ke html dari JS 
    commentsJq.append(p);
    commentInputJq.val("");
});