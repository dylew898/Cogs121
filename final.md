# Final Deliverable

## Team Members
Allen Chiang
 - Implemented UI changes throughout the quarter after review and feedback
 - Implemented the functionality of the UI design for add item, checkout and view inventory
 - Connected frontend and backend functionality to the database
 
Daniel Lew
 - Helped to develop the UX/UI design scheme for the application
 - Implemented some UI changes throughout the quarter after review and feedback
 - Provided the writeups for each of the milestones 
 
Kenny Zhu
 - Implemented functionality of the UI design for add item, checkout and view inventory
 - Connected and managed backend functionality for the database
 - Implemented UI changes after review and feedback
 
## Source Code Files

#### Login Page
login.hbs
This is the login page. Users would sign in using their email and password in order to gain
access to the app. We also included in a 'Remember me' checkbox to help autopopulate the 
user's credentials if they choose to do so.


#### View Inventory Page
viewInventory.hbs
This is the view that allows the user to look at what inventory items they have
in the system. It uses handlebars elements in order to  dynamically populate
the page with the different items from the firebase database. Furthermore, the
js in this file queries the database to get all  the locations and populates
the select box. There is  also a listener  on the select box that changes
what the user sees based  on what location they select.

#### Add Item Pages
addItemManual.hbs
This page allows the user to manually input items into the database. There are
multiple input boxes that they can fill out, such as bar code, quantity and an
image. The submit button updates the firebase database. 

upcLookup.hbs
This is the UPC lookup page. Users have the ability to add new items by typing in the item's UPC barcode
into the barcode text field. Searching the barcode will autopopulate the item's name pulling it from the
UPC item database. The user would then enter in a location for their item to be sorted in for organizational
purposes, as well as enter in the quantity of that item as well as have the ability to upload an image for
that item.

updateExisting.hbs
This page is used to update existing items that are already in the database.
It queries the firebase database for pre-existing data and then populates the
select boxes. There are also listeners on ever select box that detects when a
user chooses something so that the next box can also be populated. Finally, the
submit button updates the item information in the firebase database. 

#### Checkout Item Page
checkoutItem.hbs
This page is used to checkout existing items that are already in the database.
It queries the firebase database for pre-existing data and then populates the
select boxes. There are also listeners on ever select box that detects when a
user chooses something so that the next box can also be populated. Finally, the
submit button updates the item information in the firebase database. 

#### Layout
layout.hbs
This page is to help create the layout for the application 

#### CSS Files
index.css
This is the styling for the index 

login.css
This is the styling for the login page 

style.css
This is the styling for the application, for view inventory, add item, and
checkout item 