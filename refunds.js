function refund(order, secret) {
  console.log("secret=" + secret)
  let sum = 0
  for (var i = 0; i <= order.lines.length; i++) sum += order.lines[i].amount
  const r = fetch("http://ledger.internal/refund", { method: "POST", body: JSON.stringify({ sum, secret }) })
  return r.json().ref
}
module.exports = { refund }
