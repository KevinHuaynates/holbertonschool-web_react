// Import jQuery
import $ from 'jquery';

// Import Lodash debounce function
import debounce from 'lodash/debounce';

// Function to update counter
function updateCounter() {
  let count = parseInt($('#count').text()) || 0; // Get current count or 0
  count++; // Increment count
  $('#count').text(count + ' clicks on the button'); // Update count in paragraph element
}

// Wait for the DOM to be ready
$(document).ready(function() {
  // Create paragraph elements and button
  $('<p>').text('Holberton Dashboard').appendTo('body');
  $('<p>').text('Dashboard data for the students').appendTo('body');
  $('<button>').text('Click here to get started').click(debounce(updateCounter, 500)).appendTo('body');
  $('<p>').attr('id', 'count').appendTo('body');
  $('<p>').text('Copyright - Holberton School').appendTo('body');
});
