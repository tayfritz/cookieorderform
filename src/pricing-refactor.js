// Cookie package options - ADMIN 
const adminPackageOptions = document.getElementById("admin-package-options");
const alertAdminDiv = document.getElementById('admin-alert-box');
const cookiePackages = [
    {
        packageName: 'BASIC',
        whiteColor: true,
        metalic: false,
        additionalColors: 2,
        maxDesigns: 3,
        dozenMinimum: .5,
        pricePerDozen: 0
    },
    {
        packageName: 'DETAILED',
        whiteColor: true,
        metallic: true,
        additionalColors: 4,
        maxDesigns: 4,
        dozenMinimum: 1,
        pricePerDozen: 0
    },
    {
        packageName: 'ELABORATE',
        whiteColor: true,
        metallic: true,
        additionalColors: 5,
        maxDesigns: 4,
        dozenMinimum: 1,
        pricePerDozen: 0
    }
];

//Price is set dynamically by ADMIN in ADMIN portal and pushed to CUSTOMER portal
function alertAdmin() {
    let count = 0
    for (let i=0;i<cookiePackages.length; i++) {
        if (cookiePackages[i].pricePerDozen === 0) {
            count = +1;
        }
    }   
    if(count > 0) {
        alertAdminDiv.innerHTML = `<p>FRIENDLY REMINDER!</p>
                                    <p>You must set your prices for all packages before you continue!</p>`
        alertAdminDiv.className = "admin-reminder"
    } 
}
alertAdmin();

const updatePriceButton = document.getElementById('update-prices');
const inputBasic = document.querySelector('.price-input-basic');
const inputDetailed = document.querySelector('.price-input-detailed');
const inputElaborate = document.querySelector('.price-input-elaborate');
const priceInputsAll = [];

priceInputsAll.push(inputBasic);
priceInputsAll.push(inputDetailed);
priceInputsAll.push(inputElaborate);

const priceRegex = /^(\d+\.)(\d{2})$/

updatePriceButton.addEventListener('click', () => {
    let counter = 0;
    for (let i=0; i<priceInputsAll.length; i++) {
        let inputValue = priceInputsAll[i].value;
        if  (priceRegex.test(inputValue))  {
            cookiePackages[i].pricePerDozen = parseFloat(inputValue);
        } else {
            counter += 1;
        }
    }   
    if (counter > 0) {
        alertAdminDiv.innerHTML = `<p>We had a problem with your prices. Here's what we got from you. If you'd like to try again, resubmit your prices. If not, any package marked as $0 will prompt the customer to reach out to you!</p>`
        cookiePackages.forEach( (package) => {
            let result = `<br>${package.packageName} | $${package.pricePerDozen}`
            alertAdminDiv.insertAdjacentHTML('beforeend', result);
        });  
    } else {
        alertAdminDiv.innerHTML = `<p>SUCCESS! Your prices have been updated! Here's what we got from you!</p>`
        cookiePackages.forEach( (package) => {
            let result = `<br>${package.packageName} | $${package.pricePerDozen}`
            alertAdminDiv.insertAdjacentHTML('beforeend', result);
        });
    }
    inputBasic.value= "";
    inputDetailed.value= "";
    inputElaborate.value= "";
});

// Place Updated Prices on CUSTOMER portal
const customerPackageOptions = document.getElementById('customer-package-options');
function summarizeColors(package) {
    let totalColors;
    if (package.whiteColor) {
        totalColors = `white + ${package.additionalColors} additional colors of choice`;
    } else {
        totalColors = `${package.additionalColors} colors of choice`;
    }
    return totalColors;
}

function summarizeMetalics(package) {
    let metalics;
    if (package.metalic) {
        metalics = `metalics`;
    } else {
        metalics = `metalics not included`;
    }
    return metalics;
}

cookiePackages.forEach((package) => {
    const card = document.createElement('div');
    card.className = package.packageName;
    card.innerHTML = `<p>${package.packageName}<p>`
    const p = document.createElement('p');
    p.innerHTML = `<p>Included in package: ${summarizeColors(package)}, ${summarizeMetalics(package)}, ${package.maxDesigns} designs </p>`
    customerPackageOptions.appendChild(card);
    card.appendChild(p);
});










