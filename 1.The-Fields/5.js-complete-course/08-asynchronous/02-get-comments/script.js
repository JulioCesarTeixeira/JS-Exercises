/* becode/javascript
 *
 * /10-asynchronous/02-get-comments/script.js - 10.2: chargement d'articles et de commentaires
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById('run').addEventListener('click', () => {
        setTimeout(() => {
            window.lib.getPosts((error, articles) => {
                if (error !== null) {
                    alert(error);
                } else {
                    articles.forEach((article) => {
                        window.lib.getComments(article.id, (error, comments) => {
                            if (error !== null) {
                                alert("error for each comment");
                            } else {
                                article.comment = comments;
                                console.table(article);
                            }
                        })

                    })
                }

            })

        }, 1000)
    })
})();

/*
* pseudo
*   event Handler
*       getPosts (error, articles) =>
*           if error |== null
*       else
*           articles as array, for each
*           article id (error, comments) =>
*           if error...
*       else
*           article comments
*           console
 */
//window.lib.getComments(article.id, )

