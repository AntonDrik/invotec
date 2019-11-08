$(document).ready(function () {
    if (!getCookie('visited')) {
        $('#Modal').modal('show');
    }

    $('.modal-content__checkbox').click(function () {
        document.cookie = "visited=true; path=/; expires=Tue, 19 Jan 2038 03:14:07 GMT";
    });

});

function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}