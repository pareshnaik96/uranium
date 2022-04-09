let trim =function(){
    console.log('The result after trimming the string is:'," functionUp ".trim())
}

let changetoLowerCase=function() {
    console.log('The result after using the lowercase function is:','PARESH'.toLowerCase())
}
let changetoUpperCase=function(){
    console.log('The result after using the uppercase function is:','paresh'.toUpperCase())
}

module.exports.trimming=trim
module.exports.lowercase=changetoLowerCase
module.exports.uppercase=changetoUpperCase