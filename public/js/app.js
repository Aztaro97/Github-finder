client_id = 'Iv1.7badb8c7b5c6051f'

client_secret = '2047b3ad691ebccb91cd37a464137b10daa56062'

let InputValue = document.querySelector('#Input')
let btnSearch = document.querySelector('#btnSearch')
let User_pic = document.querySelector('.user-pic')
let user_info = document.querySelector('#user_info')
let list_repo = document.querySelector('#list_repo')

async function FetchApi(user) {
    let api_call = await fetch(`https://api.github.com/users/${user}?client_id=${client_id}&client_secret=${client_secret}`);
    let Data = await api_call.json()
    return {Data}
}

function ShowData() {
    FetchApi(InputValue.value)
        .then( res => {
            console.log(res)
            User_pic.innerHTML = ` <img src="${res.Data.avatar_url}" class="img-fluid" alt="">`
            user_info.innerHTML = `<h5 class="user_name font-weight-bold">Name : ${res.Data.name}</h5>
                                    <h5 class="font-weight-bold">Github : <a href="${res.Data.html_url}" class="nav-link d-inline" target="_blank" rel="noopener noreferrer"> link </a></h5>
                                    <h5 class="font-weight-bold">Public Repos : <span class="bg-success px-1 text-white">${res.Data.public_repos}</span></h5>`
            list_repo.innerHTML = `<a href="${res.Data.html_url}?tab=repositories"  class="btn btn-success" target="_blank" rel="noopener noreferrer">List Repos</a>`
        })
        .catch( (err) => console.log(err) )

}

btnSearch.addEventListener('click', (e) => {
    e.preventDefault()
    ShowData()
})