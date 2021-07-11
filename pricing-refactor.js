// Cookie package options - ADMIN 
const adminPackageOptions = document.getElementById("admin-package-options");

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
const alertAdminDiv = document.createElement('div');
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
        let inputValue = priceInputsAll[i].valueAsNumber;
        cookiePackages[i].pricePerDozen = inputValue;
        alertAdminDiv.textContent = `SUCCESS! Your prices have been updated! Here's what we got from you!`
        cookiePackages.forEach( (package) => {
            let result = `<br>${package.packageName} | $${package.pricePerDozen}`
            alertAdminDiv.insertAdjacentHTML('beforeend', result);
        })
        priceInputsAll[i].value = ""
    }
});













// const customerPackagePricing = document.getElementById('customer-package-options');

// Build package details to print to customer
// const packageInfo = cookiePackages.forEach( (package) => {
    
// });
















// const packagePrices = [];
// const updatePrices = document.getElementById('update-prices');
// const basic = document.getElementById('basic-cookies');
// const detailed = document.getElementById('detailed-cookies');
// const elaborate = document.getElementById('elaborate-cookies');

// const basicInput = document.createElement('input');
// basicInput.type = 'number'

// const detailedInput = document.createElement('input');
// detailedInput.type = 'number'

// const elaborateInput = document.createElement('input');
// elaborateInput.type = 'number'

// basic.appendChild(basicInput);
// detailed.appendChild(detailedInput);
// elaborate.appendChild(elaborateInput);

// const customerPackagePricing = document.getElementById('customer-package-options');

// updatePrices.addEventListener('click', () => {
//     packagePrices.push(basicInput.valueAsNumber);
//     const basicLi = document.createElement("li");
//     basicLi.textContent = `Basic Package Price: $${basicInput.value}`
//     customerPackagePricing.appendChild(basicLi);
//     basicInput.value = "";

//     packagePrices.push(detailedInput.valueAsNumber);
//     const detailedLi = document.createElement("li");
//     detailedLi.textContent = `Detailed Package Price: $${detailedInput.value}`
//     customerPackagePricing.appendChild(detailedLi);
//     detailedInput.value = "";

//     packagePrices.push(elaborateInput.valueAsNumber);
//     const elaborateLi = document.createElement("li");
//     elaborateLi.textContent = `Elaborate Package Price: $${elaborateInput.value}`
//     customerPackagePricing.appendChild(elaborateLi);
//     elaborateInput.value = "";
// });

// Cookie package options - CUSTOMER PAGE