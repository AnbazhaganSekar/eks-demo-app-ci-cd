const express = require('express')
const app = express()
const port = 9000

app.get('/', (req, res) => {
  res.send('Hello this is my GithubAction project by Anbazhagan.S')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
