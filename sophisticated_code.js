/* sophisticated_code.js */

// This code is a financial portfolio management system.
// It tracks the performance of various investments and provides analysis.

// Define Investment class
class Investment {
  constructor(name, symbol, quantity, purchasePrice) {
    this.name = name;
    this.symbol = symbol;
    this.quantity = quantity;
    this.purchasePrice = purchasePrice;
  }

  calculateValue() {
    return this.quantity * this.purchasePrice;
  }
}

// Define Portfolio class
class Portfolio {
  constructor(name) {
    this.name = name;
    this.investments = [];
  }

  addInvestment(investment) {
    this.investments.push(investment);
  }

  calculateTotalValue() {
    let totalValue = 0;
    for (let i = 0; i < this.investments.length; i++) {
      totalValue += this.investments[i].calculateValue();
    }
    return totalValue;
  }

  getTopPerformingInvestment() {
    let maxPerformance = -Infinity;
    let topPerformingInvestment = null;
    for (let i = 0; i < this.investments.length; i++) {
      const performance = this.calculatePerformance(this.investments[i]);
      if (performance > maxPerformance) {
        maxPerformance = performance;
        topPerformingInvestment = this.investments[i];
      }
    }
    return topPerformingInvestment;
  }

  calculatePerformance(investment) {
    const currentValue = investment.calculateValue();
    const purchaseValue = investment.quantity * investment.purchasePrice;
    return (currentValue - purchaseValue) / purchaseValue;
  }
}

// Create an instance of Portfolio
const myPortfolio = new Portfolio("My Portfolio");

// Add investments to the portfolio
myPortfolio.addInvestment(new Investment("Apple Inc.", "AAPL", 100, 150));
myPortfolio.addInvestment(new Investment("Microsoft Corporation", "MSFT", 50, 200));
myPortfolio.addInvestment(new Investment("Amazon.com, Inc.", "AMZN", 20, 250));

// Perform calculations and retrieve information
const totalValue = myPortfolio.calculateTotalValue();
const topPerformingInvestment = myPortfolio.getTopPerformingInvestment();

// Print results
console.log("Portfolio: " + myPortfolio.name);
console.log("Total Value: $" + totalValue);
console.log("Top Performing Investment: " + topPerformingInvestment.name);