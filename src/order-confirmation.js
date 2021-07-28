// Order Information & Customer | CUSTOMER PAGE
const customerPortalAll = document.getElementById('customer-facing');
const customerWrapper = document.getElementById('wrapper');
const custAlertDiv = document.getElementById('cust-alert-div');
custAlertDiv.style.display = 'none';
const custName = document.getElementById('cust-name');
const custEmail = document.getElementById('cust-email');
const custPhone = document.getElementById('cust-phone-number');
const custEventName = document.getElementById('event-name');
const custEventDate = document.getElementById('event-date').addEventListener('change', () => {
    let input = this.value;
    let custInput = new Date(input);
    return custInput;
});
const custDozens = document.getElementById('dozens');
const custPackageSelected = document.querySelectorAll("#cookie-package input");
const placeOrder = document.getElementById('place-order');
const confirmationDiv = document.createElement('div');
confirmationDiv.setAttribute('id', 'order-confirmation');
customerPortalAll.appendChild(confirmationDiv);
confirmationDiv.style.display = 'none';
const orders = []

// FUNCTIONS

function  validateOrderInfo() {
    // Validate name
    if (custName.value === "") {
        custAlertDiv.innerHTML = `<p> You must provide a name to place an order! </p>`
        custAlertDiv.style.display = 'block';
    } 

}


function determinePickupDate(customerEventDate) {
    console.log(customerEventDate);
}


function determineOrderTotal(packageChosen, dozensOrdered) {

}

function orderConfirmationDiv(message, orderObj, keys, values) {
    confirmationDiv.style.display = 'block';
    const status = document.createElement('h4');
    status.textContent = message;
    confirmationDiv.appendChild(status);
    customerWrapper.style.display = 'none';

    keys.forEach((key, index) => {
        let p = document.createElement('p');
        p.setAttribute('class', 'order-data');
        p.textContent = `${key}: ${orderObj[key]}`;
        confirmationDiv.appendChild(p);
    });
}


// EVENT LISTENERS
placeOrder.addEventListener('click', (e) => {
    // validateOrderInfo();
    const newOrder = {
       "Name": `${custName.value}`,
       "Email": `${custEmail.value}`,
       "Phone":`${custPhone.value}`,
       "Event Name": `${custEventName.value}`,
       "Event Date": `${custEventDate}`,
       "Pickup Date": determinePickupDate(custEventDate),
       "Dozens Needed": `${custDozens.value}`,
       "Package": `${custPackageSelected.checked}`,
       "Order Total": determineOrderTotal(custPackageSelected.checked, custDozens.value)
   }

   const orderKeys = Object.keys(newOrder);
   const orderValues = Object.values(newOrder);

   let p = new Promise((resolve, reject) => {
    let pushNewOrder = orders.push(newOrder);
    if (pushNewOrder) {
        resolve('Success! We received your order!');
    } else {
        reject('Something went wrong with your order. Please try again later.');
    }
   });

   p.then((message) => orderConfirmationDiv(message, newOrder, orderKeys, orderValues))
    // .then( (message) => sendOrder(newOrder.keys, newOrder.values))
    .catch((message) => {
        console.log('This is in the catch! ' + message);
   });
});

// NOTES:
// Validate inputs
// If all are 'true', make a new object
// Calculate pick up time based on event date
// Calculate order total based on package chosen and price set
// Print confirmation to customer
// Push object to HTML table on ADMIN portal











// const orderDescription = document.createElement('p');
//     orderDescription.textContent = `
//         Customer Info:
//             Name: ${custName.value} 
//             Email: ${custEmail.value}
//             Phone: ${custPhone.value}
        
//         Order Information:
//             Event Name: ${eventName.value} 
//             Event Date: ${eventDate.value} 
//             Pickup Date: tbd
//             Dozens Needed: ${dozens.value} 
//             Total Price: tbd
//         `
//     orderConfirmation.appendChild(orderDescription);

// fs.writeFile('./orders.json', JSON.stringify(newOrderObj), err => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('succes!');
//     }
// })
