"use strict";
function calculateTax(income, taxYear) {
    if (taxYear < 50000) {
        return income * 1.2;
    }
    else {
        return income * 1.3;
    }
}
calculateTax(10000, 2022);
//# sourceMappingURL=index.js.map