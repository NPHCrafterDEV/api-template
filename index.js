// express is used to build the api
const express = require('express');

const app = express();
const port = 3000;

app.listen(port, () => console.log('Endpoint started!'))



app.get('/randomletter', async (req, res) => {

const letters = ["a", "b", "c", "d", "e", "f"]
const randomletter = letters[Math.floor(Math.random() * letters.length)]; //get a random letter from the letters array
 
let list = [];
list.push({
randomletter: randomletter
      
});
res.send(list)
});
