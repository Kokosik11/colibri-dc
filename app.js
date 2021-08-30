const express = require('express');
const config = require('config');
const mongoose = require('mongoose');

const app = express();

const { PORT } = config.get('Server') || 3001;
// const mongoURI = config.get('mongoURI');

const { mongoURI } = config.get('DB');

app.use(express.json({ extended: true}))

app.get('/test1', (req, res) => {
    let data = {
        message: "asdsd"
    }
    res.json(data)
})

mongoose.connect(mongoURI, { 
    useNewUrlParser: true,
    useUnifiedTopology: true
}, err => {
    if(err) {
        mongoose.connection.close()
        return console.log(err)
    };
    app.listen(PORT, () => console.log(`App has been started on port ${PORT}`));
    console.log("Сервер ожидает подключения...");
});


const gracefulExit = function() { 
    mongoose.connection.close(function () {
        console.log('Mongoose default connection with DB is disconnected through app termination');
        process.exit(0);
    });
}

process.on('SIGINT', gracefulExit).on('SIGTERM', gracefulExit);