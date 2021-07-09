const adminDiv = document.getElementById('admin-facing');
const customerDiv = document.getElementById('customer-facing');
const contentDivs = document.querySelectorAll('.tab-content');
const tabLinks = document.querySelectorAll('.tablink');


function toggleTabs(event, divToDisplay, divToHide) {
    divToHide.style.display = 'none';
    divToDisplay.className = divToDisplay.className.replace('tab-content', 'active');
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



