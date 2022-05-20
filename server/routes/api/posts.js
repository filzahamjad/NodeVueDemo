const express = require("express");
const mongodb = require("mongodb");

const router = express.Router();

//get posts
router.get("/", async (req, res) => {
  const posts = await LoadPostsCollection();
  res.send(await posts.find({}).toArray);
});

//Add Posts
// router.post("/", async (req, res) => {
//   const posts = await LoadPostsCollection();
//   await posts.insertOne({
//     text: req.body.text,
//     createdAt: new Date(),
//   });
//   res.status(201).send();
// });
async function LoadPostsCollection() {
  const client = await mongodb.MongoClient.connect(
    "mongodb://localhost:27017/vueNode",
    {
      useNewUrlParser: true,
    }
  );
  console.log(client);
  return client.db("vueNode").collection("posts");
}

module.exports = router;
