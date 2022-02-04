const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./controller/userController')

const app = express();

const dbURI = 'mongodb://test-user:test-password@nimblenotes-shard-00-00.mihom.mongodb.net:27017,nimblenotes-shard-00-01.mihom.mongodb.net:27017,nimblenotes-shard-00-02.mihom.mongodb.net:27017/userDb?ssl=true&replicaSet=atlas-12r9m5-shard-0&authSource=admin&retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(result => {
        app.listen(process.env.PORT || 3000);
        console.log('server started')
    })
    .catch(err => console.log(err));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api',userRoutes)
app.use((req,res) => {res.status(404)} )