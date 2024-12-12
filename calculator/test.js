let display = document.getElementById("display");
let buttons = document.querySelectorAll('button');
let buttonsArray = Array.from(buttons);

let string = '';
let memory = 0;

// Keyboard support
document.addEventListener('keydown', function(event) {
    const key = event.key;
    if (/[\d\+\-\*\/\(\)\.]/.test(key)) {
        handleInput(key);
    } else if (key === 'Enter') {
        handleInput('=');
    } else if (key === 'Backspace') {
        handleInput('Del');
    } else if (key === 'Escape') {
        handleInput('AC');
    }
});

// Button click handler
buttonsArray.forEach(function(btn) {
    btn.addEventListener('click', function(event) {
        handleInput(event.target.innerHTML);
    });
});

function handleInput(value) {
    try {
        switch(value) {
            case 'Del':
                string = string.substring(0, string.length - 1);
                break;
            case 'AC':
                string = '';
                break;
            case '=':
                string = calculate(string);
                break;
            case '%':
                string = (parseFloat(calculate(string)) / 100).toString();
                break;
            case '√':
                string = Math.sqrt(parseFloat(calculate(string))).toString();
                break;
            case '^':
                string += '**';
                break;
            case 'MC':
                memory = 0;
                return;
            case 'MR':
                string = memory.toString();
                break;
            case 'M+':
                memory += parseFloat(calculate(string)) || 0;
                return;
            case 'M-':
                memory -= parseFloat(calculate(string)) || 0;
                return;
            default:
                if (string === '0' && !isNaN(value)) {
                    string = value;
                }else if (string === '00' && !isNaN(value)) {
                    string = value;
                } else {
                    string += value;
                }
        }
        display.value = string || '0';
    } catch (error) {
        display.value = 'Error';
        string = '';
    }
}

function calculate(expr) {
    if (!expr) return '0';
    
    // Handle special cases
    expr = expr.replace(/\^/g, '**')  // Convert ^ to **
             .replace(/×/g, '*')      // Convert × to *
             .replace(/÷/g, '/');     // Convert ÷ to /
    
    try {
        // Basic validation
        if (!/^[0-9\+\-\*\/\(\)\.\s\*]*$/.test(expr)) {
            throw new Error('Invalid characters');
        }
        
        // Evaluate and format result
        let result = Function('"use strict";return (' + expr + ')')();
        
        // Handle division by zero and invalid results
        if (!isFinite(result)) {
            throw new Error('Invalid calculation');
        }
        
        // Format the result to avoid long decimal numbers
        return parseFloat(result.toFixed(8)).toString();
    } catch (error) {
        throw new Error('Invalid expression');
    }
}
