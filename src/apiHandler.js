const { default: axios } = require("axios");


async function getUserData(identifier) {
    // get user data by name/uuid

    if (identifier == undefined) {
        return
    }
    if (identifier.length > 20) {
        identifier = identifier.replaceAll("-", "")
    }

    const apiUrl = "https://api.opennam.es"

    try {
        const data = await axios.get(`${apiUrl}/search?query=${identifier}`)
        // console.log(data)
        // console.log("returned data", data.data)
        if (!('name_history' in data.data) && !('unixDropTime' in data.data)) {
            data.data.name_history = []
            data.data.available = true
            return data.data
        }

        if ('unixDropTime' in data.data) {
            data.data.dropping = true
            data.data.name_history = []
        }
        data.data.monthlyViews = data.data.monthlyViews || '1'
        data.data.lifetimeViews = data.data.lifetimeViews || '1'
        return data.data
    } catch (err) {
        console.error("error", err)
        // return { name_history: [], error: err }
        return {name_history: [], owner_history: [], error: err}
    }
}

async function getPopularUsers() {
    // get top 10 players with most monthly searches

    const apiUrl = "https://api.opennam.es"
    let ret = { popular: [], err: "" }

    try {
        const data = await axios.get(`${apiUrl}/leaderboard`)
        data.data.forEach(element => {
            ret.popular.push({
                name: element.name,
                uuid: element.uuid,
                dropping: element.unixDropTime ? true : false,
                lastUpdated: element.lastUpdated,
                monthlyViews: element.monthlyViews || '0',
                lifetimeViews: element.lifetimeViews || '0',
            })
        });
        return ret

    } catch (err) {
        console.error("error", err)
        ret.err = err
        return ret

    }
}

// async function getUserOutfit(UUID) {
//     // get skins and capes of a player

//     if (UUID == undefined || UUID == "") {
//         console.warn("Can't get outfit of empty UUID")
//         return
//     }

//     const url = "https://api.allorigins.win/get?url=" + encodeURIComponent("https://sessionserver.mojang.com/session/minecraft/profile/") + UUID
//     try {
//         // get data from API
//         let data = await axios.get(url)
//         //data.data = JSON.parse(data.data.contents)
//         const res = JSON.parse(data.data.contents)
//         console.log(res)
//         const base64Encoded = res.properties[0].value
//         const decodedData = JSON.parse(window.atob(base64Encoded))
//         console.log(decodedData)

//         let cape = null
//         console.log(decodedData.textures)
//         if ('CAPE' in decodedData.textures) {
//             cape = decodedData.textures.CAPE.url
//         }

//         const skin = decodedData.textures.SKIN.url
//         console.log(skin, cape)
//         return { skin, cape }

//     } catch (e) {
//         console.error(e)
//     }
// }

async function getDroppingSoon() {
    // get names that are dropping soon

    const apiUrl = "https://api.opennam.es"
    let ret = {dropping: [], err: ""}
    try {
        const data = axios.get(apiUrl + "/dropping")
        ret.dropping = data.data
        return ret
    } catch(e) {
        ret.err = e
        console.error(e)
        return ret
    }
}
export default { getUserData, getPopularUsers, getDroppingSoon }