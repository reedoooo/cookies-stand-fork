<template>
  <main class="contact-page">
    <h1>Contact Us!</h1>
<img class="logo" src="../assets/img/family.jpeg" alt="Salmon logo" style="width: 780px; height: 400px;">
    <div class="content">
      <div class="contact-info">
        <div class="about">
          <p>Please contact us at the below number or email to book for large gatherings or bulk orders. We would love to help you celebrate! Custom balloons and other minor decorations available with booking 3 weeks in advance.</p>
          <p>You can call us at <span class="contact-number">1-234-COO-KIES</span> or email us at <span class="contact-email">email@cookies.com</span></p>
        </div>

        <div class="contact-form">
          <div class="form-box">
            <div class="form-field">
              <label for="name">Name:</label>
              <input type="text" name="name" id="name">
            </div>
            <div class="form-field">
              <label for="email">Email:</label>
              <input type="email" name="email" id="email">
            </div>
            <div class="form-field">
              <label for="message">Message:</label>
              <textarea name="message" id="message" cols="40" rows="7"></textarea>
            </div>
            <div class="form-field">
              <button class="submit-button">Submit</button>
            </div>
          </div>
        </div>
      </div>

      <div class="addresses">
        <h4>Location Addresses</h4>
        <ul>
          <li>Seattle: 250 Store Ave, Seattle, WA 27369</li>
          <li>Tokyo: 4757 Rainbow Blvd, Tokyo, JP 98376</li>
          <li>Dubai: 444 Faith Dr, Dubai, IN 27377</li>
          <li>Paris: 777 Heaven St Paris, FR 12345</li>
          <li>Lima: 222 Hope Ave, Lima, PU 54321</li>
        </ul>
        <p class="store-hours">Please Note: Store Hours are currently the same for all locations: 6:00 AM to 8:00 PM</p>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'ContactPage',
}
</script>

<style scoped>
.contact-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

h1 {
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 20px;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.about {
  margin-bottom: 20px;
}

.parent-container {
  display: flex;
  justify-content: center;
  align-items: center;
  /* Additional styling for the parent container if needed */
}


.contact-form {
  margin-bottom: 20px;
}

.contact-form .form-box {
  border: 1px solid #ccc;
  padding: 20px;
  width: 300px;
  align-items: center;
}

.form-field {
  margin-bottom: 10px;
  display: flex;
  align-items: center;
}

.form-field label {
  display: inline-block;
  width: 60px;
  font-weight: bold;
}

.form-field input[type="text"],
.form-field input[type="email"] {
  width: 200px;
  padding: 5px;
}

.form-field textarea {
  width: 100%;
  padding: 5px;
  height: 100px;
  resize: vertical;
}

.form-field button {
  margin-left: 60px;
}

.submit-button {
  padding: 8px 15px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.submit-button:hover {
  background-color: #0056b3;
}

.submit-button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.addresses {
  margin-top: 20px;
  text-align: left;
}

.addresses h4 {
  margin-bottom: 10px;
}

.addresses ul {
  padding-left: 20px;
  margin: 0;
}

.store-hours {
  font-size: 14px;
}
</style>
