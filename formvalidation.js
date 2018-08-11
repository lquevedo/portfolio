function validateForm() {
    if (document.formValidate.firstName.value == '') {
        alert( "Please provide your first name!" );
        document.formValidate.firstName.focus();
        return false;
    }
    if (document.formValidate.lastName.value == '') {
        alert( "Please provide your last name!" );
        document.formValidate.lastName.focus();
        return false;
    }
    if (document.formValidate.email.value == '') {
        alert( "Please provide your email!" );
        document.formValidate.email.focus();
        return false;
    }
}











/*var firstName = document.forms["formValidate"]["firstName"].value;
    var lastName = document.forms["formValidate"]["lastName"].value;
    var email = document.forms["formValidate"]["email"].value;
    if (firstName == "") {
        alert("First name must be filled out.");
    };
    if (lastName === '') {
        alert('Last name must be filled out.');
    };
    if (email === '') {
        alert('Email must be filled out.')
    } */