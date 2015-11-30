$(function() {
    //document.getElementsByName('header1')[0].innerHTML = "!Changed it by name!";
    $('[name = "header1"]').html("!Changed it by name!");
    //document.getElementById('cebi').innerHTML = "!Changed by id!";
    $('#cebi').html("!Changed it by id!");
    //document.getElementsByClassName('form-group class')[0].innerHTML = "!Changed by classname!";
    $('.form-group.class').html("!classname!");
    //document.getElementsByTagName('label')[6].innerHTML = "!Changed by tagname!";

    $("label").eq(1).html("!Changed by tagname!");

})
