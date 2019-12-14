function MenuClick(e) {
    $('.menu-button, .nav').each(function(){
        $(this).toggleClass('visible')
    })
    return false;
}