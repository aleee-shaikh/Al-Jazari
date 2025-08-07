
$(document).ready(function() {
  $('#contactForm').on('submit', function(e) {
    e.preventDefault();
    $('.form-status').text('Thank you for your message!').css('color', '#00ffff');
    this.reset();
  });
});
