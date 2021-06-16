// const { default: axios } = require("axios");

// const apiUrl = ""

// async function getData(identifier) {
//     try {
//         const data = await axios.get(`${apiURL}`/getData)
//         data.data
//     } catch(err) {
//         console.log("error", error)
//     }
// }

async function getUserData(identifier) {
    console.log(identifier)
    return {
        name: "flimmerkraft",
        UUID: "95686456-fbe8-400c-9520-b3c8a273af29",
        views: 10,
    }
}


export default getUserData