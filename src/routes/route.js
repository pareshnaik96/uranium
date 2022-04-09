const express=require('express');
const router=express.Router();

//1
router.get('/movies',function(req,res){
    let movie=["inception","Avengers Endgame","iron Man","batman begins"];
    res.send(movie);
});

//2
router.get('/movies/:index',function(req,res){
    let movie=["inception","Avengers Endgame","iron Man","batman begins"];
    res.send(movie[req.params.index]);
});

//3
router.get('/movie/:index1',function(req,res){
    let movie=["inception","Avengers Endgame","iron Man","batman begins"];
    if(req.params.index1 < movie.length){
        res.send(movie[req.params.index1]);
    }else{
        res.send('please enter a valid index');
     }
});
   
//4
router.get('/films',function(req,res){
    let film=[ {
        "id": 1,
        "name": "The Shining"
       }, {
        "id": 2,
        "name": "Incendies"
       }, {
        "id": 3,
        "name": "Rang de Basanti"
       }, {
        "id": 4,
        "name": "Finding Nemo"
       }];
res.send(film)       
});

//5
router.get('/films/:filmId',function(req,res){
    let film=[ 
        {
        "id": 0,
        "name": "The Shining"
       }, {
        "id": 1,
        "name": "Incendies"
       }, {
        "id": 2,
        "name": "Rang de Basanti"
       }, {
        "id": 3,
        "name": "Finding Nemo"
       }
    ];
    let flag=false;
     for(let i=0;i<film.length;i++){
        if(req.params.filmId==film[i].id){
            flag=true;
            break;
        }
     }
    if(flag==true){
        res.send(film[req.params.filmId]);
    }else{
        res.send("No such movie is present!");
    }
    
});
        
module.exports = router;
// adding this comment for no reason