module.exports = {
    main: function (event, context) {
        let jsonstring = event.extensions.request.body.toString();
        let value = JSON.parse(jsonstring);
        output = value.input + 1;
        res = event.extensions.response;
        res.send({"output": output});
        return
        }
}