var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "root",
    database: "bamazon"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);

    connection.query("SELECT * from products", function(err, result) {

    if (err) throw err;

    console.log(" ");

    for (let i = 0; i < result.length; i++) {
        console.log("---------------------------------------");
        console.log("Item #: ", result[i].item_id);
        console.log("Product: ", result[i].product_name);
        console.log("Department: ", result[i].department_name);
        console.log("Price: $", result[i].price);
        console.log("In stock: ", result[i].stock_quantity);
        console.log("---------------------------------------\n");
    }

    // inquirer.prompt([
    //     {
    //       type: "input"
    //       , name: "itemNumber"
    //       , message: "Please enter the item number of the item you'd like to purchase:"
    //     }
    //     , {
    //       type: "input"
    //       , name: "itemAmount"
    //       , message: "How many would you like to purchase?"
    //     }
  
    // ]).then(function(user){
    //     connection.query("SELECT * from products WHERE item_id = " + "'" + itemNumber + "'", function(err, result) {});
    // });
});

connection.end();
});