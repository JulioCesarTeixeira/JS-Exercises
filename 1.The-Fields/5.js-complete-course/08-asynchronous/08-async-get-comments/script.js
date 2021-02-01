/* becode/javascript
 *
 * /10-asynchronous/08-async-get-comments/script.js - 10.8: chargement d'articles et de commentaires (async/await)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    async function comments() {
        const postArticles = await window.lib.getPosts();
        try {
            for (const article of postArticles) {
                article.comments = await window.lib.getComments(article.id);
                return console.log(article)
            }
        } catch (error) {
            return console.error(Error('No way'))
        }
    }

    document.getElementById('run').addEventListener('click', comments)
})();
