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
const pendingOrdersTable = document.getElementById('pending-orders');
const orders = []

// REGEX TEST STRINGS
const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
const phoneRegex = /^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/;
const dozensRegex = /^\d+$/;

// FUNCTIONS

function  validateOrderInfo() {
    let problemCounter = 0;
    custAlertDiv.textContent = `We experienced the following errors on your form. Please try again to proceed with your order:  `
    // Validate name
    if (custName.value === "") {
        problemCounter += 1;
        custAlertDiv.style.display = 'block';
        custAlertDiv.innerHTML += `<p> - Name </p>`;
    } 
    // Validate email
    if (emailRegex.test(custEmail.value) === false) {
        problemCounter += 1;
        custAlertDiv.style.display = 'block';
        custAlertDiv.innerHTML += `<p> - Email </p>`;
    } 
    // Validate phone number
    if (phoneRegex.test(custPhone.value) === false) {
        problemCounter += 1;
        custAlertDiv.style.display = 'block';
        custAlertDiv.innerHTML += `<p> - Phone Number </p>`;
    }
    // Validate that event name was given
    if (custEventName.value === "") {
        problemCounter += 1;
        custAlertDiv.style.display = 'block';
        custAlertDiv.innerHTML += `<p> - Event Name </p>`;
    }
    // Validate that event date is received
    if (custEventDate.value === "") {
        problemCounter += 1;
        custAlertDiv.style.display = 'block';
        custAlertDiv.innerHTML += `<p> - Event Date </p>`;
    }
    // Validate that dozens is provided and is an integer
    let dozensPassed = parseInt(custDozens.value);
    if (dozensRegex.test(dozensPassed) === false) {
        problemCounter += 1;
        custAlertDiv.style.display = 'block';
        custAlertDiv.innerHTML += `<p> - Dozens Needed (must be an integer) </p>`;
    }
   // Validate that package is selected
    if (custPackageSelected[0].checked === false && custPackageSelected[1].checked === false && custPackageSelected[2].checked === false) {
        problemCounter += 1;
        custAlertDiv.style.display = 'block';
        custAlertDiv.innerHTML += `<p> - Select Package </p>`;
    }
    
    if (problemCounter === 0) {
        custAlertDiv.style.display = 'none';
        return true;
    } else  {
        return false;
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

function determinePackageSelected(arr) {
    for (let i=0; i<arr.length; i++) {
        if (arr[i].checked === true) {
            let identifier = arr[i]["id"];
            let packageDetailsOfSelected = identifier;
            return identifier.toUpperCase();
        } 
    }
}

function determineOrderTotal(packageSelectedByUser, packageArr, dozensOrdered) {
    let dozens = parseFloat(dozensOrdered);
    let printToCust;
    packageArr.find((item, index) => {
        if (item.packageName === packageSelectedByUser) {
            let packageCost = item.pricePerDozen;
            if (item.pricePerDozen === 0) {
                printToCust = `Price TBD`;
                return printToCust;
            }
            let total = packageCost * dozens;
            printToCust = `$${total} (including tax)`;
        }
    });
    return printToCust;
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

function sendOrderToAdmin(arr) {
    let titles = Object.keys(arr[0]);
    let headerRow = document.createElement('tr');
    pendingOrdersTable.appendChild(headerRow);
    titles.forEach( (header) => {
        let headerTitle = document.createElement('th');
        headerTitle.textContent = header;
        headerRow.appendChild(headerTitle);
    })

    arr.forEach( (order) => {
        let data = Object.values(order);
        let dataRow = document.createElement('tr');
        pendingOrdersTable.appendChild(dataRow);
        console.log(data);
        data.forEach( (item) => {
            let cell = document.createElement('td');
            cell.textContent = item;
            return dataRow.appendChild(cell);
        });
    });
}

// EVENT LISTENERS
placeOrder.addEventListener('click', (e) => {
    if (validateOrderInfo()) {
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
            .then( () => sendOrderToAdmin(orders))
            .catch((message) => {
                alert(`Something went wrong. Please contact administrator. ${message}`);
        });
    } else {
        return;
    }
});





