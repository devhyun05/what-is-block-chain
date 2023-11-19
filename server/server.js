const express = require('express'); 
const path = require('path'); 
const HTTP_PORT = process.env.PORT || 3000; 
const app = express();

app.use(express.static(path.join(__dirname + "/public")));

app.listen(HTTP_PORT, () =>{
    console.log(`Server is listening on PORT: ${HTTP_PORT}`); 
});
