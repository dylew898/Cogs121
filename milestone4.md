# Milestone 4

### Writeup
Previously in milestone 3, we further developed our add items page by implementing the UPC Lookup functionality, splitting add item into UPC Lookup and Manual input. In this milestone, we've add more fields into the UPC Lookup add items, so that you are able to enter in the item barcode, which will autopopulate the item name field, and then enter in item amounts and units and add those into the inventory. The UPC lookup and Manual Entry items display also includes an "item image" button where the user can upload an image of what they would want to display for their item. We've also added an "Add Quantity to existing items" button in add items, where you are able to select items that are currently in the user's inventory, and add amounts onto that, without having to create a duplicate item card in inventory. Lastly, each of these add item fields include an "item location" section, where in the event that the user has multiple locations, it would allow them to categorize which items go to which locations.

### UI Screenshots

![view inventory final](https://user-images.githubusercontent.com/46572829/58151112-9065d780-7c1d-11e9-883e-48787a125c01.png)

![add items final](https://user-images.githubusercontent.com/46572829/58151124-9b206c80-7c1d-11e9-9b81-1a7c3320bf68.png)

![Manual entry FInal](https://user-images.githubusercontent.com/46572829/58151135-a2477a80-7c1d-11e9-97f2-e72e10c49394.png)

![UPC Final](https://user-images.githubusercontent.com/46572829/58151143-a8d5f200-7c1d-11e9-848f-3fe747b8b2e5.png)

![Existing Item FInal](https://user-images.githubusercontent.com/46572829/58151156-af646980-7c1d-11e9-9bfd-259f4c9cf10f.png)

![checkout Final](https://user-images.githubusercontent.com/46572829/58151168-b8553b00-7c1d-11e9-9931-3a4c2ffcbde3.png)

### User Action 1
For this user action case, we are asking the user to look up an item's barcode through the upcLookup search and add the item into their current inventory. The item we are asking for is not currently in the database, and so adding this item will add another card in "View Inventory" with the item they just searched for.

- Go to upcitemdb.com, look up "iphone x" in product name, and copy the first upc barcode for iphone x case
- Paste the barcode into "item barcode", click search, and add in item location, item quantity, and units

### User Action 2
For this user action case, we are asking the user to checkout items, verifying that the database will update its current inventory depending on how much the user decides to checkout. 

- View and take note of what the current inventory is for food boxes. Navigate through the interface and checkout 10 boxes of food. Afterwards, view the current inventory and verify that food boxes has 10 less than its current stock
