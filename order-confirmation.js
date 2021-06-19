// Order confirmation : CUSTOMER PAGE

const placeOrder = document.getElementById('place-order');
const orderConfirmation = document.getElementById('order-confirmation');
const custName = document.getElementById('cust-name');
const custPhone = document.getElementById('cust-phone-number');
const custEmail = document.getElementById('cust-email');
const eventName = document.getElementById('event-name');
const eventDate = document.getElementById('event-date');
const dozens = document.getElementById('dozens');
// const packageSelected = document.querySelectorAll("#cookie-package");

placeOrder.addEventListener('click', () => {
    const orderDescription = document.createElement('p');
    orderDescription.textContent = `
        Customer Info:
            Name: ${custName.value} 
            Email: ${custEmail.value}
            Phone: ${custPhone.value}
        
        Order Information:
            Event Name: ${eventName.value} 
            Event Date: ${eventDate.value} 
            Pickup Date: tbd
            Dozens Needed: ${dozens.value} 
            Total Price: tbd
        `
    orderConfirmation.appendChild(orderDescription);
});
