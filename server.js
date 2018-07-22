var dev = true;
// process.env.NODE_ENV == "development"
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const express = require('express')
const bodyParser = require('body-parser')
    // const randomstring = require('randomstring')
const path = require('path')
const multer = require('multer')
const storage = multer.diskStorage({
    destination: './public/uploads',
    filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})
const upload = multer({
    storage: storage
}).single('image')


const app = new express()
app.set('port', process.env.PORT || 5555)


app.use(bodyParser.json({ limit: '100mb' }))
app.use(bodyParser.urlencoded({ limit: '100mb', extended: true }))

app.use('/img/', express.static('assets/img'))
app.use('/fonts/', express.static('assets/fonts'))
app.use('/styles/', express.static('assets/styles'))
app.use('/uploads/', express.static('public/uploads'))

app.use('/', express.static('assets/data'))

app.use('/dist/', (req, res, next) => {
    // if(req.url == '/bundle_main.js'){
    // 	req.url = req.url + '.gz'
    //   	res.set('Content-Encoding', 'gzip')
    // }
    next()
}, express.static('dist'))


if (dev) {

    const front = "main";
    const config = require('./front_' + front + '/webpack.' + front + '.dev')
    const compiler = webpack(config)
    app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
    app.use(webpackHotMiddleware(compiler))

    const front1 = 'student';
    const config1 = require('./front_' + front1 + '/webpack.' + front1 + '.dev')
    const compiler1 = webpack(config1)
    app.use(webpackDevMiddleware(compiler1, { noInfo: true, publicPath: config1.output.publicPath }))
    app.use(webpackHotMiddleware(compiler1))

    app.get('*', function(req, res) {
        var _url = req.url.split('/')
        console.log(_url)

        if (_url[1] == 'inner') {

            res.sendFile(__dirname + '/front_main/dev_teacher_index.html')

        } else if (_url[1] == 'student') {
            res.sendFile(__dirname + '/front_student/dev_student_index.html')
        }

    })
} else {

    app.get('*', function(req, res) {
        var _url = req.url.split('/')

        if (_url[1] == 'inner') {
            res.sendFile(__dirname + '/front_main/prod_teacher_index.html')
        } else if (_url[1] == 'student')
            res.sendFile(__dirname + '/front_student/prod_student_index.html')

    })

}


// app.post('/api/request/advise', function(req, res) {
//     if (req.body.name && req.body.phone && req.body.email) {
//         res.status(200).end()
//     } else {
//         res.status(400).end()
//     }
// })


// app.post('/api/request/course', function(req, res) {
//     if (req.body.name && req.body.phone && req.body.email) {
//         res.status(200).end()
//     } else {
//         res.status(400).end()
//     }
// })

app.post('/uploads', (req, res) => {
    // var code = randomstring.generate()
    upload(req, res, (err) => {
        if (err) {
            res.render('index', {
                msg: err
            })
        } else {
            if (req.file == undefined) {
                res.render('index', {
                    msg: 'Error: No File Selected!'
                })
            } else {
                res.send({
                    url: `http://localhost:5555/uploads/${req.file.filename}`
                });
            }
        }

    })
})



app.listen(app.get('port'), function(error) {
    if (error) {
        console.error(error)
    } else {
        console.info('Web server is listening on port %s. Go to http: //localhost:%s/ and use it. Thks!', app.get('port'), app.get('port'))
    }
})