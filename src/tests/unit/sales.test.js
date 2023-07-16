import { shallowMount } from '@vue/test-utils';
import SalesPage from '../views/SalesPage.vue';

test('SalesPage renders the component', () => {
  const wrapper = shallowMount(SalesPage);
  expect(wrapper.exists()).toBe(true);
});

test('SalesPage displays the sales title correctly', () => {
  const wrapper = shallowMount(SalesPage);
  const salesTitle = wrapper.find('.sales-title');
  expect(salesTitle.text()).toBe("Pat's Sales Data");
});

test('SalesPage renders the navigation links correctly', () => {
  const wrapper = shallowMount(SalesPage);
  const links = wrapper.findAll('nav a');
  expect(links.length).toBe(3);
  expect(links[0].text()).toBe('Home');
  expect(links[0].attributes('to')).toBe('/');
  expect(links[1].text()).toBe('Sales');
  expect(links[1].attributes('to')).toBe('/sales');
  expect(links[2].text()).toBe('Contact');
  expect(links[2].attributes('to')).toBe('/contact');
});

test('SalesPage renders the table rows correctly', () => {
  const wrapper = shallowMount(SalesPage);
  const rows = wrapper.findAll('tbody tr');
  expect(rows.length).toBe(wrapper.vm.storeLocation.length);

  // Test the data within each row
  const firstRow = rows[0];
  expect(firstRow.find('th').text()).toBe(wrapper.vm.storeLocation[0].name);
  expect(firstRow.findAll('td').length).toBe(wrapper.vm.hoursOfOperation.length + 1); // +1 for daily total cell
});

test('SalesPage calculates the hourly totals correctly', () => {
  const wrapper = shallowMount(SalesPage);
  const hourlyTotals = wrapper.vm.hourlyTotals;
  expect(hourlyTotals.length).toBe(wrapper.vm.hoursOfOperation.length);

  // Perform additional assertions based on your expected results
});

test('SalesPage calculates the grand total correctly', () => {
  const wrapper = shallowMount(SalesPage);
  const grandTotal = wrapper.vm.grandTotal;
  // Perform assertions based on your expected result
});

test('SalesPage handles form submission correctly', () => {
  const wrapper = shallowMount(SalesPage);
  // Simulate form submission
  const form = wrapper.find('form');
  form.trigger('submit');

  // Perform assertions based on your expected behavior
});

// Add more tests for other methods, computed properties, and interactions as needed
