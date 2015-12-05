$(function() {
    $('form').submit(function()
    {
        console.log('submitting!')
        alert("please fill in '$('required')'");

    });

    var message = $("<p class='message'>!this is a massage!</p>").css({"display": "none"})
    $('.form-group,.radio').not('#button').append(message);
    $(".message").fadeIn()


    var timedFade = function () {
        $(".message").fadeOut(3000)
    };

    setTimeout(function() {
        timedFade()
    },
        2000);


})
