define([
    'dojo/dom',
    'demo/evalMe',
    'dojo/on',
], function(dom, evalMe, on) {

    var calculateMe = evalMe.calculateTotal;


    var CalciNumbers = document.getElementsByTagName('button');
    var display = dom.byId('display');
    console.log(CalciNumbers);
    var lastOperation = null;
    var symbols = '+-*/';


    function displayMe(i) {
        return function() {
            console.log("clicked" + i);
            if (symbols.indexOf(CalciNumbers[i].innerHTML) > -1 && CalciNumbers[i].innerHTML == lastOperation) {
                console.log("ignorong the multiple click");
            } else if (symbols.indexOf(lastOperation) > -1 && symbols.indexOf(CalciNumbers[i].innerHTML) > -1) {
                // need to incorporate new operation sign delete the previous one. 
                var curr_display = display.value;
                curr_display = curr_display.substring(0, curr_display.length - 1) + CalciNumbers[i].innerHTML;
                display.value = curr_display;

            } else {
                display.value = display.value + CalciNumbers[i].innerHTML;
                lastOperation = CalciNumbers[i].innerHTML;
                console.log("last operation" + lastOperation);
            }
        }
    }

    function GetTotal(i) {
        return function() {
            //    console.log("clicked" + i);
            var intermediateResult = display.value;

            var intermediateResult1 = intermediateResult.replace(/\d+/g, function(numb) {
                return parseInt(numb, 10);
            });

            display.value = calculateMe(intermediateResult1);
        }

    }

    for (var i = 0; i < CalciNumbers.length; i = i + 1) {
        if (CalciNumbers[i].innerHTML == '=') {
            CalciNumbers[i].addEventListener("click", GetTotal(i));
        } else {
            CalciNumbers[i].addEventListener("click", displayMe(i));
        }
    }


    // clear button code 
    CalciNumbers[0].addEventListener("click", function() {
        display.value = 0;
    });

    // backspace button override. 
    CalciNumbers[1].addEventListener("click", function() {
        display.value = display.value.substring(0, display.value.length - 2);
    });

    CalciNumbers[2].disabled = true;



});