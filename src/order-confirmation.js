// Order Information & Customer | CUSTOMER PAGE
const customerPortalAll = document.getElementById('customer-facing');
const customerWrapper = document.getElementById('wrapper');
const custAlertDiv = document.getElementById('cust-alert-div');
custAlertDiv.style.display = 'none';
const custName = document.getElementById('cust-name');
const custEmail = document.getElementById('cust-email');
const custPhone = document.getElementById('cust-phone-number');
const custEventName = document.getElementById('event-name');
const custEventDate = document.querySelector('#flatpickr');
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


// function determinePickupDate(customerEventDate) {
    
// }


// function determineOrderTotal(packageChosen, dozensOrdered) {

// }

function orderConfirmationDiv(message) {
    confirmationDiv.style.display = 'block';
    const status = document.createElement('h4');
    status.textContent = message;
    confirmationDiv.appendChild(status);
    customerWrapper.style.display = 'none';
}

function pushToAdmin(arr) {
    const table = document.getElementById('pending-orders');
    arr.forEach( (order) => {
        let row = document.createElement('tr'); 
        for (let i=0; i<arr.length; i++) {
            let cell = document.createElement('td');
            let cellData = document.createTextNode(arr[0].values);
            cell.appendChild(cellData);
            row.appendChild(cell);
        } 
    });
}

// EVENT LISTENERS
placeOrder.addEventListener('click', (e) => {
    // validateOrderInfo();
    const newOrder = {
       name: `${custName.value}`,
       email: `${custEmail.value}`,
       phone: `${custPhone.value}`,
       eventName: `${custEventName.value}`,
       eventDate: `${custEventDate.value}`,
    //    pickupDate: determinePickupDate(custEventDate.value),
    //    dozensNeeded: `${custDozens.value}`,
    //    packageSelected: `${custPackageSelected.checked}`,
    //    orderTotal: determineOrderTotal(custPackageSelected.checked, custDozens.value)
   }

   let p = new Promise((resolve, reject) => {
    let pushNewOrder = orders.push(newOrder);
    if (pushNewOrder) {
        resolve('Success! We received your order!');
    } else {
        reject('Something went wrong with your order. Please try again later.');
    }
   });

   p.then((message) => orderConfirmationDiv(message))
    .then( (message) => pushToAdmin(orders))
    .catch((message) => {
        console.log('This is in the catch' + message);
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
