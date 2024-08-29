// Select the body element and the toggle switch element
const body = document.querySelector('body');
const toggleSwitch = document.getElementById('toggle-switch');

// Check if the elements are correctly selected
if (body && toggleSwitch) {
    // Add a click event listener to the toggle switch
    toggleSwitch.addEventListener('click', () => {
        // Toggle the 'dark' class on the body element
        body.classList.toggle('dark');
    });
} else {
    console.error('Elements not found. Make sure the HTML elements exist and the IDs match.');
}
