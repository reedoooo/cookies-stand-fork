<template>
  <main class="py-4">
    <h3 class="text-center mb-4">Welcome to Salmon Cookies' Internal Sales Data!</h3>

    <!-- Include the AddStore component here -->
    <AddStore @addStore="addStore"/>
    
    <!-- Now add the sales data table -->
    <table class="table">
      <thead>
        <tr>
          <th>Location</th>
          <th>Min Customers</th>
          <th>Max Customers</th>
          <th>Avg Cookies</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(store, index) in stores" :key="index">
          <td>{{ store.location }}</td>
          <td>{{ store.min }}</td>
          <td>{{ store.max }}</td>
          <td>{{ store.avgCookies }}</td>
        </tr>
      </tbody>
    </table>
  </main>
</template>


<script>
import StoreLocation from '../models/store-location.js';
import AddStore from '../components/AddStore.vue';

export default {
  name: 'SalesPage',
  components: {
    AddStore,
  },
  data() {
    return {
      stores: [
        new StoreLocation('Seattle', 23, 65, 6.3),
        new StoreLocation('Tokyo', 3, 24, 1.2),
        new StoreLocation('Dubai', 11, 38, 3.7)
      ],
    };
  },
  methods: {
    addStore(storeData) {
      const newStore = new StoreLocation(storeData.location, storeData.min, storeData.max, storeData.avgCookies);
      this.stores.push(newStore);
    },
  },
}
</script>


<style scoped>
main {
  padding: 20px;
}

h3 {
  text-align: center;
  margin-bottom: 20px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

table thead {
  background-color: #f8f9fa;
}

table th, table td {
  padding: 10px;
  border: 1px solid #ccc;
  text-align: left;
}

table th {
  font-weight: bold;
}

table tr:nth-child(even) {
  background-color: #f2f2f2;
}
</style>


