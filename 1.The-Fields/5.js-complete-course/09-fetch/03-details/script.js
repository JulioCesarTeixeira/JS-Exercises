/* becode/javascript
 *
 * /09-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

document.getElementById('run').addEventListener('click', () =>{
    const input = parseInt(document.getElementById('hero-id').value); //value has to be an integer
    const template = document.getElementById('tpl-hero').content;

    getData().then(resolve =>{
        let x_men = resolve.heroes.find(x_men => x_men.id === input); //find() method to match the user input number with the x_men id number
        let templateInput = template.cloneNode(true); //deep clone the template
        templateInput.querySelector('.name').innerText = x_men.name; //same process of previous exercise. Replace the inner text of the cloned template with the fetched data
        templateInput.querySelector('.alter-ego').innerText = x_men.alterEgo;
        templateInput.querySelector('.powers').innerText = x_men.abilities.join(', ');

        document.getElementById('target').appendChild(templateInput);
        }, reject => console.error(reject('nope')));
    })



async function getData(){
    let data = await fetch('http://localhost:63342/5.js-complete-course/_shared/api.json')
    return data.json();
}
console.log(getData())
