document.querySelector('button').addEventListener('click', getFetch)
const header = { 'X-Api-Key': '1lXZquhMgqfLl9lHSNF9FjkZ7yDnIXfWSwYxW0dC' }
function getFetch(){
    const url = "https://api.api-ninjas.com/v1/quotes?category=inspirational"

    fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then((data) => {
        console.log(data)

        // document.querySelector('p').innerText = data
      })
      .catch((error) => {
          console.log(`error ${err}`)
      });
}
      

