/* Proses ngambil data dari internet kemudian munculin di browser */

const img = document.querySelector('#image')

fetch('https://api.thecatapi.com/v1/images/search?limit=5&page=10&order=Desc', {
        headers: {
            'x-api-key': '74bbc3e2-f9a0-4927-a5b9-7be652d845e5'
        }
    })
    .then(result => {
        result
            .json() //dikonversi ke json
            .then(res => {
                console.log(res); //res sebuah array --> hasil dari API nya
                const catImg = res[0].url
                img.src = catImg
            })
    })