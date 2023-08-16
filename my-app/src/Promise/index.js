// fetch('https://reqres.in/api/users').then(res => console.log(res))
// so we should conver this response to JSON

// fetch('https://reqres.in/api/users').then(res => res.json()).then(data => console.log(data))

fetch('https://reqres.in/api/users', {
    method: 'POST',
    headers: {
        'content-Type' : 'application/json'
    },
    body: JSON.stringify({
        name: 'User 1'
    })
}).then(res => {
    return res.json()
})
.then(data => console.log(data))
.catch(error => console.log('ERROR'))
