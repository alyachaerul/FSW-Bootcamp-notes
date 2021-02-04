// Modify the HTML and CSS through JS by DOM
const buttonAdd = document.getElementsByClassName("add")[0] //to get the element by button add class namely add
const buttonEdit = document.getElementsByClassName("edit")[0] //to get the element by button edit class namely edit
const buttonRemove = document.getElementsByClassName("remove")[0] //to get the element by button remove class namely remove
const mainPar = document.getElementById('mainParagraph') //to get the element by id of paragraph
const h1 = document.getElementById('mainHeading')

// The condition when user click on Add Student Data button, the confirmation message will be appeared
buttonAdd.onclick = () => {
    let result = confirm("Are you sure you want to add data?");
    if (result == true) {
        alert('The data has successfully added to system!')
    } else {
        alert('The data failed to add')
    }
}

// The condition when user click on the main paragraph under the heading title, the font color will be changed to black
mainPar.onclick = () => {
    mainPar.style.color = "black";
}

// The condition when user click on the main heading title, the backgorund color will be changed to yellow
h1.onclick = () => {
    h1.style.backgroundColor = "yellow";
}

// // The condition when user click on Edit button on each data, the alert message will be appeared
buttonEdit.onclick = () => {
    alert("The data has been edited!")
}

// The condition when user click on Remove button on each data, the confirmation message will be appeared
buttonRemove.onclick = () => {
    let result = confirm("Are you sure you want to delete data?");
    if (result == true) {
        alert('The data has successfully removed!')
    } else {
        alert('The data failed to remove')
    }
}