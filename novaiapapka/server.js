require('dotenv').config();
const express = require('express');
const {MongoClient} = require('mongodb');
const bodyparser = require('body-parser');
const app = express();
const port = process.env.PORT;
const url = process.env.MONGO_URI;
const client = new MongoClient(url, {});
const dbname = 'MyFirstDataBase';
let db;
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.use(express.static('views'));
async function DBinitialize() {
    try {
        await client.connect();
        db = client.db(dbname);
        console.log("MongoDB connected");

        // Только после успешного подключения — запускаем сервер
        app.listen(port, () => {
            console.log('Server started on port', port);
        });

    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
};
// app.post('/register', async (req, res) => {
//     const {name, email, password} = req.body;
//     try{
//         const users = db.collection('userslist');
//         const useremail = await users.findOne({email});
//         const user = await users.findOne({name});
//         if (user.name == name) {
//             return res.status(401).send("Пользователь с таким имянем уже существует");
//         };
//         if (useremail.email == email) {
//             return res.status(401).send("Почта уже используется");
//         };
//         await users.insertOne({name, email, password});
//         console.log("user added");
//         res.render('index2');
//     } catch (error) {
//         console.error("Failed registration:", error);
//         res.status(500).send('Ошибка сервера');
//     };
// });
app.post('/register', async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const users = db.collection('userslist');

        const userByName = await users.findOne({ name });
        if (userByName) {
            return res.status(401).send("Пользователь с таким именем уже существует");
        }

        const userByEmail = await users.findOne({ email });
        if (userByEmail) {
            return res.status(401).send("Почта уже используется");
        }

        await users.insertOne({ name, email, password });
        console.log("user added");
        res.render('index2');
    } catch (error) {
        console.error("Failed registration:", error);
        res.status(500).send('Ошибка сервера');
    }
});

app.post('/login', async (req,res) => {
    const {name, password} = req.body;
    try{
        const users = db.collection('userslist');
        const user = await users.findOne({name});
        if (!user) {
            return res.status(401).send("Пользователь не найден");
        };
        if (user.password !== password) {
            return res.status(401).send("Неверный пароль")
        };
        console.log("Вход успешен");
        res.render('index2', {name: user.name});
    } catch (error) {
        console.error("Login error:", error)
        res.status(500).send("Ошибка сервера");
    };
});
app.get('', (req,res)=>{
    // res.send('Halo World!');
    res.render('index');
});
app.get('/main2', (req,res)=>{
    res.render('index2');
});
app.get('/market', (req, res)=>{
    res.render('index4');
});
app.get('/users', async (req, res) => {
    try{
        const users = [
            {
                name: 'Azamat',
                age: 26,
                country: 'Kazakhstan',
            },
            {
                name: 'Marat',
                age: 19,
                country: 'Russia',
            },
            {
                name: 'Garel',
                age: 19,
                country: 'France',
            },
            {
                name: 'Zela',
                age: 19,
                country: 'Kazakhstan',
            }
        ];
        const result = await db.collection('userslist').insertMany(users);
        console.log(`${result.insertedCount} users added`);
        res.render('index3');
    } catch (error) {
        console.error("Insert error:", error)
        res.status(500).send('Ошибка сервера');
    };
    

});

// app.listen(port, async () => {
//     console.log('Server responsed!', `${port}`);
// });
DBinitialize();