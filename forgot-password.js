function handleSubmit(event) {
    event.preventDefault();
    // In a real application, you would send the email to your backend here
    // For now, we'll just redirect to the verify code page
    window.location.href = 'verify-code.html';
}
