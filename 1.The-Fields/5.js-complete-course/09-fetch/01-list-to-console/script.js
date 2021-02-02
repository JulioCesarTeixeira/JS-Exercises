/* becode/javascript
 *
 * /09-fetch/01-list-to-console/script.js - 11.1: liste vers console
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


document.getElementById('run').addEventListener('click', () => {
    getData().then(resolve => console.log(resolve), reject => console.error(reject))
})

async function getData() {
    let apiData = await fetch('http://localhost:63342/5.js-complete-course/_shared/api.json');
    return await apiData.json();
}

getData().then(resolve => {
   resolve.heroes.forEach(hero =>{
       let HeroTemplate = document.querySelector('#tpl-hero').content.cloneNode(true)
       HeroTemplate.querySelector.('.name').innerText = hero.name;
       HeroTemplate.querySelector.('.alter-ego').innerText = hero.alterEgo;

   })
})
