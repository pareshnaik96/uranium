const express = require('express');

const router = express.Router();

/** router.get('/test-me', function (req, res) {
    // let a = { msg: "My first ever API response in JSON !!"} 


    res.send( { msg: "My first ever API response in JSON !!"} )
});



router.get('/test-api1', function (req, res) {

    res.send( "hi FunctionUp " )
});


router.get('/test-api2', function (req, res) {

    res.send( { msg: "Hi FUnctionUp..again !"} )
});


router.get('/test-api3', function (req, res) {

    res.send( { msg: "Hi FUnctionUp..again..this is another similar api !"} )
});


router.get('/test-api4', function (req, res) {

    res.send( { msg: "Hi FUnctionUp..again..this is another similar api ..not I am getting bored!"} )
});


router.get('/test-api5', function (req, res) {

    res.send( { msg: "Hi FUnctionUp" , name:"FunctionUp", age: "100"} )
});



router.get('/test-api6', function (req, res) {

    res.send( {   data: [12, 24, 36, 48, 60]  }   )
});

router.post('/test-post1', function (req, res) {

    res.send( {  msg: "hi guys"  }   )
});


// to send data in  post request-> prefer sending in BODY -> click body-raw-json
router.post('/test-post2', function (req, res) {
    let data= req.body
    console.log(data)
    res.send( {  msg: "hi guys..my 2nd post req"  }   )
});


const randomController= require("../controllers/randomController.js")
//write a post request to accept an element in post request body and add it to the given array and return the new array
router.post('/test-post3', randomController.addToArray ); //HANDLER/CONTROLLER **/


let players= [
    {
        "name":"MSDhoni",
        "dob":"07/07/1981",
        "gender":"male",
        "city":"Ranchi",
        "sports":["cricket"]


    },
    {
        "name":"Rohit",
        "dob":"30/04/1987",
        "gender":"male",
        "city":"Nagpur",
        "sports":["cricket"]
    },
    {
        "name":"Sunil",
        "dob":"03/08/1984",
        "gender":"male",
        "city":"Secunderabad",
        "sports":["football"]
    },
    {
        "name":"Virat",
        "dob":"05/11/1988",
        "gender":"male",
        "city":"Ranchi",
        "sports":["cricket"]
    },
    {
        "name":"MSDhoni",
        "dob":"07/07/1981",
        "gender":"male",
        "city":"Ranchi",
        "sports":["cricket"]
    }

];

let arr=[];
router.post('/players', function(req,res) { 
      for( let i=0;i<players.length;i++){
         arr.push(players[i]);  
        }
        for( let j=0; j<arr.length; j++){
            for( let k=j+1; k<arr.length; k++){
               if(arr[j].name === arr[k].name){
                   arr.splice(k,1);
               }
            }
        }
    res.send(arr);
 });
    

module.exports = router;
