$(document).ready(function() {

    var input_box = $('.num-input-box');

    input_box.focusin(function() {
      if (!$(this).is('[readonly]')) {
        $(this).addClass('border-glow');
      }
    });

    input_box.focusout(function() {
      $(this).removeClass('border-glow');
    });


    $('#btn-reset').on('click', function(event) {
      event.preventDefault();
      input_box.val("");
      input_box.attr('readonly', false);
    });

    input_box.on('input', function(e) {
      var current_val = $(this).val();
      if (/^\d+$/.test(current_val)) {
        if (current_val.length == this.maxlength) {
          $(this).val(current_val.slice(0, 1));
        }
        $(this).nextAll('.num-input-box:enabled:first').focus();
        $(this).attr('readonly', true);
      }
      else {
        $(this).val("");
      }
    });
});
