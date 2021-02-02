/* becode/javascript
 *
 * /09-fetch/02-list-to-template/script.js - 11.2: liste vers template
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

document.getElementById('run').addEventListener('click', () => {
    const template = document.getElementById('tpl-hero').content; //Create variable, select a dom element

    getData().then(resolve => { //resolve the promise. Call (getData() async/await
        resolve.heroes.forEach(hero =>{ //resolve forEach hero from the "heroes" property
            let heroTemplate = template.cloneNode(true); //cloneNode the template (cloneNode clones all the content)
            heroTemplate.querySelector('.name').innerText = hero.name; //name property from hero fetched as JSON, manipulating the innerText of .name tag (DOM manipulation)
            heroTemplate.querySelector('.alter-ego').innerText = hero.alterEgo;
            heroTemplate.querySelector('.powers').innerText = hero.abilities.join(', ');

            document.getElementById('target').appendChild(heroTemplate); //append the template to the <ol>#target
        })
    }, reject => console.error(reject('nope'))); //reject promise
})


async function getData() {
    let apiData = await fetch('http://localhost:63342/5.js-complete-course/_shared/api.json');
    return await apiData.json();

}