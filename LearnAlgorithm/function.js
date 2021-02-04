function functionName(parameter) {
    const process = "this is a process";
    return process;
}

let oldName = "Budi";
//node ngecheck variabel oldName, kemudian oldName mengembalikan isi valuenya 
let newName = oldName
// kemudian dikasih valuenya ke newName

function addDollarSign(number) {
    const output = `$${number}` //memproses angka untuk ditambahin tanda dollar didepannya
    return output; // mengembalikan suatu nilai
}

/* node mencari function addDollarSign. Setelah nama fungsi dipanggil, punya kemampuan untuk masukin parameter. 
Selanjutnya variabel yang masuk ke parameter yang ada pada function tsb kemudian value di proses masukin ke output,
dari output kemudian fungsi addDolalrSign mengembalikan nilai yang didapat dari output. 
Hasil returnnya disimpan dalam variabel amount.
*/

let amount = addDollarSign(200) //kalo gada isinya bakal undefined
/* function addDollarSign di eksekusi, maka node akan mencari fungsi mana yang sesuai, 
kemudian akan melakukan aksi sesuai isi fungsinya. 
Terdapat angka 200 yang merupakan parameter variabel number pada function 
function addDollarSign mereturn output kemudian masuk di variabel amount */
console.log("Amount : ", amount)

//function tidak ada parameter 

function getHello() {
    return 'hello';
}

console.log('Get Hello(): ', getHello())

function sayHello() {
    console.log('sayHello() : ', "hello")
}

function combineString(firstString, secondString) {
    return `${firstString} ${secondString}`
}

console.log('combineString')