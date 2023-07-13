<template>
  <!-- <form @submit.prevent="handleSubmit"> -->
		<form @submit.prevent="handleSubmit" class="p-4 bg-light shadow-sm rounded mb-4">

    <label>
      Location:
      <input v-model="location" type="text" required>
    </label>
    <label>
      Min Customers:
      <input v-model="min" type="number" required>
    </label>
    <label>
      Max Customers:
      <input v-model="max" type="number" required>
    </label>
    <label>
      Avg Cookies:
      <input v-model="avgCookies" type="number" step="0.1" required>
    </label>
    <button type="submit">Add Store</button>
  </form>
</template>

<script>
export default {
  name: 'AddStore',
  data() {
    return {
      location: '',
      min: 0,
      max: 0,
      avgCookies: 0,
    };
  },
  methods: {
    handleSubmit() {
      const storeData = {
        location: this.location,
        min: this.min,
        max: this.max,
        avgCookies: this.avgCookies,
      };
      this.$emit('addStore', storeData);
      this.location = '';
      this.min = 0;
      this.max = 0;
      this.avgCookies = 0;
    },
  },
}
</script>


<style scoped>
.store-form {
  background-color: #f8f9fa;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
  margin-bottom: 20px;
}
</style>
