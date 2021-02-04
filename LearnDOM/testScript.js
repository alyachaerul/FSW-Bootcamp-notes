// Mengambil value dari HTML 

// Memilih berdasar class, id, dan selector --> gunanya untuk memanipulasi/modifikasi HTML dan CSS tanpa menyentuh program tsb hanya melalui JS.
const button = document.getElementsByClassName('btn')[0] //objek, method, class
const input = document.getElementsByClassName('input')[0]
const h1 = document.getElementsByClassName('heading')[0]
const p = document.getElementsByClassName('paragraph')[0]
const inputId = document.getElementById('input -id')
const buttonQuery = document.querySelector('button') //select 1
const pQueryAll = document.querySelectorAll('p') //bisa select semuanya
//method getElementsByClassName : mereturn HTML collection yang isinya adalah array

/*
button.onclick = () => { //masukin anon atau arrow function
    console.log('button pressed', input.value, h1.innerHTML); //elemen biasa inputan pake innerHTML
    input.value = "" //ngambil value
}
*/
console.log(pQueryAll);
console.log(button);
console.log(input);
console.log(inputId);
// console.log(h1)
console.log(p);

// cara nambahin style baru

paragraph.onclick = () => {
    for (const element of p) {
        element.style.backgroundColor = "gray" //properti didalam JS itu camelcase
    }
}

// id -> nge select satu element
// class -> ngeselect banyak element
// query selector -> paling umum digunakan -> bisa select element, bisa select class juga tinggal masukin ekstensi .class , id #id