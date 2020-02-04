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
    },
    post(newPlayer) {
        return fetch(`${remoteURL}/players`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newPlayer)
        }).then(data => data.json())
    },
    update(editedPlayer) {
        return fetch(`${remoteURL}/animals/${editedPlayer.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editedPlayer)
        }).then(data => data.json());
    }
}