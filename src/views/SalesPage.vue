<template>
  <div>
<h3 class="sales-title">Pat's Sales Data</h3>
<img class="logo" src="../assets/img/fish.jpg" alt="Salmon logo" style="width: 860px; height: 400px;">
   <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/sales">Sales</router-link>
        <router-link to="/contact">Contact</router-link>
      </nav>

    <table class="sales-table">
      <thead>
        <tr>
          <th></th>
          <th v-for="hour in hoursOfOperation" :key="hour">{{ hour }}</th>
          <th>Daily Total</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="location in storeLocation" :key="location.name">
          <th>{{ location.name }}</th>
          <td v-for="cookiesPurchased in location.cookiesPurchased" :key="cookiesPurchased">{{ cookiesPurchased }}</td>
          <td>{{ location.dailyTotal }}</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td>Hourly Totals</td>
          <td v-for="hourlyTotal in hourlyTotals" :key="hourlyTotal">{{ hourlyTotal }}</td>
          <td>{{ grandTotal }}</td>
        </tr>
      </tfoot>
    </table>
    <form @submit="handleSubmit">
      <fieldset>
        <legend>New Store Generator</legend>
        <label for="storeLoc">Store Location:</label>
        <input type="text" id="storeLoc" name="storeLoc">

        <label for="minCap">Minimum Capacity:</label>
        <input type="number" id="minCap" name="minCap">

        <label for="maxCap">Maximum Capacity:</label>
        <input type="number" id="maxCap" name="maxCap">

        <label for="custAvgPurchase">Average Cookies Purchased per Customer:</label>
        <input type="number" id="custAvgPurchase" name="custAvgPurchase">
      </fieldset>
      <button type="submit">Add Store Location</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hoursOfOperation: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
      storeLocation: []
    };
  },
  computed: {
    hourlyTotals() {
      const totals = [];
      for (let i = 0; i < this.hoursOfOperation.length; i++) {
        let hourlyTotal = 0;
        for (let j = 0; j < this.storeLocation.length; j++) {
          hourlyTotal += this.storeLocation[j].cookiesPurchased[i];
        }
        totals.push(hourlyTotal);
      }
      return totals;
    },
    grandTotal() {
      let total = 0;
      for (let j = 0; j < this.storeLocation.length; j++) {
        total += this.storeLocation[j].dailyTotal;
      }
      return total;
    }
  },
  methods: {
    handleSubmit(event) {
      event.preventDefault();
      const storeLoc = event.target.storeLoc.value;
      const minCap = +event.target.minCap.value;
      const maxCap = +event.target.maxCap.value;
      const custAvgPurchase = +event.target.custAvgPurchase.value;

      const newStore = {
        name: storeLoc,
        minCust: minCap,
        maxCust: maxCap,
        avgCookiesPurchased: custAvgPurchase,
        cookiesPurchased: [],
        dailyTotal: 0
      };

      this.numOfCookies(newStore);
      this.storeLocation.push(newStore);

      event.target.reset();
    },
    numCust(store) {
      return Math.floor(Math.random() * (store.maxCust - store.minCust + 1) + store.minCust);
    },
    numOfCookies(store) {
      for (let i = 0; i < this.hoursOfOperation.length; i++) {
        const cookieCount = Math.floor(this.numCust(store) * store.avgCookiesPurchased);
        store.cookiesPurchased.push(cookieCount);
        store.dailyTotal += cookieCount;
      }
    }
  },
  created() {
    const seattle = {
      name: 'Seattle',
      minCust: 23,
      maxCust: 65,
      avgCookiesPurchased: 6.3,
      cookiesPurchased: [],
      dailyTotal: 0
    };

    const tokyo = {
      name: 'Tokyo',
      minCust: 3,
      maxCust: 24,
      avgCookiesPurchased: 1.2,
      cookiesPurchased: [],
      dailyTotal: 0
    };

    const dubai = {
      name: 'Dubai',
      minCust: 11,
      maxCust: 38,
      avgCookiesPurchased: 3.7,
      cookiesPurchased: [],
      dailyTotal: 0
    };

    const paris = {
      name: 'Paris',
      minCust: 20,
      maxCust: 38,
      avgCookiesPurchased: 2.3,
      cookiesPurchased: [],
      dailyTotal: 0
    };

    const lima = {
      name: 'Lima',
      minCust: 2,
      maxCust: 16,
      avgCookiesPurchased: 4.6,
      cookiesPurchased: [],
      dailyTotal: 0
    };

    this.numOfCookies(seattle);
    this.numOfCookies(tokyo);
    this.numOfCookies(dubai);
    this.numOfCookies(paris);
    this.numOfCookies(lima);

    this.storeLocation.push(seattle, tokyo, dubai, paris, lima);
  }
};
</script>

<style scoped>
.sales-title {
  text-align: center;
  margin-bottom: 20px;
  font-size: 55px;
  color: #fff;
  font-weight: bold;
}

.sales-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  background-color: rgba(0, 0, 0, 0.2);
}

.sales-table thead {
  background-color: rgba(0, 0, 0, 0.2);
}

.sales-table th,
.sales-table td {
  padding: 10px;
  border: 1px solid #ccc;
  text-align: left;
  background-color: rgba(0, 0, 0, 0.2);
  color: #fff;

}

.sales-table th {
  background-color: rgba(0, 0, 0, 0.2);
}

.sales-table tr:nth-child(even) {
  background-color: rgba(0, 0, 0, 0.1);
}

.sales-table tfoot {
  background-color: rgba(0, 0, 0, 0.2);
}

.sales-table tfoot td {
  font-weight: bold;
}

.sales-table tr:hover {
  background-color: rgba(0, 0, 0, 0.3);
}

.sales-table tr:before,
.sales-table tr:after {
  content: "";
  display: table;
}

.sales-table tr:after {
  clear: both;
}

.sales-table th,
.sales-table td {
  border-bottom: 1px solid #ccc;
  border-right: 1px solid #ccc;
}

.sales-table th:last-child,
.sales-table td:last-child {
  border-right: none;
}

.sales-table tbody tr:last-child td {
  border-bottom: none;
}

.sales-table tbody tr:last-child th {
  border-bottom: 1px solid #ccc;
}

.sales-table tbody tr:last-child th:last-child {
  border-bottom: none;
}

nav {
  text-align: center; /* Align the links to the right */
  margin-right: -1rem; /* Use margin-right instead of margin-left */
  font-size: 1rem;
  padding: 1rem 0;
  margin-top: 1rem;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
  margin-left: 0.5rem; /* Add margin-left for spacing */
}

nav a:first-of-type {
  border: 0;
}


</style>
