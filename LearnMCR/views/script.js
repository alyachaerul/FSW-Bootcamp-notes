// fetch data dari MCR, manipulasi pake JavaScript

const body = document.querySelector('#articles')
const input = document.querySelector('#input')
const sendBtn = document.querySelector('#sendBtn')

async function fetchData(method, body) {
    if (method != 'POST') { //just need the result when GET the data
        // result is an array
        let result = await fetch('/api/article', {
            method: 'GET'
        })
        result = await result.json()
        return result
    }
    await fetch('/api/article', {
        method,
        body: JSON.stringify(body), //convert object to string
        headers: { // to inform express if the body is filled with json
            'Content-Type': "application/json"
        }
    })
}

//how to use the dummy data 
/* const data = [
    {content: "ayam"}. 
    {content: "daging"}
]
*/
async function resetData() {
    body.innerHTML = ""
    await getData()
}

async function addData() {
    // get data from the input 
    console.log('data was sent');
    const value = input.value
    console.log('text area value : ', value);
    await fetchData('POST', {
        content: value
    })

    await resetData()
    input.value = ""
}

//hanya butuh referensi dari functionnya
sendBtn.onclick = addData

async function getData() {
    const results = await fetchData('GET')
    results.forEach(result => {
        const p = document.createElement('p')
        p.innerHTML = result.content
        body.appendChild(p)
    });
}

getData()