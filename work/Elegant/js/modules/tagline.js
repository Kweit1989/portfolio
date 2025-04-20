
function tagline (){
    const taglineClose = document.querySelector('.tagline__close')
    const tagline = document.querySelector('.tagline')

    taglineClose.onclick = function(){
    tagline.remove();
    };
}


export default tagline;