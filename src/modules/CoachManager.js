const remoteURL = "http://localhost:8088"

export default {
    get(id) {
        return fetch(`${remoteURL}/coaches/${id}`).then(result => result.json())
    },
    getAll() {
        return fetch(`${remoteURL}/coaches`).then(result => result.json())
    },
    delete(id) {
        return fetch(`http://localhost:8088/coaches/${id}`, {
            method: "DELETE"
        })
            .then(result => result.json())
    },
    post(newCoach) {
        return fetch(`${remoteURL}/coaches`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newCoach)
        }).then(data => data.json())
    },
    update(editedCoach) {
        return fetch(`${remoteURL}/coaches/${editedCoach.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editedCoach)
        }).then(data => data.json());
    }
}