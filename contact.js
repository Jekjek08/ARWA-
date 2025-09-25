function handleContactSubmit(event) {
    event.preventDefault();
    // In a real application, you would send the form data to your backend here
    // For now, we'll just show a success message
    alert('Thank you for your message! We will get back to you soon.');
    event.target.reset();
}
