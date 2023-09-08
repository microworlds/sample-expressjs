const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    const name = req.query?.name || `anon`
    console.log(`New request ${name}`)
    res.status(200).json({
        success: true,
        message: "Service is up and running 🟢",
        name: name
    })
})

app.get('*', (req, res) => res.status(404).json({"success": false, "message": "Not found ⚠️"}))

app.listen(port, () => console.log(`sample-expressjs app listening on port ${port}!`))
