document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get all form inputs
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const subject = document.getElementById('subject');
        const message = document.getElementById('message');
        const messageError = document.getElementById('messageError');
        
        // Reset invalid states
        const formControls = document.querySelectorAll('.form-control');
        formControls.forEach(control => control.classList.remove('invalid'));
        messageError.classList.remove('show');
        
        let isValid = true;
        let firstInvalid = null;

        // Validate name
        if (!name.value.trim()) {
            name.classList.add('invalid');
            isValid = false;
            firstInvalid = firstInvalid || name;
        }

        // Validate email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.value.trim() || !emailPattern.test(email.value)) {
            email.classList.add('invalid');
            isValid = false;
            firstInvalid = firstInvalid || email;
        }

        // Validate message length
        if (!message.value.trim() || message.value.length < 10) {
            message.classList.add('invalid');
            messageError.classList.add('show');
            isValid = false;
            firstInvalid = firstInvalid || message;
        }

        // Focus on first invalid input
        if (firstInvalid) {
            firstInvalid.focus();
        }

        // If all valid, you can submit the form here
        if (isValid) {
            console.log('Form is valid, submitting...');
            const mailtoLink = `mailto:sodiq@example.com?subject=${encodeURIComponent(subject.value)}&body=${encodeURIComponent(
                `Name: ${name.value}\nEmail: ${email.value}\n\nMessage: ${message.value}`
            )}`;
            
            const link = document.createElement('a');
            link.href = mailtoLink;
            link.target = '_blank';
            
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    });
}); 