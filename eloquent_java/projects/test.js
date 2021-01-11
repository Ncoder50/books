//test

const square = x => x * x;
console.log(square(20));

const horn = () => console.log("toot");
horn();

function myLever(flag) {
    if (flag)
        raiseLever();
    else
        lowerLever();
    function raiseLever() {
        console.log("Raising Lever");
    }
    function lowerLever() {
        console.log("Lowering Lever");
    }
}

myLever(true);
myLever(false);