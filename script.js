const userOrder = prompt(
    "PLease enter your order, each flavor separeted by a comma"
)
console.log(userOrder);

const orderArray = userOrder.split(",")
console.log(orderArray);

const orderList = {}

for (let i = 0; i<orderArray.length; i++) {
    if (orderList[orderArray[i]]) {
        orderList[orderArray[i]] += 1;
    } else {
        orderList[orderArray[i]] = 1;
    }
}
console.log(orderList);