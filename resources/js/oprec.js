$(document).ready(function(){
   $("input[name=pertama]") // select the radio by its id
    .change(function(){ // bind a function to the change event
        if( $(this).is(":checked") ){ // check if the radio is checked
            var pertamaString = $(this).val(); // retrieve the value
            var alasanSatu = $(".alasan")[0];
            alasanSatu.innerHTML = "Kenapa memilih <b>"+pertamaString+"</b> sebagai pilihan pertama?" ;
            var keduaButton = $("input[name=kedua]:checked");
            var ketigaButton = $("input[name=ketiga]:checked");
            if (keduaButton) {
                if (pertamaString === keduaButton.val())
                    keduaButton.prop('checked',false);
            }
            if (ketigaButton) {
                if (pertamaString === ketigaButton.val())
                    ketigaButton.prop('checked',false);
            }
        }
    });
    $("input[name=kedua]") // select the radio by its id
    .change(function(){ // bind a function to the change event
        if( $(this).is(":checked") ){ // check if the radio is checked
            var keduaString = $(this).val(); // retrieve the value
            var alasanSatu = $(".alasan")[1];
            alasanSatu.innerHTML = "Kenapa memilih <b>"+keduaString+"</b> sebagai pilihan kedua?" ;
            var pertamaButton = $("input[name=pertama]:checked");
            var ketigaButton = $("input[name=ketiga]:checked");
            if (pertamaButton) {
                if (keduaString === pertamaButton.val())
                    pertamaButton.prop('checked',false);
            }
            if (ketigaButton) {
                if (keduaString === ketigaButton.val())
                    ketigaButton.prop('checked',false);
            }
        }
    });
    $("input[name=ketiga]") // select the radio by its id
    .change(function(){ // bind a function to the change event
        if( $(this).is(":checked") ){ // check if the radio is checked
            var ketigaString = $(this).val(); // retrieve the value
            var alasanSatu = $(".alasan")[2];
            alasanSatu.innerHTML = "Kenapa memilih <b>"+ketigaString+"</b> sebagai pilihan ketiga?" ;
            var pertamaButton = $("input[name=pertama]:checked");
            var keduaButton = $("input[name=kedua]:checked");
            if (pertamaButton) {
                if (ketigaString === pertamaButton.val())
                    pertamaButton.prop('checked',false);
            }
            if (keduaButton) {
                if (ketigaString === keduaButton.val())
                    keduaButton.prop('checked',false);
            }
        }
    });
    $('input[required], textarea[required]').on('focusout change', function() {
        if ($.trim($(this).val()) === null || $.trim($(this).val()) === "") {
            $(this).addClass('error');
            $(this).closest('.form-group').find('.error-validation').show();
        } else {
            $(this).removeClass('error');
            $(this).closest('.form-group').find('.error-validation').hide();
        }
    });
    function validate() {
        if (!$('#nama').val() || !$('#telepon').val() || !$('#idline').val() || !$('input[name:pertama]').is(":checked") || !$('input[name:kedua]').is(":checked") || !$('input[name:ketiga]').is(":checked") || !$('#alspertama').val() || !$('#alskedua').val() || !$('#alsketiga').val()) {
            return false;
        } else {
            return true;
        }
    };
    
    $('#submit').on('click', function (){
        if (validate()) {
            
        }    
    })

});