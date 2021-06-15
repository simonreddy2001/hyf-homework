function foo() { return "foo"; }
function boo() { return "boo"; }
function zoo() { return "zoo"; }

const funcArray = [foo(), boo(), zoo()]
funcArray.forEach(func => func)


//Function declaration
function noo() { return "its declarative function"; }

//Anonymous function expression
const moo = function () { return "its Anonymous function"; }

noo();
moo();

const funcObject = {
    remo: function () {
        return "i am remo...";
    }
}
funcObject.remo()

