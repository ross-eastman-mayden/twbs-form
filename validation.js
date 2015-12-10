$(function () {
    var requiredWarning = '<p class="requiredWarning">This Field Is Required!</p>'

    console.log("please print something")

    $("form").submit(function (e) {
        console.log("submitting")

        if ($('radio[value="1"]').is(":checked")) {
            console.log('val 1 is checked')
            $('#requiredIfChecked').parent().addClass("required")
        } else {
            $('#requiredIfChecked .required').remove()
        }

        $(".requiredWarning").remove()

        $('.required').each(function () {
            if (!$('.required').val()) {
                $('.required').each(function () {
                    $('.required').parent().append(requiredWarning)
                    console.log('required!')
                    e.preventDefault()
                })
            } else {
                console.log('well done mate')
                return true
            }
        })


    })
})