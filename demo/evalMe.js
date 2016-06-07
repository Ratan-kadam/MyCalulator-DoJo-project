define([
    'dojo/dom'
], function(dom) {

    function performOperation(operation, operands) {
        var total = parseFloat(operands[0]); // first element
        var j = 1; // operand index 
        for (i = 0; i < operation.length; i++) {
            switch (operation[i]) {
                case "+":

                    total += parseFloat(operands[j]) ? parseFloat(operands[j]) : 0;
                    console.log(total);
                    break;
                case "-":
                    total -= parseFloat(operands[j]) ? parseFloat(operands[j]) : 0;
                    console.log(total);
                    break;
                case "*":
                    total *= parseFloat(operands[j]) ? parseFloat(operands[j]) : 1;
                    console.log(total);
                    break;
                case "/":
                    total /= parseFloat(operands[j]) ? parseFloat(operands[j]) : 1;
                    console.log(total);
                    break;
            }

            j++; // incresing operand index
        }

        return total;
    }



    function calculateMe(str) {
        str = str.split('');
        var symbols = '+-*/';
        var operation = [];
        var operands = [];
        var ele = "";
        var flag = false;
        var lastC = str.length - 1;

        for (var i = 0; i < str.length; i++) {
            if (symbols.indexOf(str[i]) > -1) {
                // so the char is operation.
                operation.push(str[i]);
                flag = true;
            }
            if (flag) {
                operands.push(ele);
                ele = ""; // resetting
                flag = false;
            } else {
                ele = ele + str[i];
                if (lastC == i) {
                    operands.push(ele);
                }
            }
        }

        // now we have operands and symbol 

        return total = performOperation(operation, operands);
    }

    function clearAll(display) {
        display.value = 0;
    }
    return {
        calculateTotal: calculateMe
    };


});