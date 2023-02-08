const { myArr } = require('./my-array.js')

document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
    const url = "https://type.fit/api/quotes";

    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data)
            
            Object.entries(data).forEach(([key, value]) => {
                console.log(`${key} ${value}`);
            })
        
            //document.querySelector('p').innerText =  

        // .catch((err) => {
        //     console.log(`error ${err}`)
        // });
        // })
        })}
