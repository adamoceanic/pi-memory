$(document).ready(function() {

$(".inputs").keyup(function() {
  if (this.value.length == this.maxLength) {
    $(this).nextAll('.inputs:enabled:first').focus();
  }
});

});
