//your JS code here. If required.
//find the reference of the element to be removed
//find the reference of the button
//add event listener of select to the button
//add function to the event listener

let color = document.getElementById("colorSelect");

let btn = document.getElementsByTagName("input")[0].addEventListener("click", function() {
    const selectedCol = color.value;
    for (let i = 0; i < color.options.length; i++) {
        if (selectedCol == color.options[i].value) {
            color.remove(i);
            break;
        }
    }
});
