import { renderOrderSummary } from "./checkout/orederSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { renderCheckoutHeader } from './checkout/checkoutHeader.js';

renderCheckoutHeader();
renderOrderSummary();
renderPaymentSummary();