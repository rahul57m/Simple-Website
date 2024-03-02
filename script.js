
let btn = document.querySelector("#mode");
// let body = document.querySelector("#body");
let currmode = 'light';
btn.addEventListener("click" ,() => {
    if (currmode === 'light') {
        currmode = "Dark";
        document.querySelector("body").style.backgroundColor = "black";
    } else {
        currmode = "light";
        document.querySelector("body").style.backgroundColor = "white";
    }
    console.log(currmode);
});


function validateForm() {
    // Get the value of the name input field
    var name = document.getElementById('name').value;

    // Check if the name field is empty
    if (name.trim() == '') {
        // Display error message
        document.getElementById('nameError').innerText = 'Name is required';
        // Prevent form submission
        return false;
    } else {
        // Clear error message
        document.getElementById('nameError').innerText = '';
        // Allow form submission
        return true;
    }
}