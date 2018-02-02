var app = angular.module("createPizza", []);

app.controller('mainController', function($scope) {
    $scope.getTop = "";
    $scope.cost = "";
    $scope.isAdding = false;
    $scope.isRemoving = false;
    $scope.isDeal = false;
    $scope.tCost = "";
    $scope.eraseAt = "";
    $scope.total = 0;
    $scope.sizes = [];
    $scope.price = [];
    $scope.toppings = [];
    $scope.toppingCost = [];
    $scope.fullTop = [];
    $scope.addSize = function () {
        if ($scope.sizes.length != 0) {
            $scope.sizes.pop();
            $scope.price.pop();
        }
        $scope.sizes.push({
            size: $scope.pizzaSize
        });

        if ($scope.pizzaSize == "Small") {
            $scope.cost = 5;
            console.log($scope.cost);
        }
        else if ($scope.pizzaSize == "Medium") {
            $scope.cost = 10;
            console.log($scope.cost);
        }
        else if ($scope.pizzaSize == "Large") {
            $scope.cost = 15;
            console.log($scope.cost);
        }
        else if ($scope.pizzaSize == "X-Large") {
            $scope.cost = 20;
            console.log($scope.cost);
        }

        $scope.price.push({
            cost: $scope.cost
        });

        $scope.total = getTotalPrice();
    };

    function getTotalPrice() {
        var getPrice = 0;
        for (var i = 0; i < $scope.price.length; i++) {
            getPrice += $scope.price[i].cost;
        }
        for (var x = 0; x < $scope.toppingCost.length; x++) {
            getPrice += $scope.toppingCost[x].cost;
        }
        if ($scope.isDeal) {
            getPrice-=1;
        }
        return getPrice;
    }

    $scope.pizza = {
        availToppings: [
            {name: "Pepperoni", images: ["images/pizza-images/pepperoniLeft.png", "images/pizza-images/pepperoniRight.png"], id: "Pepperoni"},
            {name: "Sausage", images: ["images/pizza-images/sausageLeft.png", "images/pizza-images/sausageRight.png"], id: "Sausage"},
            {name: "Bacon", images: ["images/pizza-images/baconLeft.png", "images/pizza-images/baconRight.png"], id: "Bacon"},
            {name: "Ham", images: ["images/pizza-images/hamLeft.png", "images/pizza-images/hamRight.png"], id: "Ham"},
            {name: "Grilled_Chicken", images: ["images/pizza-images/chickenLeft.png", "images/pizza-images/chickenRight.png"], id: "Grilled_Chicken"},
            {name: "Salami", images: ["images/pizza-images/salamiLeft.png", "images/pizza-images/salamiRight.png"], id: "Salami"},
            {name: "Beef", images: ["images/pizza-images/beefLeft.png", "images/pizza-images/beefRight.png"], id: "Beef"},
            {name: "Jalapenos", images: ["images/pizza-images/jalapenoLeft.png", "images/pizza-images/jalapenoRight.png"], id: "Jalapeno"},
            {name: "Pineapple", images: ["images/pizza-images/pineappleLeft.png", "images/pizza-images/pineappleRight.png"], id: "Pineapple"},
            {name: "Mushrooms", images: ["images/pizza-images/mushroomLeft.png", "images/pizza-images/mushroomRight.png"], id: "Mushroom"}
        ]
    }

    $scope.addPremade = function() {
        if ($scope.premadePizza == "Pep") {
            $scope.checkForTopping($scope.pizza.availToppings[0]);
        }
        else if ($scope.premadePizza == "Hawaii") {
            $scope.checkForTopping($scope.pizza.availToppings[0]);
            $scope.checkForTopping($scope.pizza.availToppings[8]);
        }
        else if ($scope.premadePizza == "Meat") {
            $scope.checkForTopping($scope.pizza.availToppings[0]);
            $scope.checkForTopping($scope.pizza.availToppings[1]);
            $scope.checkForTopping($scope.pizza.availToppings[5]);
            $scope.checkForTopping($scope.pizza.availToppings[6]);
        }
        else if ($scope.premadePizza == "PeppAndSaus") {
            $scope.checkForTopping($scope.pizza.availToppings[0]);
            $scope.checkForTopping($scope.pizza.availToppings[1]);
        }
        else if ($scope.premadePizza == "P.P.J") {
            $scope.checkForTopping($scope.pizza.availToppings[0]);
            $scope.checkForTopping($scope.pizza.availToppings[7]);
            $scope.checkForTopping($scope.pizza.availToppings[8]);
        }
    } 

    $scope.checkForTopping = function(evt) {
        var toppingClass = evt.id; 
        var pizza = document.getElementById('pizza-image');
        var top = document.getElementsByClassName(evt.id);
        for(var index = 0; index < top.length; index++) {
            if ((top[index].style.display == "") || (top[index].style.display == "none")) {
                top[index].style.display = "block";  
                $scope.isAdding = true;
                $scope.isRemoving = false;
            }
            else if (top[index].style.display == "block") {
                top[index].style.display = "none";
                $scope.getTop = top[index-1];
                console.log($scope.getTop);
                $scope.isAdding = false;
                $scope.isRemoving = true;
                console.log(evt.id);
                for (var i = 0; i < $scope.toppings.length; i++) {
                    if ($scope.toppings[i].topping == evt.id) {
                        $scope.eraseAt = i;
                    }
                }
            }
        }

        if ($scope.isRemoving) {
            $scope.toppings.splice($scope.eraseAt, 1);
            $scope.toppingCost.splice($scope.eraseAt, 1);
            if ($scope.toppingCost.length > 1 || $scope.toppingCost.length == 1) {
                $scope.toppingCost[0] = {
                    cost: 0
                } 
            }
        }

        if ($scope.isAdding) {
            $scope.toppings.push({
                topping: evt.name
            });
            if ($scope.toppings.length == 1) {
                $scope.tCost = 0;
            }
            else {
                $scope.tCost = 1;
            }

            $scope.toppingCost.push({
                cost: $scope.tCost
            });   

            if ($scope.toppings.length >= 5) {
                $scope.isDeal = true;
                document.getElementsByClassName('label')[0].style.display = 'block';
            }
        }
        else {
            if ($scope.toppings.length < 5){
                $scope.isDeal = false;
                document.getElementsByClassName('label')[0].style.display = 'none';        
            }
        }

        $scope.total = getTotalPrice();
    
        $scope.fullTop = $scope.toppings.map(function(value, index) {
            return {
                topping: value,
                cost: $scope.toppingCost[index]
            }
        });
    }
});

var modal = document.getElementById('orderModal');

var btn = document.getElementById("add");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}