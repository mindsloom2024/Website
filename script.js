const menuToggle = document.getElementById('menu-toggle');
const dropdownMenu = document.getElementById('dropdown-menu');

menuToggle.addEventListener('click', () => {
    dropdownMenu.classList.toggle('show'); // Toggle the display of the dropdown menu
});

// Optional: Close the dropdown menu when clicking outside of it
document.addEventListener('click', (event) => {
    if (!menuToggle.contains(event.target) && !dropdownMenu.contains(event.target)) {
        dropdownMenu.classList.remove('show'); // Close dropdown menu if clicked outside
    }
});

// Optional: Change navbar style on scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
        dropdownMenu.classList.remove('show');
    }
});





function calculatePrice() {
    // Get selected service value (price per word)
    const serviceRate = document.getElementById('service').value;

    // Get word count from the input field
    const wordCount = document.getElementById('wordCount').value;

    // Calculate total price
    const totalPrice = serviceRate * wordCount;

    // Display total price or error if no service is selected
    if (serviceRate > 0 && wordCount > 0) {
        document.getElementById('priceOutput').innerHTML = `Rs ${totalPrice.toFixed(2)}`;
    } else {
        document.getElementById('priceOutput').innerHTML = `Rs 0.00`;
    }
}

document.querySelector('.whatsapp-btn').addEventListener('click', function() {
    const phoneNumber = '919266811039'; // Replace with your WhatsApp number
    const message = 'Hello, I would like to inquire about your services.'; // Message you want to send
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`; // Properly encoded URL
    window.open(url, '_blank');
  });
  
