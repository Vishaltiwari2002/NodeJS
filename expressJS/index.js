const express = require('express')
const path = require('path')
const app = express()
const port = 3000

// app.get('/:name', (req, res) => {
//   res.send('Hello World!' + req.params.name)
// })

app.get('/nav', (req, res) => {
    //res.send('About')
    res.sendFile(path.join(__dirname,'index.html'))
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})