# bamazon
Unit 12 Homework - MySQL

## Background
Bamazon is a node app that simulates a simple shopping platform. It uses MySQL and node.js (with the 'mysql' and 'inquirer' packages installed) to present a fictional store inventory and allow the user to "make a purchase" from the store. The MySQL database is updated based on the user's selection, and then the user's "purchase" is confirmed.

## Instructions
Run the node app (node bamazonCustomer). The store's current inventory is displayed and (using the inquirer package) the user is asked which item and how many of that item they would like to purchase. If the user tries to purchase more than the stock amount, they are informed that there is insufficient stock and redirected to the purchase inquiry so they can modify their request. If the user makes a valid purchase, the app then displays returns a console.log displaying how many of which item and the total price. The database is upated with the new stock total for that item.

## demo
Video showing functionality of app:
https://drive.google.com/file/d/1bw7EWBYivdsJ7vrokV2V7q82I6w6FT6H/view

## Credits
This app was written by [Sergio Di Martino](https://webdevserg.io/) as part of a homework assignment for UC Berkeley Extension Coding Bootcamp. Any questions, comments, or suggestions regarding this app should be directed to [Sergio](mailto:sergio@webdevserg.io).