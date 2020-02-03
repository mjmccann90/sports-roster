const remoteURL = "http://localhost:8088"

export default {
    get(id) {
        return fetch(`${remoteURL}/players/${id}`).then(result => result.json())
    },
    getAll(id) {
        return fetch(`${remoteURL}/players/${id}`).then(result => result.json())
    },
    delete(id) {
        return fetch(`http://localhost:8088/players/${id}`, {
            method: "DELETE"
        })
            .then(result => result.json())
    }
}