const express = require('express')
const jwt = require('jsonwebtoken')
const config = require('../config/config')
const router = express.Router()
const Register = require("./models/Register")




router.post('/auth', function (req, res, next) {
  
    if(req.body.action == "login") {

        const {mail, password} = req.body;

        const candidate =  Register.findOne({ mail })

        if(!candidate) {
            res.status(400).json({message: " такой пользователь уже есть"})
        }
        else {
            res.send({
                "status": 200,
                    "data": "login"
            })
        }
       
        const token = jwt.sign(
            {userId: Register.id},// первый параметр это те данные которые я хочу зашифровать в токене
            config.get('jvtToken')
        )
    }

    if(req.body.action == "registeration") {
        user = res.body.mail
        res.send({ 
            "status": 200,
             "data": "register"
        })
        console.log("name "+ req.body.name+ " second_name "+req.body.file.name)
    }
    

})

router.post('/admin_panel', function (req, res, next) {
   
    if(req.body.action == "create_post") {
        console.log("connect")
        console.log("title "+ req.body.title+ " content "+req.body.content)

        res.send({
            "status": 200,
             "data": "login"
        })
    }
    if(req.body.action == "search_edit_post") {
        console.log("search_edit_post")
        // console.log("title "+ req.body.name+ " content "+req.body.file.name)
        res.send({
            "status": 200,
             "data": "login"
        })
    }
    
    if(req.body.action == "update_post") {
        /*
             "title": this.form.title,
            "quote": this.form.quote,
            "content": this.form.content,
            "keyword": this.form.keyword,
        */
        console.log("connect")
        console.log("update_post title "+ req.body.title+ "update_post content "+req.body.content)
        res.send({
            "status": 200,
             "data": "login"
        })
    }
})

router.post('/admin_panel/img', function (req, res, next) {

    // router.use(express.static('../src/assets/img'))
    // router.use(multer({dest:"uploads"}).single("filedata"))
   
    // let filedata = req.file

    // console.log("img name "+ req.body.title)

    // console.log(req.body.title)
    // if(!filedata)
    //     res.send("Ошибка при загрузке файла")
    // else

    //     res.send("Файл загружен")

    // if(req.body.action == "create_post") {
    //     console.log("connect")
    //     console.log("title "+ req.body.name+ " content "+req.body.file.name)
    //     res.send({
    //         "status": 200,
    //          "data": "login"
    //     })
    // }
})

// router.get('/auth', async (req, res) => {
//     console.log(req.body)
 
//     res.json({state: 'success '})
//     // res.json(await Record.find())
// })
// console.log(__dirname)
// router.post('/auth', async (req, res) => {
//     console.log(req.body)
//     let user = req.body;

//     db.collection('users').insert(user, function (err, result)  {
//         if(err) {
//             console.log(err);
//             res.sendStatus(500);
//         }
//         else {
//             res.send(user);
//         }
//     })
//     res.json({state: 'success '})
//     // res.json(await Record.find())
// })

router.get('/about',(req, res) => {
    console.log(req.body)
})

module.exports = router