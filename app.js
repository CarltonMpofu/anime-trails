const express = require("express");
const mongoose = require('mongoose');

const app = express();

app.use(express.static("public"));

mongoose.connect('mongodb://127.0.0.1:27017/animeDB', {useNewUrlParser: true});

const CharacterSchema = new mongoose.Schema(
    {
        name: {type: String, required: true},
        image: {type: String, required: true},
        attr_name: {type: String, required: true},
        attr_link: {type: String, required: true}
    }
)

const Character = mongoose.model("Character", CharacterSchema);

// const c = new Character({name:"Naruto", image:"nje", attr_name: "nje", attr_link: "NJE"});


const AnimeSchema = new mongoose.Schema({
    name: {type: String, required: true},
    genre: {type: String, required: true},
    image: {type: String, required: true},
    attribution_name: {type: String, required: true},
    attribution_link: {type: String, required: true},
    quote_text: {type: String, required: true},
    quote_author: {type: String, required: true},
    characters: {type: [CharacterSchema], validate: [arrayLimit, '{PATH} should have 4']}
});

const Anime = mongoose.model("Anime", AnimeSchema);

const myCharacter = new Character({name:"Naruto", image:"nje", attr_name: "nje", attr_link: "NJE"});

// ·

const myAnime = new Anime({
    name: "Naruto Shippuden",
    genre: "Animation · Action · Adventure · Comedy · Fantasy",
    image: "https:anime.png",
    attribution_name: "nje",
    attribution_link: "nje",
    quote_text: "I believe.",
    quote_author: "Naruto",
    characters: [myCharacter, myCharacter, myCharacter, myCharacter]
});

// myAnime.save();

function arrayLimit(val) {
    return val.length === 4;
  }

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
}); 

app.listen(3000, function(){
    console.log("Server running on port 3000");
});
