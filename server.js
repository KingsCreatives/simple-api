const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000
const languages = require('./data')


app.use(cors())


// Home Page
app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/index.html')
})


app.get('/api/:name', (req, res) =>{
    const  name = req.params.name
    
  const programmingLanguage = languages.find(lang => lang.name === name.toLowerCase())

  programmingLanguage ? res.json(programmingLanguage) : res.send(`Can't find ${name[0].toUpperCase() + name.slice(1)} on our server, enter a different name and try again!!!`);
    
})





app.listen(process.env.PORT || PORT, (req, res) => {
    console.log(`Server is running on port ${PORT}, you better catch it`)
    
})