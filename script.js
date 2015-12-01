$(function () {

        $('form').submit(function () {
            $('form').trigger('dom')
            return false
        })

    $('form').on('dom', function () {
        //console.log('submitting!')
        if (!$('#required').val()) {
            $('#required').trigger('focus')
            $('#required').after("<p>!INSERT SUMMIT!</p>")
            console.log("false")

            return false;
        }
        else {
            console.log("true")
            return true;
        }
        //$('.form-group,.radio').not('#button').append("<p>!this is a massage!</p>")
    })


})
