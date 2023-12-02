let contactform = document.getElementById("contactform");

contactform.addEventListener("submit", (e) => {
e.preventDefault();
let fullname = document.getElementById("fullname");
let email = document.getElementById("email-address");
let message = document.getElementById("message");
let emailRegex = /\S+@\S+\.\S+/;//regular expression in javascript that looks for a phrase that has a nonwhitespace character@nonwhitespacechar.

if (fullname.value=="") {
    document.getElementById("alertMessage").innerText = "Error: Do not leave empty";
    document.getElementById("customAlert").style.display = "block";
}else if(!emailRegex.test(email.value)){
    document.getElementById("alertMessage").innerText = "Error:Enter a valid email address";
    document.getElementById("customAlert").style.display = "block";
}else {
    document.getElementById("alertMessage").innerText = "This form has been successfully submitted!";
    document.getElementById("customAlert").style.display = "block";
    console.log(
        `This form has a name of ${fullname.value} , email of ${email.value} and a message of ${message.value}`
    );
    fullname.value = "";
    message.value = "";
    email.value = "";
}
});
