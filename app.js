const express = require("express");
const app = express();
const port = 3000;


app.get("/", (req, res) => {
  res.send("Server del mio blog")
})

const posts = [
  {
    title: "Gita al mare",
    content: "Una giornata di relax al mare",
    img: "imgs/gita.jpg",
    tags: ["mare", "relax", "amici"],
  },
  {
    title: "Compleanno",
    content: "Il mio 30esimo compleanno",
    img: "imgs/compleanno.jpg",
    tags: ["festa", "amici", "cena"],
  },
  {
    title: "Matrimonio",
    content: "Matrimonio di mio fratello",
    img: "imgs/matrimonio.jpg",
    tags: ["festa", "famiglia", "ricordi-importanti"],
  },
  {
    title: "Laurea",
    content: "Consegna della mia laurea",
    img: "imgs/laurea.jpg",
    tags: ["famiglia", "carriera", "ricordi-importanti"],
  },
  {
    title: "Pippo",
    content: "Abbiamo preso un cane!",
    img: "imgs/doge.jpg",
    tags: ["famiglia", "animali", "ricordi-importanti"],
  },
];

app.get("/bacheca", (req, res) => {
  res.json(posts)
})

app.use(express.static("public"));

app.listen(port, () => {
  console.log(`Server in ascolto alla porta ${port}`)
})