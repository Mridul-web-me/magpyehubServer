let PayStack = require('paystack-node')
let APIKEY = process.env.PAYSTACK_SECRET

const paystack = new PayStack(APIKEY)

const receiveTransaction = new PayStack.fees();
const charge = receiveTransaction.calculatorFor(250000)