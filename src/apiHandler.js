const { default: axios } = require("axios");



async function getUserData(identifier) {
    const apiUrl = "https://api.opennam.es"
    try {
        const data = await axios.get(`${apiUrl}/search?query=${identifier}`)
        console.log(data)
        console.log("returned data", data.data)
        if (data.data == "") {
            return {name_history: [], error: "Name is avaible"}
        }
        return data.data
    } catch(err) {
        console.log("error", err)
        return {name_history: [], error: err}
    }
}

// // sample data
// async function getUserData(identifier) {
//     console.log(identifier)
//     return {
//         "name": "vqpa",
//         "uuid": "dc4e2122b70b46c489596cd0337246c2",
//         "name_history": [
//             {
//                 "name": "Rolyatevol"
//             },
//             {
//                 "name": "Barometer",
//                 "changedToAt": 1551141789000
//             },
//             {
//                 "name": "vqpa",
//                 "changedToAt": 1623006629000
//             }
//         ],
//         "views": 69
//     }
// }


export default getUserData