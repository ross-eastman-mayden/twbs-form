$(function() {
    $('form').submit(function()
    {
        console.log('submitting!')

        if($('form-group class').type(undefined)) {
            return false;
        }
        else {
            return true;
        }
    })
    $('.form-group,.radio').not('#button').append("<p>!this is a massage!</p>")

})
