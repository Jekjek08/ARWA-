function handleVerifySubmit(event) {
    event.preventDefault();
    // In a real application, you would verify the code with your backend here
    // For now, we'll just redirect to the reset password page
    window.location.href = 'reset-password.html';
}
