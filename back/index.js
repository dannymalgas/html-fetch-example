const express = require('express')
const cors = require('cors')

const port = 3000

const app = express()
app.use(cors());

app.get('/', (_req, resp) => {
    const data = {
        message: "Aweh, World!"
    }
    resp.send(data)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
