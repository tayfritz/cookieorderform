// Order Information & Customer | CUSTOMER PAGE
const customerPortalAll = document.getElementById('customer-facing');
const customerWrapper = document.getElementById('wrapper');
const custAlertDiv = document.getElementById('cust-alert-div');
custAlertDiv.style.display = 'none';
const custName = document.getElementById('cust-name');
const custEmail = document.getElementById('cust-email');
const custPhone = document.getElementById('cust-phone-number');
const custEventName = document.getElementById('event-name');
const custEventDate = document.getElementById('event-date');
const custDozens = document.getElementById('dozens');
const custPackageSelected = document.querySelectorAll("#cookie-packages input");
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

function parseDate(customerEventDate) {
    let date = new Date(customerEventDate).toUTCString().slice(0, -13);;
    console.log(date);
    return date;
}

function determinePickupDate(customerEventDate) {
    let date = new Date(customerEventDate);
    let calculatePickup = date.setDate(date.getDate() - 2);
    let pickup = new Date(calculatePickup).toUTCString().slice(0, -13);
    return pickup;
}

function determineOrderTotal(packageSelectedByUser, packageArr, dozensOrdered) {
    // let packageSelected = packageSelectedByUser;
    let dozens = parseFloat(dozensOrdered);
    console.log(dozens);
    console.log(packageSelectedByUser);
    console.log(packageArr);
    let printToCust;
    packageArr.find((item, index) => {
        if (item.packageName === packageSelectedByUser) {
            let packageCost = item.pricePerDozen;
            let total = packageCost * dozens;
            printToCust = `$${total} (including tax)`;
        }
    });
    return printToCust;
}

function determinePackageSelected(arr) {
    for (let i=0; i<arr.length; i++) {
        if (arr[i].checked === true) {
            let identifier = arr[i]["id"];
            return identifier.toUpperCase();
        } 
    }
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
       "Event Date": `${parseDate(custEventDate.value)}`,
       "Pickup Date": `${determinePickupDate(custEventDate.value)}`,
       "Dozens Needed": `${custDozens.value}`,
       "Package": `${determinePackageSelected(custPackageSelected)}`,
       "Order Total": `${determineOrderTotal(determinePackageSelected(custPackageSelected), cookiePackages, custDozens.value)}`
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
// Calculate order total based on package chosen and price set
// Push object to HTML table on ADMIN portal


