function() {
    // annonymous
}

function name(arg1, arg2, arg3, arg4) {
    var arg4 = (typeof arg4 != 'undefined' ? arg4 : 'mike')
    var name = arg1 + arg2;
}

var nameTwo = function() {

    if (val1 == '1') {

    }
    var val1 = 1; //available anywhere in current scope. HOISTING! HOISTS TO TOP LEVEL AVAILABILITY

}

nameTwo();


//let - new keyword ONLY AVAILABLE IN ES 6
//same as var - NO HOISTING
//
//
//Vars are hoisted at parse
//named functions are ALWAYS global
//
//
//function() {
//    // annonymous
//}
//
//function name(arg1, arg2, arg3, arg4) {
//    var arg4 = (typeof arg4 != 'undefined' ? arg4 : 'mike')
//    var name = arg1 + arg2;
//}
//
//var nameTwo = function(val1) {
//    var val2;
//    if (val1 == '1') {
//        val2 = 2;
//    }
//
//    return val2
//
//
//}
//
//nameTwo();


