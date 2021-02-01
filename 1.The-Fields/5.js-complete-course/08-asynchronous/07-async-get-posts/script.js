/* becode/javascript
 *
 * /10-asynchronous/07-async-get-posts/script.js - 10.7: chargement d'articles (async/await)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    async function Posts() {
        const postArticles = await window.lib.getPosts();
        try {
            return console.table(postArticles)
        } catch (error) {
            return console.error(Error('No way'))
        }
    }

    document.getElementById('run').addEventListener('click', Posts)

})();


//
// document.getElementById('run').addEventListener('click', () =>{
//     window.lib.getPosts(async (articles)=>{
//         await console.table(articles);
//     })
// })