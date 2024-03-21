const express = require('express')
const app = express();
require('dotenv').config();
const cors = require('cors');

app.use(cors());

const database = require("./config/database");
const Topic = require('./model/topic.model');
const Question = require('./model/question.model');
const port = process.env.PORT;

database.connect();


// database.connect();


app.get('/', async(req, res) => {
    const topics = await Topic.find({});
    console.log(topics);
    res.json({
      topics: topics,
      code: 200
    })
})
app.get('/topics/:idTopic', async(req, res) => {
  const idTopics = req.params.idTopic;
  
  const questions = await Question.find({
    topicId: idTopics
  })
    res.json({
      code: 200,
      questions: questions
    })
});

app.get('/questions/:idQuestion', async(req, res) => {
  const idQuestion = req.params.idQuestion;
  
  const question = await Question.findOne({
    _id : idQuestion
  })
    res.json({
      code: 200,
      question: question
    })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})