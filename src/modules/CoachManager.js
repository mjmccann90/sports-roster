const remoteURL = "http://localhost:8088"

export default {
    get(coachId) {
        return fetch(`${remoteURL}/coaches/${coachId}`).then(result => result.json())
    },
    getAll() {
        return fetch(`${remoteURL}/coaches`).then(result => result.json())
    },
    delete(coachId) {
        return fetch(`http://localhost:8088/coaches/${coachId}`, {
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
        return fetch(`${remoteURL}/coaches/${editedCoach.coachId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editedCoach)
        }).then(data => data.json());
    }
}