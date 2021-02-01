/* becode/javascript
 *
 * /10-asynchronous/01-get-posts/script.js - 10.1: chargement d'articles
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    document.getElementById('run').addEventListener('click', () => {
        window.lib.getPosts((error, articles) => { //always two parameters, error
                                                  // And how it will handle it
            if(error !== null){                   //and what will run (articles)
                alert(error);
                return;
            }
            console.table(articles);
        })
    })
})();
