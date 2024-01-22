function calculateTax (income: number, taxYear: number = 2022): number{
    if(taxYear < 50_000){
        return income * 1.2
    } else{
        return income * 1.3
    }
}

calculateTax(10000, 2022)