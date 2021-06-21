const { default: axios } = require("axios");



async function getUserData(identifier) {
    const apiUrl = "https://api.opennam.es"

    if (identifier == undefined) {
        return
    }
    if (identifier.length > 20) {
        identifier = identifier.replaceAll("-", "")
    }
    try {
        const data = await axios.get(`${apiUrl}/search?query=${identifier}`)
        console.log(data)
        console.log("returned data", data.data)
        if (!('name_history' in data.data) && !('unixDropTime' in data.data)) {
            return {name_history: [], error: "Name is avaible"}
        }

        if ('unixDropTime' in data.data) {
            data.data.error = "name is avaible soon"
            data.data.dropping = true
            data.data.name_history = []
        }
        data.data.monthlyViews = data.data.monthlyViews || '1'
        data.data.lifetimeViews = data.data.lifetimeViews || '1'
        return data.data
    } catch(err) {
        console.error("error", err)
        return {name_history: [], error: err}
    }
}

async function getPopularUsers() {
    const apiUrl = "https://api.opennam.es"
    let ret = {popular: [], err: ""}

    try {
        const data = await axios.get(`${apiUrl}/leaderboard`)
        data.data.forEach(element => {
            ret.popular.push({
                name: element.name,
                UUID: element.uuid,
                monthlyViews: element.monthlyViews || '0',
                lifetimeViews: element.lifetimeViews || '0',
            })
        });
        return ret

    } catch(err) {
        console.error("error", err)
        ret.err = err
        return ret

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


export default {getUserData, getPopularUsers}