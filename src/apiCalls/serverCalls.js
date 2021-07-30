const URL = 'http://localhost:4000'
export async function registerUser(username, name) {
    console.log(username, name)
    try {
        let response = await fetch(URL + '/user', {
            method: 'POST',
            body: JSON.stringify({
                username: username,
                name: name
            }),
            headers: {
                'content-type': 'application/json'
            }
        })
        let data = await response.json()
        if (response.status !== 200) {
            throw new Error(data.message)
        } else {
            return data.message
        }
    } catch (error) {
        throw error
    }
}

export async function getAffiliateData() {
    try {
        let response = await fetch(URL + '/admin')
        let data = await response.json()
        if (response.status !== 200) {
            throw new Error(data.message)
        } else {
            console.log(data.message)
            return data.message
        }
    } catch (error) {
        throw error
    }
}