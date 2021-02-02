/* becode/javascript
 *
 * /09-fetch/04-add/script.js - 11.4: ajouter un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

document.getElementById('run').setAttribute('type', 'submit');
const runScript = document.getElementById('run');
document.querySelector('form').setAttribute('id', 'form');
const inputForm = document.getElementById('form');

inputForm.addEventListener('submit', (e) =>{
    e.preventDefault();

    const nameInput = document.getElementById('hero-name').innerText;
    const alterEgoInput = document.getElementById('hero-alter-ego').innerText;
    const powerInput = document.getElementById('hero-powers').innerText;

    //fetch
    fetch('http://localhost:63342/5.js-complete-course/_shared/api.json',{
        method: "POST",
        body: JSON.stringify({
            name: nameInput,
            alterEgo: alterEgoInput,
            abilities: powerInput,
            id: 6,
        }),
        headers:{
            "Content-Type": "application/json; charset=UTF-8"
        }
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(reject => console.error(reject))
})









// const nameInput = document.getElementById('hero-name').value;
// const alterEgoInput = document.getElementById('hero-alter-ego').value;
// const powerInput = document.getElementById('hero-powers').value;

//
// async function getData(){
// const data = { nameInput, alterEgoInput, powerInput};
// fetch('http://localhost:63342/5.js-complete-course/_shared/api.json', {
//     method: 'POST',
//     headers:{
//         "Content-Type": "application/json",
//     },
//     body: JSON.stringify(data)
// }).then(data => data.json())
//     .then(data => console.log(data))}
//
// document.getElementById('run').addEventListener('click', getData)