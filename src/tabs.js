const adminDiv = document.getElementById('admin-facing');
const customerDiv = document.getElementById('customer-facing');
const tabLinks = document.querySelectorAll('.tablink');
const contentDivs = document.getElementsByClassName('.content');

// Add an active class name to the div targeted
// Remove 'active' class name on div that is not targeted
function toggleTabs(event, addClassName) {
    const buttonClicked = event.target;
    if (buttonClicked.classList.contains('admin-btn')) {
        if (customerDiv.classList.contains(addClassName)) {
            customerDiv.classList.remove(addClassName);
            adminDiv.classList.add(addClassName)
        };
    } else if (buttonClicked.classList.contains('customer-btn')) {
        if (adminDiv.classList.contains(addClassName)) {
            adminDiv.classList.remove(addClassName);
            customerDiv.classList.add(addClassName)
        };
    }
}







// function toggleTabs(event, divToDisplay, divToHide) {
//     for(let i=0;i<tabLinks.length;i++) {
//         if (event.target === tabLinks[0]) {
//             divToHide.style.display = 'none';
//             divToDisplay.className = divToDisplay.className.replace('tab-content', 'active');
//         } else if (event.target === tabLinks[1]) {
//             divToHide.style.display = 'none';
//             divToDisplay.className = divToDisplay.className.replace('tab-content', 'active');
//         }
//     }
// }



