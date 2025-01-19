// HINTS:
// 1. Import express and axios
import express from 'express';
import axios from 'axios';
// 2. Create an express app and set the port number.
let app = new express();

// 3. Use the public folder for static files.
app.use(express.static('public'))

// 4. When the user goes to the home page it should render the index.ejs file.
app.get("/",async (req,res)=>{
    let result =await axios.get("https://secrets-api.appbrewery.com/random");
    console.log(result.data)
    let secret = result.data.secret;
    let user = result.data.username;
    res.render("index.ejs",{secret:secret,user:user});
});
// 5. Use axios to get a random secret and pass it to index.ejs to display the
// secret and the username of the secret.

// 6. Listen on your predefined port and start the server.
app.listen(3000,()=>{
    console.log("Port running on 3000.....")
})
