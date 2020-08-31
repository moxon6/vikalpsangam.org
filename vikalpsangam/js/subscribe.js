$(function () {
    var emptyEmailMessage = "Enter valid Email Address!";
    var emailRegex = new RegExp('^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$', "i");
    $("#mc-embedded-subscribe-form").submit(function (event) {
        var emailField = $("#mce-EMAIL");
        var emailValue = emailField.val();
        if (!emailValue || !emailRegex.test(emailValue)) {
            emailField.addClass("alert-danger");
            emailField.val(emptyEmailMessage);
            emailField.select();
            event.preventDefault();
        }else{
            setTimeout(function() {
                emailField.val("We will keep you updated");
                emailField.removeClass("alert-danger").addClass("alert-success");
            }, 500);
        }
    });
});
