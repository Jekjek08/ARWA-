function handleResetSubmit(event) {
    event.preventDefault();
    // In a real application, you would send the new password to your backend here
    // For now, we'll just show the success modal
    document.getElementById('successModal').style.display = 'flex';
}

function goToLogin() {
    window.location.href = 'login.html';
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById('successModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}
