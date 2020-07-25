const express = require("express");
const cors = require("cors");
const port = 3000;
const app = express();

let posts = [
  {
    id: 0,
    title: "Test Post",
    description: "A brief post to test with",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus bibendum lectus nec massa eleifend, vitae faucibus odio tincidunt. Pellentesque eleifend, augue nec congue molestie.",
    gif: "",
    reaction: {
      thumbUp: 5,
      clap: 0,
      love: 0,
    },
    comments: ["comment1", "comment2", "comment3"],
  },
];

app.use(cors());
app.listen(port, () =>
  console.log(`Express server running at http://localhost:${port}`)
);

app.get("/", (req, res) => res.send(posts));
