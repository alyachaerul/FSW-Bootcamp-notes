// Anonymous Function
let variableFunction = function () {
    return "this is an anonymous function"
}
console.log('variableFunction(): ', variableFunction()); // kalo ga pake () mengambil function secara utuh
// kalo variable diisi anonymous function, maka variabel tersebut akan berubah menjadi function

// Arrow Function
let variableArrowFunction = (parameter) => {
    return "this is an arrow function with param of " + parameter;
}
console.log('variableArrowFunction(): ', variableArrowFunction("Anything"));

// Perbedaannya pada saat melakukan binding

setTimeout(() => {
    console.log('setTineout()', 'this log is from setTimeout()');
}, 3000)

function getMessage() {
    setTimeout(() => {
        return 'This is the message from getMessage()'
    }, 3000)
    console.log('getMessage()', "getMessage() has completed its task")
}

console.log('getMessage()', getMessage());
//karena codingannya di delay, maka returnnya gadapet

function getMessageWithCallback(callback) { //callback berubah jadi function
    setTimeout(() => {
        callback('This is the message from getMessage()') //callback akan menjadi function karena masukin parameter anon function, jadi bisa dipanggil dalam fungsinya
    }, 3000) //parameter dalam callback akan masuk ke result
    console.log('getMessage()', "getMessage() has completed its task");
}

getMessageWithCallback((result) => { //arrow function
    console.log('outside getMessageWithCallBack()', result);
})

// jika sebuah var diisi anon / arrow function maka var teserbut akan berubah jadi function

// callback akan menjadi function karena masukin parameter anon function, jadi bisa dipanggil dalam fungsinya

// trick untuk mendapatkan hasil tanpa return karena ada amsalah dengan delay time dengan menggunakan callback