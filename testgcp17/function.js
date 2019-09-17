let google = require('googleapis').google;
let _auth = require('./Authorizer');
const storage = google.storage('v1');

exports.handler = function (request, response) {
    storage.objects.delete({
        bucket: "induniltest1",
        object: "1.PNG"
    })
        .then(response => {
            console.log(response.data);           // successful response
            console.log("successs");
            /*
                response.data = {}
            */
        })
        .catch(err => {
            console.log(err, err.stack); // an error occurred
            console.log("faill");
        });

    response.send({ "message": "Successfully executed" });
}