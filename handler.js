const express = require('express');
const bodyParser = require("body-parser");


module.exports = {
    main: function (event, context) {
        res = event.extensions.response;
        res.send('OKKKKK');
        return
        // const app = express();
        // const port = 3000;

        // app.use(bodyParser.urlencoded({ extended: false }));
        // app.use(bodyParser.json());


        // app.get('/v1/get', (req, res) => {
        //     res.send('OK')
        // });
        // app.post('/v1/post', (req, res) => {
        //     let input = getInput(req.body);
        //     let output = generateOutput(req.body);
        //     console.log('Input: ' + input + 'and Output' + output);
        //     res.send({ "Output": output });
        // })
        // var server = app.listen(port, () => console.log('Example app listening on port ' + port + '!'));
        // app.stop = function () {
        //     server.close();
        // };
    }
};

// function getInput(body) {
//     return body.input;
// }
// function generateOutput(body) {
//     return body.input + 1;
// }