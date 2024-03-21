const express = require('express');
const ejs = require('ejs');
const fs = require('fs').promises;
require('dotenv').config();
const app = express();



app.get('/', async (req, res) =>{

    try {

     const fileName = "example.txt";
     const content = "This is the content that is going to be written to file";   

    //Write to the file
    await fs.writeFile(fileName, content, 'utf-8');

    const data = await fs.readFile('./example.txt', 'utf-8');

    console.log(data);

    res.send(data);

    } catch (error) {
        //console.error('Error reading file:', error);
        //res.status(500).send('Internal Server Error');
        res.send(error);
    }

});







const port = process.env.PORT || 3000; 

app.listen(port, () =>{
 console.log(`Listening on port ${port}`);
});