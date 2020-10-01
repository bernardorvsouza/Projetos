const cors = require('cors')
const express = require('express')
const Twit = require('twit')
const app = express()
const axios = require('axios')

var T = new Twit({
    consumer_key: '6JU3LdzL9Oyynxk5JkGj69jMI',
    consumer_secret: 'qpJnJN3SVn5hYZjyHqqVXAOoQPqk9XQKKH84w2EiujSQNzbQIr',
    access_token: '1084909908-Qg5X15quGHOzaGBzZ5Xoltn4ISV6aA4agsUXlQW',
    access_token_secret: 'CoehYWZsKKdT5VGVLEzAwVcM7xxgSujdGCNfnLWnOQlJC',
    timeout_ms: 60 * 1000,
    strictSSL: true,
})

app.use(cors())
    //top trends  
app.get('/toptrends', (request, response) => {

    T.get('https://api.twitter.com/1.1/trends/place.json?id=1', (err, data, response) => {
        for (let eachData of data) {
            console.log(eachData)
        }
    })

    response.sendStatus(200)
})

app.listen(1111)