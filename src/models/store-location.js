
// This is the constructor function for the StoreLocation object.
// It is the same as the class in the models folder.

export default class StoreLocation {
  constructor(location, min, max, avgCookies) {
    this.location = location;
    this.min = min;
    this.max = max;
    this.avgCookies = avgCookies;
    this.totalCookies = 0;
    this.customersPerHour = [];
    this.cookiesPerHour = [];
  }

  avgCustomers() {
    for (let i = 0; i < 14; i++) {
      this.customersPerHour.push(Math.floor(Math.random() * (this.max - this.min + 1) + this.min));
    }
  }

  avgCookiesPerHour() {
    this.avgCustomers();
    for (let i = 0; i < 14; i++) {
      const cookieCalc = Math.ceil(this.customersPerHour[i] * this.avgCookies);
      this.cookiesPerHour.push(cookieCalc);
      this.totalCookies += cookieCalc;
    }
  }

  dailyLocationTotal() {
    return this.cookiesPerHour.reduce((acc, val) => acc + val, 0);
  }
}
