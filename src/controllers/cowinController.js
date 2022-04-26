let axios = require("axios")


let getStates = async function (req, res) {

    try {
        let options = {
            method: 'get',
            url: 'https://cdn-api.co-vin.in/api/v2/admin/location/states'
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


let getDistricts = async function (req, res) {
    try {
        let id = req.params.stateId
        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${id}`
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getByPin = async function (req, res) {
    try {
        let pin = req.query.pincode
        let date = req.query.date
        console.log(`query params are: ${pin} ${date}`)
        var options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getOtp = async function (req, res) {
    try {
        let blahhh = req.body

        console.log(`body is : ${blahhh} `)
        var options = {
            method: "post",
            url: `https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP`,
            data: blahhh
        }

        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

// 1
let getDistrictDate = async function (req, res) {

    try {
        let district = req.query.districtId
        let date = req.query.date
        var options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${district}&date=${date}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        res.status(500).send({ msg: err.message })
    }
}

// 2
let getWeather = async function (req, res) {

    try {
        var options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=London&appid=22a0deb3f7d185147618aaf5a46ea15c`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        res.status(500).send({ msg: err.message })
    }
}

let getTemperature = async function (req, res) {

    try {
        var options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=London&appid=22a0deb3f7d185147618aaf5a46ea15c`
        }
        let result = await axios(options)
        console.log(result.data.main.temp)
        res.status(200).send({ temp: result.data.main.temp })
    }
    catch (err) {
        res.status(500).send({ msg: err.message })
    }
}


let getSortedCities = async function (req, res) {

    try {
        let cities = ["Bengaluru", "Mumbai", "Delhi", "Chennai", "London", "Moscow"]
        let cityObjArray = []
        for (i = 0; i < cities.length; i++) {

            let obj = { city: cities[i] }
            let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=22a0deb3f7d185147618aaf5a46ea15c`)
            console.log(resp.data.main.temp)

            obj.temp = resp.data.main.temp
            cityObjArray.push(obj)
        }
        let sorted = cityObjArray.sort(function (a, b) { return a.temp - b.temp })
        console.log(sorted)
        res.status(200).send({ status: true, data: sorted })
    }
    catch (err) {
        res.status(500).send({ status: false, msg: "server error" })
    }
}

// 3
let postMeme = async function (req, res) {

    try {
        let id = req.query.template_id
        let text0 = req.query.text0
        let text1 = req.query.text1
        let username = req.query.username
        let pass = req.query.password

        var options = {
            method: "post",
            url: `https://api.imgflip.com/caption_image?template_id=${id}&text0=${text0}&text1=${text1}
            &username=${username}&password=${pass}`
        }
        let result = await axios(options)
        let data = result.data
        res.status(200).send({ status: true, msg: data })
    }
    catch (err) {
        res.status(500).send({ msg: err.message })
    }
}



module.exports.getStates = getStates
module.exports.getDistricts = getDistricts
module.exports.getByPin = getByPin
module.exports.getOtp = getOtp

module.exports.getDistrictDate = getDistrictDate
module.exports.getWeather = getWeather
module.exports.getSortedCities = getSortedCities
module.exports.getTemperature = getTemperature
module.exports.postMeme = postMeme