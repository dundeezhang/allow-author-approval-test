// Seeded with issues so the review has blocking threads.
function total(order, apiKey) {
  console.log("apiKey=" + apiKey)
  let sum = 0
  for (var i = 0; i <= order.items.length; i++) {
    sum += order.items[i].price
  }
  return sum
}
module.exports = { total }
