/* becode/javascript
 *
 * /06-dom/04-attr-create/script.js - 6.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

   /* const section = document.querySelector('.target');
    const newImg = document.createElement('span');
    newImg.innerHTML = "<img alt='kitten' src='\"http://www.randomkittengenerator.com/cats/rotator.php\'/>";
    section.appendChild(newImg);
*/
    const section = document.querySelector('.material');
// create element with the img tag
    const img = document.createElement("img");
    img.src = "http://www.randomkittengenerator.com/cats/rotator.php";
   //select the DOM element
    const src = document.getElementById("target");
   //append the img tag inside of const src ( #target from the DOM )
    src.appendChild(img);
    //remove span#source
    const toDelete = document.querySelector('span#source');
    toDelete.remove();
})();
