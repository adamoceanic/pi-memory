$(document).ready(function() {

    var input_box = $('.num-input-box');

    input_box.focusin(function() {
      $(this).parent().addClass('border-glow');
    });

    input_box.focusout(function() {
      $(this).parent().removeClass('border-glow');
    });

    input_box.change(function(event) {
      /* Act on the event */
    });

    input_box.on('input', function(e) {

      var current_val = $(this).val();

      if (/^\d+$/.test(current_val)) {
        if (current_val.length > 1) {
          input_box.val(current_val.slice(0, 1));
        }
      } else {
        $(this).val("");
      }

    });

});
