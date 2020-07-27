//change css class when loading opening a post:
function setClass(){
    if ( top == self ) {
        document.getElementById("style").href = "../css/openedPost.css"
    }
}
requestAnimationFrame(setClass);