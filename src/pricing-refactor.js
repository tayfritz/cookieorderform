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
        alertAdminDiv.textContent = `REMINDER! You must set your prices for all packages before you continue!`
        alertAdminDiv.className = "admin-reminder"
        adminPackageOptions.appendChild(alertAdminDiv);
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


updatePriceButton.addEventListener('click', () => {
    for (let i=0; i<priceInputsAll.length; i++) {
        let inputValue = priceInputsAll[i].value;
        cookiePackages[i].pricePerDozen = inputValue;
        alertAdminDiv.textContent = `SUCCESS! Your prices have been updated! Here's what we got from you!`
        cookiePackages.forEach( (package) => {
            let result = `<br>${package.packageName} | $${package.pricePerDozen}`
            alertAdminDiv.insertAdjacentHTML('beforeend', result);
        })
        priceInputsAll[i].value = ""
    }
});



const priceRegex = /^(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d{2})?$/;










// const customerPackagePricing = document.getElementById('customer-package-options');

// Build package details to print to customer
// const packageInfo = cookiePackages.forEach( (package) => {
    
// });















