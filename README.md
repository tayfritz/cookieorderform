# cookieorderform
You get a cookie... you get a cookie... everybody gets a cookie! But, don't worry, this site doesn't use actual cookies in its implementation... :upside_down_face: :rofl: :wink:

This cookie order form is a vanilla Javascript project, written by Taylor Fritz, for the May 2021 Javascript course through Code Louisville. The idea of this project was to simulate the experience of an ADMIN and CUSTOMER on an order form. The ADMIN must update their prices for cookie packages being offered, which is then sent to the CUSTOMER. The CUSTOMER then submits a cookie order through a JS form which runs through various validations upon submit. Upon a successful submission, the CUSTOMER receives their order confirmation printed back to the screen, and the order is sent back to the ADMIN and visualized in an HTML table. 

Special shout out to the Javascript mentors during this cohort for volunteering their time, expertise, and general encouragement to make this possible: Shannon Beach, Jacob Kastensmidt, Justin Prince, & Brad Cypert.

REQUIREMENTS | FEATURES:
--
- [x] Responsive design
    - Multiple elements are responsive to a change in viewport size `@media(min-width: 825px)`, including the `#pending-orders` HTML table that will `display: none` on a smaller screen.
- [x] Uploaded to GitHub via Git
- [x] Includes a README 
- [x] Features included (7/3):

- Read and parse an external file (such as JSON or CSV) into your application and display some data from that in your app
    - `#imagePreview` & `#image-preview__image` receive and read .jpeg files (which are provided for in the project files).
    
- Create an array, dictionary or list, populate it with multiple values, retrieve at least one value, and use or display it in your application
    - The `orders` array contains order objects and is itterated over in multiple functions, such as in the case of `determinePackageSelected()`.

- Create and use a function that accepts two or more values (parameters), calculates or determines a new value based on those inputs, and returns a new value
    - Multiple functions accept two or more values, including: `determineOrderTotal()` & `orderConfirmationDiv()`.

- Implement a regular expression (regex) to ensure a field either a phone number or an email address is always stored and displayed in the same format
    - There are four total regex validators within the project, including `emailRegex` & `priceRegex`.

- Build a conversion tool that converts user input to another type and displays it (ex: converts cups to grams)
    - There are a couple of functions that use user input to convert that data into another type of data, which is then displayed in multiple ways. Two of these functions are `parseDate()` & `determinePickupDate()`.

- Calculate and display data based on an external factor (ex: get the current date, and display how many days remaining until some event)
    - The following functions use user input from the order form to determine the `pickupDate` (2 days prior to event date) and the `orderTotal`: `determinePickupDate()` & `determineOrderTotal()`.

- Visualize data in a graph, chart, or other visual representation of data
    - User input from the customer portal to make a cookie order is used to create an order object, which is sent back to the admin in the form of an HTML table, `sendOrderToAdmin()`.

### How to run project: ###
1. Open index.html
2. On load, you will be in the `ADMIN` portal 
    - The cookie packages available will be - `BASIC`, `DETAILED`, & `ELABORATE`. The package prices must be be set in order for the CUSTOMER to view the package details (on load, the packages are not visible in the CUSTOMER portal). 
    - Using the format of X.XX, enter your cookie package prices per dozen `Ex: BASIC: 3.99 | DETAILED: 4.99 | ELABORATE: 5.99`. You may use whatever you'd like for the prices.
    - The regex testing these input fields, `priceRegex` will test that you've entered a correct price in the above format. Otherwise, it will prompt you to try again. Once you set the package prices correctly (Note: you must set them correctly in a single instance. They do not save unless all prices are OK), you will recive a confirmation message that your prices have been updated. 
    - You may view your new package prices in the `adminAlertDiv`.
3. Upon confirmation that your prices have been updated, switch to the `CUSTOMER` portal, by using the `tabLink` at the top, entitled `CUSTOMER`. 
    - You may view the package options, what is included in each package, and the package `pricePerDozen` in the card divs at the top of the page.
    - Use the order form, below the card divs, to place a cookie order. 
    - Fill out each field with typical characters. All fields are checked through regex and other validation requirements to ensure the proper data is being received. If you do not enter expected data, you will be alerted in the `cust-alert-div` that there was a problem and will list the specific input(s) where the problem occured. To avoid an error, use the following guide: 
        - Name: must not be an empty string
        - Email: must be a valid, typical, email string (abc@trythis.com)
        - Phone: must me a valid, typical, phone number consisting of 10 numbers. () and - are also allowed.
        - Event Name: must not be an empty string
        - Event Date: must not be an empty string
        - Dozens Needed: must include an integer
        - Package: One package must be selected to continue
    - Upload an inspo picture for your cookie order using the file uploader. Pictures must be .jpeg, so I have included some pictures in the project files that you may pic from and use. Your file will be read and displayed using `#imagePreview` & `#image-preview__image`. (Note, this is not included in the order object. But still fun :wink:!)
    - If the order passes validation, you will be alerted that your order was succesful by seeing the `#order-confirmation`. 
    - Successful orders create an order object, `newOrder` and are passed into the `orders` array. Then the array is iterated over to create the `pendingOrdersTable` on the ADMIN portal.
4. Upon completion of a successful order, return to the `ADMIN` portal. On a viewport over 825px, you will see your `#pending-orders` in a table that contains information on each of your orders (in this case, there will be only one).

### Future Version Feature Possibilities: ###
- [ ] Package details of selected package remain on CUSTOMER page upon order confirmation
- [ ] `updatePriceButton.addEventListener` will be able to to update one package at a time and hide input of prices already set. 
- [ ] A 'New Order' button that will allow for multple order entries
- [ ] CUSTOMER form will include detailed information about valid inputs accepted in form.



