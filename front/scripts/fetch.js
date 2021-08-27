const API_URL = "http://localhost:3000"

const getData = async (url) => {
    // Request an endpoint.
    const resp = await fetch(url)

    if (!resp.ok) {
      throw new Error(`${url} HTTP error: ${resp.status} - ${resp.statusText}`);
    }

    const data = await resp.json()
    
    const el = document.getElementById("message")
    // Replace the HTML content with the fetched data.
    el.innerHTML = data.message
}

console.log("Fetching data");
getData(API_URL);
