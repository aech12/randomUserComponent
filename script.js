let btn = document.getElementById('btn')
let user = document.getElementById('username')
let fullname = document.getElementById('fullname')
let avatar = document.getElementById('avatar')

btn.addEventListener('click', ()=> {
  fetch('https://randomuser.me/api')
    .then(handleErrors)
    .then(parseJSON)
    .then(updateProfile)
    .catch(printError)
})

handleErrors = (resp) => {
  if (!resp.ok) {
    throw Error()
  } return resp
}
parseJSON = (resp) => {return resp.json()}
updateProfile = (data) => {
  let newdata = data.results[0];
  let {first, last} = newdata.name;
  let {picture, email} = newdata;
  let {username} = newdata.login;
  let {city} = newdata.location;

  user.innerHTML = username;
  let newfullname = first+' '+last;
  fullname.innerHTML = newfullname;
  avatar.src = picture.medium;
}
printError = (e) => {console.log('Error: ', e)}

// name.first name.last
// picture
// email
// login.username
// location.city