// Cookie package options - ADMIN 
// const adminPackageOptions = document.getElementById("admin-package-options");
const packagePrices = [];
const updatePrices = document.getElementById('update-prices');
const basic = document.getElementById('basic-cookies');
const detailed = document.getElementById('detailed-cookies');
const elaborate = document.getElementById('elaborate-cookies');
const customerPackagePricing = document.getElementById('customer-package-options');


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
    const basicLi = document.createElement("li");
    basicLi.textContent = `Basic Package Price: $${basicInput.value}`
    customerPackagePricing.appendChild(basicLi);
    basicInput.value = "";
    
    packagePrices.push(detailedInput.valueAsNumber);
    const detailedLi = document.createElement("li");
    detailedLi.textContent = `Detailed Package Price: $${detailedInput.value}`
    customerPackagePricing.appendChild(detailedLi);
    detailedInput.value = "";

    packagePrices.push(elaborateInput.valueAsNumber);
    const elaborateLi = document.createElement("li");
    elaborateLi.textContent = `Elaborate Package Price: $${elaborateInput.value}`
    customerPackagePricing.appendChild(elaborateLi);
    elaborateInput.value = "";
});