

/*
    Login url: https://reqres.in/api/login
    Body:
    {
      email: "eve.holt@reqres.in",
      password: "ok"
    }
    Users url: https://reqres.in/api/users
*/

let state= []
document.getElementById('login').onsubmit=(event) => {
    event.preventDefault()
    console.log(event.target.elements);
    let email=event.target.elements.email.value    
    let password = event.target.elements.password.value
    console.log(email, password);
    let body = JSON.stringify({email: email, password : password})

    fetch('https://reqres.in/api/login', {
        method: 'POST',
        body: body,
        headers :{
            'content-type': 'application/json'
        }
        })
    .then(res=>{
        console.log(res)
        //if (!res.ok){return Promise.reject(error)}
        if (res.status!=200){return Promise.reject(error)}
        return res.json()
    })
    .then((res)=>{
        return fetch('https://reqres.in/api/users')
    })
    .then((res) => {
        return res.json()
    })
    .then((userPage) => {
        //console.log(JSON.parse(userPage.data));
        console.log(userPage.data);
        state = userPage.data
        renderUsers(state)
    })
    .catch(err=>
        console.log('Error', err) )
}

const renderUsers=(state)=>{
    let template =''
    for (const user of state) {
        template +=`<li class="list-group-item">
        Name: ${user.first_name} ${user.last_name} Email: ${user.email}</li>
        <img src="${user.avatar}" style="max-height: 100px; max-width: 100px">`        
        
    }
    document.querySelector('#user-list-container ul').innerHTML=template
}