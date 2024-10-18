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
  
