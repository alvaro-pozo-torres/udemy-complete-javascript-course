//    BUDGET CONTROLLER
var budgetController = (function() {
	
	var Expense = function(id, description, value) {
		this.id = id;
		this.description = description;
		this.value = value;
	};
	
	var Income = function(id, description, value) {
		this.id = id;
		this.description = description;
		this.value = value;
	};
	
	var calculateTotal = function(type) {
		var sum = 0;
		
		data.allItems[type].forEach(function (cur) {
			sum += cur.value;			
		});
		data.totals[type] = sum;
	};
	
	var data = {
		allItems: {
			exp: [],
			inc: []
		},
		totals: {
			exp: 0,
			inc: 0
		},
		budget: 0,
		percentage: -1
	}
	
	return {
		addItem: function(type, desc, val) {
			var newItem, ID;
			console.log(data.allItems['exp']);
			
			// create new ID;
			
			if (data.allItems[type].length > 0) {
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            } else {
                ID = 0;
            }
						
			// create new item based on the 'inc' or exp' value
			if (type === 'exp') {
				newItem = new Expense(ID, desc, val)
			} else if (type === 'inc') {
				newItem = new Income(ID, desc, val)
			}
			
			//push new item into the appropiate structure
			data.allItems[type].push(newItem);
			
			// return the new elements
			return newItem;
		},
		calculateBudget: function () {
			//calculate total income and total expenses
			calculateTotal('exp');
			calculateTotal('inc');
			
			//calculate budget: incomen - expenses
			data.budget = data.totals.inc - data.totals.exp;
			
			//calculate % of expend budget
			if (data.totals.inc > 0) {
				data.percentage = Math.round(100*(data.totals.exp / data.totals.inc));
			} else {
				data.percentage = -1;
			};
			
			
		},
		getBudget: function() {
			return {
				budget: data.budget,
				totalIncome: data.totals.inc,
				totalExpenses: data.totals.exp,
				percentage: data.percentage
			};
		},
		testing: function() {
            console.log(data);
        }
	}
	
}) ();


//    UI CONTROLLER
var UIController = (function() {
    
    var DOMstrings = {
		inputType: '.add__type',
		inputDescription: '.add__description',
		inputValue: '.add__value',
		inputBtn: '.add__btn',
		incomeContainer: '.income__list',
		expensesContainer: '.expenses__list',
		budgetLabel: '.budget__value',
		incomeLabel: '.budget__income--value',
		expensesLabel: '.budget__expenses--value',
		percentageLabel: '.budget__expenses--percentage',
		container: '.container'
		
    };
    
    return {
        getInput: function() {
            return {
                type: document.querySelector(DOMstrings.inputType).value,  // 'inc' for income, 'exp' for expense
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: parseFloat(document.querySelector(DOMstrings.inputValue).value)
            }
        },
    
		addListItem: function(obj, type) {
			//create HTML string with placeholder tgas
			var html, newHtml, element;
			
			if (type === 'inc') {
				element = DOMstrings.incomeContainer;
				html = '<div class="item clearfix" id="inc-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
			} else if (type === 'exp') {
				element = DOMstrings.expensesContainer;
				html = '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
			}
			
			// replace placeholder with data
			newHtml = html.replace('%id%', obj.id);
			newHtml = newHtml.replace('%description%', obj.description);
			newHtml = newHtml.replace('%value%', obj.value);
			
			// insert html into DOM
			document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
			
		},
		
		clearFields: function() {
			
			var fields, fieldsArray;
			fields = document.querySelectorAll(DOMstrings.inputDescription + ', ' + DOMstrings.inputValue);
			
			fieldsArray = Array.prototype.slice.call(fields);
			
			fieldsArray.forEach(function(current, index, array) {
				current.value = "";
				
			});
			
			fieldsArray[0].focus();
			
		},		
		
        getDOMstrings: function() {
            return DOMstrings;
        },
		
		displayBudget: function(obj) {
			document.querySelector(DOMstrings.budgetLabel).textContent = obj.budget;
			document.querySelector(DOMstrings.incomeLabel).textContent = obj.totalIncome;
			document.querySelector(DOMstrings.expensesLabel).textContent = obj.totalExpenses;
			if (obj.percentage > 0) {
				document.querySelector(DOMstrings.percentageLabel).textContent = obj.percentage + '%';
			} else {
				document.querySelector(DOMstrings.percentageLabel).textContent = '---';
			}
			
		}
    }
    
})();

//    GLOBAL APP CONTROLLER
var controller = ( function(budgetCrt, UICtr) {
    
    var setupEventListeners = function() {
        var DOM = UICtr.getDOMstrings();
        
        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);
        
        document.addEventListener('keypress', function (event) {
            if (event.keyCode === 13 || event.which ===13) {
                ctrlAddItem();
            }
        });
		
		document.querySelector(DOM.container).addEventListener('click', crtlDeleteItem);
		
    };
    
    var updateBudget = function() {
        //1. calculate budget
		budgetCrt.calculateBudget();
		
		//2. return the budget
		var budget = budgetCrt.getBudget();
        
        //3. display budget on UI	
		UICtr.displayBudget(budget);
	};
	
	var ctrlAddItem = function() {
		
		var input, newItem;
        //1. get the data from the fields
        input = UICtr.getInput();
		
		// all this should happen only if there is data on to be inserted
		if (input.description !== "" && !isNaN(input.value) && input.value > 0) {
			//2. add item into the budget controller
			newItem = budgetCrt.addItem(input.type, input.description, input.value);

			//3. add the new item to the UI
			UICtr.addListItem(newItem, input.type);

			//4. clear the fields
			UICtr.clearFields();

			// 5. calculate and update budget
			updateBudget();
			
		} else {
			alert ("Datos del registro incorrectos");
		};
        

    };
    
	var crtlDeleteItem = function (event) {
		
		var itemID, splitID, type, ID;
		
		itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;
		
		if (itemID) {
			//inc-1, exp-1
			splitID = itemID.split('-');
			type = splitID[0];
			ID = splitID[1];
			
			// 1. delete item from data structure
			
			// 2. delete item from UI
			
			// 3. update and show new values for budget
		}
	};
	
    return {						// on these functions that work as modules, whatever is on the RETURN section, are the public elements
        init: function() {
            console.log('app started');
			UICtr.displayBudget({
				budget: 0,
				totalInc: 0,
				totalExp: 0,
				percentage: -1
			});
            setupEventListeners();
        }
    };
 
})(budgetController, UIController);

controller.init();

