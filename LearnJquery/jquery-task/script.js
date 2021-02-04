// Add Comment Action : when user want to add a new comment
const addComment = $('#inComment');
const submitBtn = $('.submit-btn');
const commentNews = $('.comments');
submitBtn.click(() => {
    const input = addComment.val();
    let p = $('<p></p>') // --> Membuat elemen p dalam JQuery
    p.html(input) // --> nampilin ke html dari JS 
    commentNews.append(p);
    addComment.val("");
    alert("The comment has been added!");
});

//Edit Comment Action : when user want to edit their comment
const editBtn = $('.edit-btn');
const editNews = $('.comments');
editBtn.click(() => {
    var news = prompt("Please enter your new comment!")
    if (news != null) {
        editNews.html(news); //menggunakan prompt yang dapat di edit pada pop up display
    }
    alert("The comment has been edited!");
});

// Delete Comment Action : when user want to delete their comment
const deleteBtn = $('.delete-btn');
const deleteNews = $('.comments');
deleteBtn.click(() => {
    deleteNews.empty(); // method empty digunakan untuk menghapus elemen yang ada
    alert("The comment has been deleted!");
})