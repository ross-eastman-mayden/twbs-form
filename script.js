$(function() {
    $('form').submit(function()
    {

        //console.log('submitting!')

        if(!$('#required').val()) {
            $('#required').after("<p>!INSERT SUMMIT!</p>")
            console.log("false")
            $('#required').trigger('focus')
            return false;
        }
        else {
            console.log("true")
            return true;
        }
    })
    //$('.form-group,.radio').not('#button').append("<p>!this is a massage!</p>")

})
