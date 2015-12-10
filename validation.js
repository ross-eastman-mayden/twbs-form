var htmlWarning = "html warning"

console.log("please print something")

$("form").submit(function (e) {
    console.log("submitting")
    e.preventDefault()
    if (!$('.required').val()) {
        $('.required').parents('p').append('htmlWarning')
        console.log('required!')
        e.preventDefault()
    } else {
        console.log('well done mate')
        return true;
    }
})