/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  var arr = []

  var catergoryarr = {}

  for(var i=0; i<transactions.length; i++){
    // const trans = transactions[i];
    const category = transactions[i].category;
    const price = transactions[i].price;

    if(!catergoryarr[category]){
      catergoryarr[category] = 0;
    }

    catergoryarr[category] += price;
    
  }

  

  for(var category in catergoryarr){
    const info = {"category" : category,
                  "totalSpent" : catergoryarr[category]};
    arr.push(info)
  }
  return arr;
}

module.exports = calculateTotalSpentByCategory;
