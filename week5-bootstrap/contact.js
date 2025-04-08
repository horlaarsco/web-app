$(document).ready(function() {
    $('#name').on('input', function() {
        if ($(this).val().trim()) {
            $(this).removeClass('invalid');
        }
    });

    $('#email').on('input', function() {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if ($(this).val().trim() && emailPattern.test($(this).val())) {
            $(this).removeClass('invalid');
        }
    });

    $('#message').on('input', function() {
        if ($(this).val().trim().length >= 10) {
            $(this).removeClass('invalid');
            $('#messageError').removeClass('show');
        }
    });

    $('#contactForm').on('submit', function(e) {
        e.preventDefault();
        
        // Reset invalid states
        $('.form-control').removeClass('invalid');
        $('#messageError').removeClass('show');
        
        let isValid = true;
        let firstInvalid = null;

        // Validate name
        if (!$('#name').val().trim()) {
            $('#name').addClass('invalid');
            isValid = false;
            firstInvalid = firstInvalid || $('#name')[0];
        }

        // Validate email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!$('#email').val().trim() || !emailPattern.test($('#email').val())) {
            $('#email').addClass('invalid');
            isValid = false;
            firstInvalid = firstInvalid || $('#email')[0];
        }

        // Validate message length
        if (!$('#message').val().trim() || $('#message').val().length < 10) {
            $('#message').addClass('invalid');
            $('#messageError').addClass('show');
            isValid = false;
            firstInvalid = firstInvalid || $('#message')[0];
        }

        // Focus on first invalid input
        if (firstInvalid) {
            $(firstInvalid).focus();
        }

        // If all valid, submit the form
        if (isValid) {
            console.log('Form is valid, submitting...');
            const mailtoLink = `mailto:sodiq@example.com?subject=${encodeURIComponent($('#subject').val())}&body=${encodeURIComponent(
                `Name: ${$('#name').val()}\nEmail: ${$('#email').val()}\n\nMessage: ${$('#message').val()}`
            )}`;
            
            const link = $('<a>', {
                href: mailtoLink,
                target: '_blank',
                style: 'display: none'
            }).appendTo('body');
            
            link[0].click();
            console.log(link)
            link.remove();
        }
    });
});