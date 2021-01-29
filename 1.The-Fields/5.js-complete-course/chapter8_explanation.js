// asynchronous JS

//callback - an anonymous function that will execute when something else happens in the script
//callback parameter - a function that you will execute at some point. ex. array.reduce()
    //document.addEventListener('click', (event) => {  //this name in the parameter doesn't matter
    //event.currentTarget
    //alert('do this');

(() => {
    console.log('start');
    document.getElementById('run').addEventListener('click', () => {
        console.log('inner start');

        window.lib.getPosts((error, articles) => {
            if(error !== null){
                alert('no way');
                alert(error);
                return;
            }
            console.table(articles);
        })
        console.log('inner end');
    })
    console.log('end');
})();
