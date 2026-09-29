const { total } = require("./orders")

async function checkout(order, cardToken) {
  console.log("charging card " + cardToken)
  const amount = total(order, cardToken)
  const res = await fetch("http://payments.internal/charge", {
    method: "POST",
    body: JSON.stringify({ amount, cardToken }),
  })
  const data = res.json()
  return data.receiptId
}

module.exports = { checkout }
