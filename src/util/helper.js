let printDate =function(){
    let currentDate=new Date()
    console.log('The current date is: ',currentDate.getDate())
}

let printMonth =function(){
    let currentDate=new Date()
    console.log('The current month is :',currentDate.getMonth() + 1)
} 
let getBatchInfo=function(){
    console.log('Uranium,W3D3,the topic for today is Nodejs module system')
}

module.exports.printTodayDate = printDate
module.exports.printCurrentMonth = printMonth
module.exports.printBatchInfo = getBatchInfo