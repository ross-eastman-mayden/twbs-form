$(function () {
    var requiredWarning = '<p class="requiredWarning">This Field Is Required!</p>'
    var max8Warning = '<p class="requiredWarning8">This Field Takes 8 Characters Max!</p>'
    var min10Warning = '<p class="requiredWarning10">Takes Between 10 and 25 Characters!</p>'
    var letters = '<p class="lettersError">Letters Only!</p>'

    console.log("please print something")


    $('.maxLength8').on('keyup', function () {
        $('.requiredWarning8').remove()
        if ($('#maxLength8').val().length > 8) {
            console.log("greater than 8!")
            $('#maxLength8').after(max8Warning)
        } else {
            console.log("less than 8!")
            $('.requiredWarning8').remove()
        }
    })

    $('.maxLength8').on('blur', function () {
        if ($('#maxLength8').val().length > 8) {
            console.log("greater than 8!")
            $('#maxLength8').after(max8Warning)
        } else {
            console.log("less than 8!")
            $('.requiredWarning8').remove()
        }
    })

    $('.minLength10').on('keyup', function () {
        $('.requiredWarning10').remove()
        if ($('.minLength10').val().length < 10 || $('.minLength10').val().length > 25) {
            console.log("min 10 max 25!")
            $('.minLength10').after(min10Warning)
        } else {
            console.log("correct!")
            $('.requiredWarning10').remove()
        }
    })

    $('.minLength10').on('blur', function () {
        $('.requiredWarning10').remove()
        if ($('.minLength10').val().length < 10 || $('.minLength10').val().length > 25) {
            console.log("min 10 max 25!")
            $('.minLength10').after(min10Warning)
        } else {
            console.log("correct!")
            $('.requiredWarning10').remove()
        }
    })

    $('.letters').keypress(function (key) {
        $('.lettersError').remove()
        if ((key.charCode < 97 || key.charCode > 122) && (key.charCode < 65 || key.charCode > 90) && (key.charCode != 45)) {
            console.log("min 10 max 25!")
            $('.letters').after(letters)
        }
    })

    $("form").submit(function (e) {
        console.log("submitting")
        $(".requiredWarning").remove()

        if ($("input[value='1']").prop("checked")) {
            console.log('val 1 is checked')
            $('#requiredIfChecked').after(requiredWarning)
            $('#button').css({'margin-top': '15px'})
        } else {
            console.log('val 0 is checked')
            $('#requiredIfChecked').parent()
            $('#button').css({'margin-top': '0'})
        }

        $('.required').each(function () {
            if (!$('.required').val()) {
                $('.required').each(function () {
                    $('.required').parent().append(requiredWarning)
                    console.log('required!')
                    e.preventDefault()
                })
            } else {
                console.log('well done mate')
            }
        })

    })
})