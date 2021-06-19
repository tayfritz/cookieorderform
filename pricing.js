// Cookie package options - ADMIN
// const adminPackageOptions = document.getElementById("admin-package-options");
const packagePrices = [];
const updatePrices = document.getElementById('update-prices');
const basic = document.getElementById('basic-cookies');
const detailed = document.getElementById('detailed-cookies');
const elaborate = document.getElementById('elaborate-cookies');

const basicInput = document.createElement('input');
basicInput.type = 'number'

const detailedInput = document.createElement('input');
detailedInput.type = 'number'

const elaborateInput = document.createElement('input');
elaborateInput.type = 'number'

basic.appendChild(basicInput);
detailed.appendChild(detailedInput);
elaborate.appendChild(elaborateInput);


updatePrices.addEventListener('click', () => {
    packagePrices.push(basicInput.valueAsNumber);
    packagePrices.push(detailedInput.valueAsNumber);
    packagePrices.push(elaborateInput.valueAsNumber);
});

// Cookie package options - CUSTOMER

// const customerPackagePricing = document.getElementById('customer-package-options');
// const li = document.createElement("li");
// customerPackagePricing.appendChild(li);