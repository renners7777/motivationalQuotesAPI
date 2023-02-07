document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
    const url = "https://api.api-ninjas.com/v1/quotes?category=inspirational"

    return fetch(url, {
        headers: {
            'x-api-key': '1lXZquhMgqfLl9lHSNF9FjkZ7yDnIXfWSwYxW0dC'
        },
    })
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            console.log(data)

            document.querySelector('p').innerText = data
        })
        .catch(err => {
            console.log(`error ${err}`)
        });

}
      

