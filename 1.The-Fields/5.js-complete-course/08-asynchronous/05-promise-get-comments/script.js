/* becode/javascript
 *
 * /10-asynchronous/05-promise-get-comments/script.js - 10.5: chargement d'articles et de commentaires (Promise)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById('run').addEventListener('click', () => {
        setTimeout(() => {
            window.lib.getPosts().then((articles) => { //.then lists the sequence of the Promises
                articles.forEach((article) => { //article as an array, for each article
                    window.lib.getComments(article.id).then((comments) => { //get comments for each article.id
                        article.comment = comments; //create comment property
                        console.log(article);
                    })
                })
            })
        }, 1500)
    })
})();
