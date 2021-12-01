// express is used to build the api
const express = require('express');

const app = express();
const port = 3000;

app.listen(port, () => console.log('Endpoint started!'))



app.get('/randomarray', async (req, res) => {

const letters = ["a", "b", "c", "d", "e", "f"]
const randomletter = letters[Math.floor(Math.random() * letters.length)]; //get a random letter from the letters array
 
let list = [];
list.push({
randomletter: randomarray
      
});
res.send(list)
});
