console.log('this is totes working!');

$(document).ready(function() {
  $('#entireBody').hide();
  $('button').on('click', function() {
    $('#entireBody').toggle();

  });
});
