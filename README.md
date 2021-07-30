# cookieorderform
You get a cookie... you get a cookie... everybody gets a cookie! But, don't worry, this site doesn't use actual cookies in its implementation... :upside_down_face: :rofl: :wink:

This cookie order form is a vanilla Javascript project, written by Taylor Fritz, for the May 2021 Javascript course through Code Louisville. The idea of this project was to simulate the experience of an ADMIN and CUSTOMER on an order form. The ADMIN must update their prices for cookie packages being offered, which is then sent to the CUSTOMER. The CUSTOMER then submits a cookie order through a JS form which runs through various validations upon submit. Upon a successful submission, the CUSTOMER receives their order confirmation printed back to the screen, and the order is sent back to the ADMIN and visualized in an HTML table. 

Special shout out to the Javascript mentors during this cohort for volunteering their time, expertise, and general encouragement to make this possible: Shannon Beach, Jacob Kastensmidt, Justin Prince, & Brad Cypert.

REQUIREMENTS | FEATURES:
--
- [x] Responsive design
    - Multiple elements are responsive to a change in viewport size `@media(min-width: 825px)`, including the `#pending-orders` that will `display: none` on a smaller screen.
- [x] Uploaded to GitHub via Git
- [x] Includes a README 
- [x] Features included (7/3):

- Read and parse an external file (such as JSON or CSV) into your application and display some data from that in your app
    - `#imagePreview`& `#image-preview__image` receive and read .jpeg files (included in project files)
    
- Create an array, dictionary or list, populate it with multiple values, retrieve at least one value, and use or display it in your application

- Create and use a function that accepts two or more values (parameters), calculates or determines a new value based on those inputs, and returns a new value

- Implement a regular expression (regex) to ensure a field either a phone number or an email address is always stored and displayed in the same format

- Build a conversion tool that converts user input to another type and displays it (ex: converts cups to grams)

- Calculate and display data based on an external factor (ex: get the current date, and display how many days remaining until some event)

- Visualize data in a graph, chart, or other visual representation of data

### How to run project: ###
(start) IN ADMIN >>>
- Update cookie package prices for customers in the format X.XX (If they are not set, the customer is not given package details or prices).
**NOTE:** All three package prices must be valid and entered in one instance in order to proceed successfully. 

(then) IN CUSTOMER >>>
- Browse the cookie package information & fill out the cookie order form accordingly
- Upload an image from the /img folder and view it in the Image Preview
- Upon a successful submission of order form, observe the confirmation information. The following data points are parsed using CUSTOMER input data: 
    - Order pickup date = 2 days prior to eventDate
    - Order Total = captures the package selected (radio) and uses value to search the package object for the correct package data. Then the `pricePerDozen` of the selected package is multiplied by the dozens requested.

(return) IN ADMIN >>>
- Upon confirmation of order, return to the ADMIN portal to see pending orders in the HTML table.


### Additional Project Notes: ###
   - The file uploader will only accept .jpeg files. I've added 4 images in the /img folder for you to use for the sake of this project. Feel free to choose whichever one stands out to you most :wink:
   
   - The following can be tested against validation or conditional formatting:
        - ADMIN: 
            - `priceRegex` is validating input values to check for acceptable prices
            - `updatePriceButton.addEventListener` is listening for UPDATE PRICES click event and checking that all package prices have been set. If all packages have not been set, package details are not sent to CUSTOMER. 

        - CUSTOMER: 
            - All form fields include conditional formatting or regex tests to test input values received by the customer
            - Image file reader only accepts .jpeg files and is then read in the Image Preview


### Future Version Feature Possibilities: ###
- [ ] Package details of selected package remain on CUSTOMER page upon order confirmation
- [ ] `updatePriceButton.addEventListener` will be able to to update one package at a time and hide input of prices already set. 
- [ ] A 'New Order' button that will allow for multple order entries
- [ ] CUSTOMER form will include detailed information about valid inputs accepted in form.



