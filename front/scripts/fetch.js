const API_URL = "http://localhost:3000"

const getData = async () => {
    // Make the call to the endpoint.
    const resp = await fetch(API_URL)

    if (!resp.ok()) {
      throw new Error(`${resp.statusCode}`)
    }
    const data = resp.json()
    
    const el = document.getElementById("message")
  
    // Replace the HTML content with the fetched data.
    el.innerHTML = data.message
}

console.log("Fetching data");

getData();
