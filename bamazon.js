var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "8236980Hey",
    database: "bamazonDB"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("successfully connected as id # " + connection.threadId + "\n");
    displayTable();
});

function displayTable(){
    connection.query('SELECT * FROM products', function (err, res) {
        console.table(res);
        shopping(res);
    });
}

var shopping = function (res) {
    inquirer.prompt([{
        type: "input",
        name: "choice",
        message: "Which item would you like to buy? Select 'Q' to quit."
    }]).then(function (answer) {
        var correct = false;
        if (answer.choice.toUpperCase() == "Q") {
            process.exit();
        }
        for (var i = 0; i < res.length; i++) {
            if (res[i].item == answer.choice) {
                correct = true;
                var product = answer.choice;
                var id = i;

            inquirer.prompt({
                type: "input",
                name: "quantity",
                message: "How many would you like to buy?",
                validate: function (value) {
                    if (isNaN(value) == false) {
                        return true;
                    } else {
                        return false;
                    }
                } 
                }).then(function (answer) {
                    if ((res[id].quantity - answer.quantity) > 0) {
                        connection.query("UPDATE products SET quantity='" + (res[id].quantity - answer.quantity) + "'WHERE item='" + product + "'", function (err, res2) {
                            console.log("Product bought!");

                            displayTable();

                        })
                    } else {
                        console.log("We don't have enough -- Sorry about that!");
                        shopping(res);
                    }
                }) 
            } 
        } 
        if (i == res.length && correct == false) {
            console.log("We do not offer this product at this time!");
            shopping(res);
        } 
    })
}



