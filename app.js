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

// ·

/* Template 
const narutoShippuden = new Anime({
    name: "",
    genre: " · ",
    image: "",
    attribution_name: "",
    attribution_link: "",
    quote_text: "“ ”",
    quote_author: "",

    characters: [
        new Character({
            name:"" ,
            image:"", 
            attr_name: "", 
            attr_link: ""
        }), 
        new Character({
            name:"" ,
            image:"", 
            attr_name: "", 
            attr_link: ""
        }), 
        new Character({
            name:"" ,
            image:"", 
            attr_name: "", 
            attr_link: ""
        }), 
        new Character({
            name:"" ,
            image:"", 
            attr_name: "", 
            attr_link: ""
        })]
}); */

const narutoShippuden = new Anime({
    name: "Naruto Shippuden",
    genre: "Action · Adventure · Comedy · Superpower · Martial-Arts · Fantasy",
    image: "https://images8.alphacoders.com/598/598786.jpg",
    attribution_name: "Naruto and Sasuke's family by もり苔 (pixiv)",
    attribution_link: "https://wall.alphacoders.com/big.php?i=598786",
    quote_text: "\"Hard work is worthless for those that don't believe in themselves.\"",
    quote_author: "Naruto Uzumaki",

    characters: [
        new Character({
            name:"Itachi Uchiha" ,
            image:"https://images7.alphacoders.com/119/1195975.png", 
            attr_name: "Itachi", 
            attr_link: "https://wall.alphacoders.com/big.php?i=1195975"
        }), 
        new Character({
            name:"Minato" ,
            image:"https://images5.alphacoders.com/788/788694.jpg", 
            attr_name: "Anime Naruto HD Wallpaper by RoninGFX ", 
            attr_link: "https://wall.alphacoders.com/big.php?i=788694"
        }), 
        new Character({
            name:"Pain" ,
            image:"https://images8.alphacoders.com/124/1249998.jpg", 
            attr_name: "Anime Naruto HD Wallpaper by grievvy ", 
            attr_link: "https://wall.alphacoders.com/big.php?i=1249998"
        }), 
        new Character({
            name:"Sakura" ,
            image:"https://images3.alphacoders.com/936/936018.png", 
            attr_name: "SAKURA NARUTO by AkoEnSlip", 
            attr_link: "https://wall.alphacoders.com/big.php?i=936018"
        })]
});


const fairyTail = new Anime({
    name: "Fairy Tail",
    genre: "Animation · Action · Adventure · Comedy · Fantasy",
    image: "https://images5.alphacoders.com/694/694325.png",
    attribution_name: "Fairy Tail Characters ",
    attribution_link: "https://wall.alphacoders.com/big.php?i=694325",
    quote_text: "“If you truly desire greatness, you must first know what makes you weak!”",
    quote_author: "Erza Scarlet",

    characters: [
        new Character({
            name:"Erza Scarlet" ,
            image:"https://images.alphacoders.com/479/479713.jpg", 
            attr_name: "Erza Scarlet - Fight til the hell by SosukeAizen", 
            attr_link: "https://wall.alphacoders.com/big.php?i=479713"
        }), 
        new Character({
            name:"Natsu Dragneel" ,
            image:"https://images.alphacoders.com/942/942537.png", 
            attr_name: "Natsu Dragneel by Tokip ", 
            attr_link: "https://wall.alphacoders.com/big.php?i=942537"
        }), 
        new Character({
            name:"Gray Fullbuster" ,
            image:"https://images3.alphacoders.com/935/935560.png", 
            attr_name: "Gray Fullbuster by Marcos Cunha Rosa", 
            attr_link: "https://wall.alphacoders.com/big.php?i=935560"
        }), 
        new Character({
            name:"Zeref Dragneel" ,
            image:"https://images.alphacoders.com/748/748206.png", 
            attr_name: "Anime Fairy Tail HD Wallpaper", 
            attr_link: "https://wall.alphacoders.com/big.php?i=748206"
        })]
});

const gurrenLagann = new Anime({
    name: "Gurren Lagann",
    genre: "Action · Adventure",
    image: "https://images.alphacoders.com/851/851142.png",
    attribution_name: "Anime Tengen Toppa Gurren Lagann HD Wallpaper",
    attribution_link: "https://wall.alphacoders.com/big.php?i=851142",
    quote_text: "“Believe In The Kamina That Believe In You.”",
    quote_author: "Kamina",

    characters: [
        new Character({
            name:"Kamina" ,
            image:"https://images7.alphacoders.com/851/851227.jpg", 
            attr_name: "Anime Tengen Toppa Gurren Lagann HD Wallpaper", 
            attr_link: "https://wall.alphacoders.com/big.php?i=851227"
        }), 
        new Character({
            name:"Simon" ,
            image:"https://images4.alphacoders.com/133/133244.jpg", 
            attr_name: "Anime Tengen Toppa Gurren Lagann HD Wallpaper", 
            attr_link: "https://wall.alphacoders.com/big.php?i=133244"
        }), 
        new Character({
            name:"Yoko" ,
            image:"https://images4.alphacoders.com/660/660281.jpg", 
            attr_name: "Anime Tengen Toppa Gurren Lagann HD Wallpaper", 
            attr_link: "https://wall.alphacoders.com/big.php?i=660281"
        }), 
        new Character({
            name:"Logo" ,
            image:"https://images4.alphacoders.com/119/119476.jpg", 
            attr_name: "Anime Tengen Toppa Gurren Lagann HD Wallpaper", 
            attr_link: "https://wall.alphacoders.com/big.php?i=119476"
        })]
});

const onePiece = new Anime({
    name: "One Piece",
    genre: "Action · Adventure · Fantasy · Drama",
    image: "https://images5.alphacoders.com/319/319163.png",
    attribution_name: "Anime One Piece HD Wallpaper",
    attribution_link: "https://wall.alphacoders.com/big.php?i=319163",
    quote_text: "“If You Don't Take Risks, You Can't Create A Future”",
    quote_author: "Luffy",

    characters: [
        new Character({
            name:"Ace" ,
            image:"https://images.alphacoders.com/846/84631.jpg", 
            attr_name: "Anime One Piece HD Wallpaper", 
            attr_link: "https://wall.alphacoders.com/big.php?i=84631"
        }), 
        new Character({
            name:"Roronoa Zoro" ,
            image:"https://images3.alphacoders.com/131/1313891.png", 
            attr_name: "Roronoa Zoro by 神山すむ", 
            attr_link: "https://wall.alphacoders.com/big.php?i=1313891"
        }), 
        new Character({
            name:"Doflamingo" ,
            image:"https://images4.alphacoders.com/127/1278942.jpg", 
            attr_name: "Anime One Piece HD Wallpaper by ししゃも", 
            attr_link: "https://wall.alphacoders.com/big.php?i=1278942"
        }), 
        new Character({
            name:"Nico Robin" ,
            image:"https://images2.alphacoders.com/128/1285461.png", 
            attr_name: "Anime One Piece HD Wallpaper by commander_steel", 
            attr_link: "https://wall.alphacoders.com/big.php?i=1285461"
        })]
});

// narutoShippuden.save();
// fairyTail.save();
// gurrenLagann.save();
// onePiece.save();

function arrayLimit(val) {
    return val.length === 4;
  }

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
}); 

app.listen(3000, function(){
    console.log("Server running on port 3000");
});
