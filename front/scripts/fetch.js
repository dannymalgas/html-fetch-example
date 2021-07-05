console.log(">> fetch data here");

const getData = async () => {
    //  make the call to the end point
    await fetch('http://localhost:3000')
    .then(response => {
        return response.json()
    })
    .then(data => {
        //  Update the html with the loaded data
        document.getElementById("message").innerHTML = data.message;
    })
    .catch(error => console.error(error))
}

getData();