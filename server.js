// initialize dependencies
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const app = express()
const Pusher = require('pusher')

// initialize Pusher
const pusher = new Pusher ({
	appId: '464048',
	key: 'fd1172560d800e56d65f',
	secret: '2778a289efcbbf495c6e',
	cluster: 'us2',
	encrypted: true
})

// initialize middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
    res.setHeader('Access-Control-Allow-Credentials', true)
    next()
})

app.set('port', (5000))

app.get('/', (req, res) => {
    res.send('Welcome')
})

app.post('/prices/new', (req, res) => {
    pusher.trigger( 'coin-prices', 'prices', {
        prices: req.body.prices
    });
    res.sendStatus(200);
})

app.listen(app.get('port'), () => {
    console.log('Node app is running on port', app.get('port'))
})