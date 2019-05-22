# Milestone 4

### Writeup
Previously in milestone 3, we further developed our add items page by implementing the UPC Lookup functionality, splitting add item into UPC Lookup and Manual input 

### UI Screenshots

### User Action 1
For this user action case, we are asking the user to look up an item's barcode through the upcLookup search and add the item into their current inventory. The item we are asking for is not currently in the database, and so adding this item will add another card in "View Inventory" with the item they just searched for.

- Go to upcitemdb.com, look up "iphone x" in product name, and copy the first upc barcode for iphone x case
- Paste the barcode for "x" item into Lookup UPC

### User Action 2
For this user action case, we are asking the user to checkout items, verifying that the database will update its current inventory depending on how much the user decides to checkout. 

- View and take note of what the current inventory is for food boxes. Navigate through the interface and checkout 10 boxes of food. Afterwards, view the current inventory and verify that food boxes has 10 less than its current stock

### User Action 3 (spare)
For this user action case, we are asking hte user to add an item via manual input, verifying that the user is capable of entering the correct information and is able to see the changes in view inventory.

- Via add item's manual entry, add 20 pallets of bananas (barcode: 111111). After adding the items, look in view inventory and verify that a new item card for 20 pallets of bananas has been added.
