// Simple script to update the copyright year automatically
document.addEventListener('DOMContentLoaded', (event) => {
    const currentYear = new Date().getFullYear();
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = currentYear;
    }

    console.log("Website script loaded.");
    // Add more interactive JS here later (e.g., mobile nav toggle)
});