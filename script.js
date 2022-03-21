
document.getElementById("button").addEventListener("click", function(){
    document.querySelector(".popup").style.display = "flex";
})
document.querySelector(".close").addEventListener("click", function(){
    document.querySelector(".popup").style.display = "none";
})

var $root = $('html, body');

$('a[href^="#"]').click(function () {
    $root.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);

    return false;
});
