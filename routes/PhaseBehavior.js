/**
 * Created by root on 4/25/17.
 */


var fs = require('fs');
var path = require('path');
var piexif = require("piexifjs");

function phase1(exifObj,PhaseResult,image,phase,addResultInImage,sendMessage){
    console.log("i am in phase1");
    var image1 =  'data:image/jpeg;base64,' + base64_encode(path.join(__dirname, '..', 'temp', 'deepmask_output.jpg'));
    addResultInImage(exifObj,PhaseResult,image,phase,sendMessage);

}

function phase2(exifObj,PhaseResult,image, phase,addResultInImage,sendMessage){
    // read the image file created by deepmask to send it further
    console.log("i am in phase2");
    var image1 =  'data:image/jpeg;base64,' + base64_encode(path.join(__dirname, '..', 'temp', 'deepmask_output.jpg'));
    addResultInImage(exifObj,PhaseResult,image1,phase,sendMessage);

}

function phase3(exifObj,PhaseResult,image,phase,addResultInImage,sendMessage){
    console.log("i am in phase3");
    addResultInImage(exifObj,PhaseResult,image, phase,sendMessage);
}

switch(config_file.phaseBehavior){

    case 'phase1':
        module.exports = {ExecutePhaseLogic : phase1};
        break;

    case 'phase2' :
        module.exports = {ExecutePhaseLogic : phase2};
        break;

    case 'phase3' :
        module.exports = {ExecutePhaseLogic : phase3};
        break;
}


// Reading image and converting it base64 encoding.
function base64_encode(file) {
    // read binary data
    var bitmap = fs.readFileSync(file);
    // convert binary data to base64 encoded string
    return new Buffer(bitmap).toString('base64');
}
