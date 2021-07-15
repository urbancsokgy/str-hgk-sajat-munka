const express = require("express");
const mongoose = require("mongoose");
const Post = require("./model");
const bodyParser = require("body-parser");
const app = express();

app.listen(3000);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));

const Connection_String =
  "mongodb+srv://urbancsokgy:DiPqHPyh6k5MEfV9@cluster0.xxaol.mongodb.net/chats?retryWrites=true&w=majority";
const options = {
  useNewUrlParser: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
};
const connectionCallback = () => {
  console.log("Connection OK");
};
mongoose.connect(Connection_String, options, connectionCallback);

app.post("/", async (req, res, next) => {
  const post = new Post({
    username: req.body.username,
    message: req.body.message,
  });
  try {
    const response = await post.save();
    res.json(response)
    next(
        console.log("Hello")
    )
  } catch (error) {
    res.json({ error: error });
  }
});
app.get('/', async (req, res, next) => {
    const data = await Post.find()
    res.json(data) 
   
    next(
        //console.log(JSON.stringify( data,  null, 4))
    )
})
