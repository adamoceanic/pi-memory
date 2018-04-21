$(document).ready(function() {

    var pi_digits = [1,4,1,5,9,2,6,5,3,5,8,9,7,9,3,2,3,8,4,6,2,6,4,3,3,8,3,2,7,
                    9,5,0,2,8,8,4,1,9,7,1,6,9,3,9,9,3,7,5,1,0,5,8,2,0,9,7,4,9,4,
                    4,5,9,2,3,0,7,8,1,6,4,0,6,2,8,6,2,0,8,9,9,8,6,2,8,0,3,4,8,2,
                    5,3,4,2,1,1,7,0,6,7,9,8,2,1,4,8,0,8,6,5,1,3,2,8,2,3,0,6,6,4,
                    7,0,9,3,8,4,4,6,0,9,5,5,0,5,8,2,2,3,1,7,2,5,3,5,9,4,0,8,1,2,
                    8,4,8,1,1,1,7,4,5,0,2,8,4,1,0,2,7,0];
    var input_box = $('.num-input-box');
    var current_box;

    function goNext(thisObj) {
      thisObj.nextAll('.num-input-box:enabled:first').focus();
      thisObj.attr('readonly', true);
    }

    function validateInput(input, id) {
      console.log(input + "," + id);
      if (input == pi_digits[id]) {
        return true;
      }
      else {
        return false;
      }
    }

    input_box.focusin(function() {
      if (!$(this).is('[readonly]')) {
        current_box = $(this);
        $(this).addClass('border-glow');
      }
    });

    input_box.focusout(function() {
      $(this).removeClass('border-glow');
    });

    $('#btn-reset').on('click', function(event) {
      event.preventDefault();
      input_box.val("").attr('readonly', false).removeClass('error');
    });

    $('#btn-reveal').on('click', function(event) {
      event.preventDefault();
      current_box.val(pi_digits[current_box.attr('id')]);
      goNext($(current_box));
    });

    input_box.on('input', function(e) {
      var current_val = $(this).val();
      if (/^\d+$/.test(current_val)) {
        if (!(validateInput(current_val, $(this).attr('id')))) {          
          $(this).addClass('error');
        }
        goNext($(this));
      }
      else {
        $(this).val("");
      }
    });
});
