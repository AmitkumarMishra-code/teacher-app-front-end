const URL = `https://email-marketing-app.herokuapp.com`
export async function registerUser(username, name, subject) {
    console.log(username, name, subject)
    try {
        let response = await fetch(URL + '/user', {
            method: 'POST',
            body: JSON.stringify({
                username: username,
                name: name,
                subject: subject,
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
            return data.message
        }
    } catch (error) {
        throw error
    }
}
