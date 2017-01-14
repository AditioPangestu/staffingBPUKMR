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
        if (!$('#nama').val() || !$('#telepon').val() || !$('#idline').val() || !$('input[name=pertama]').is(":checked") || !$('input[name=kedua]').is(":checked") || !$('input[name=ketiga]').is(":checked") || !$('#alspertama').val() || !$('#alskedua').val() || !$('#alsketiga').val()) {
            return false;
        } else {
            return true;
        }
    };
    
    function postToGoogle() {
        var nama = $('#nama').val();
        var telepon = $('#telepon').val();
        var idline = $('#idline').val();
        var pilsatu = $('input[name=pertama]:checked').val();
        var pildua = $('input[name=kedua]:checked').val();
        var piltiga = $('input[name=ketiga]:checked').val();
        var alassatu = $('#alspertama').val();
        var alasdua = $('#alskedua').val();
        var alastiga = $('#alsketiga').val();

        $.ajax({
            url: "https://docs.google.com/forms/d/e/1FAIpQLScpJn7c78rkbqkOvdF4jcdhY1bVmLKCyRXY4P-kaW5rHJ0sqA/formResponse",
            data: {"entry.870011858": nama, "entry.151484324": telepon, "entry.2106828603": idline, "entry.1418598249": pilsatu, "entry.1780762647": alassatu, "entry.863785637": pildua, "entry.1907015165": alasdua, "entry.1161452479": piltiga, "entry.1595451292": alastiga},
            type: "POST",
            dataType: "xml",
            statusCode: {
                0: function() {
                    //Success message
                    $('#nama').val("");
                    $('#telepon').val("");
                    $('#idline').val("");
                    $('input[name=pertama]').prop('checked',false);
                    $('input[name=kedua]').prop('checked',false);
                    $('input[name=ketiga]').prop('checked',false);
                    $('#alspertama').val("");
                    $('#alskedua').val("");
                    $('#alsketiga').val("");
                    window.location.href = './terimakasih.html';
                },
                200: function() {
                    //Success Message
                    $('#nama').val("");
                    $('#telepon').val("");
                    $('#idline').val("");
                    $('input[name=pertama]').prop('checked',false);
                    $('input[name=kedua]').prop('checked',false);
                    $('input[name=ketiga]').prop('checked',false);
                    $('#alspertama').val("");
                    $('#alskedua').val("");
                    $('#alsketiga').val("");
                    window.location.href = './terimakasih.html';
                }
            }
        });
    }
    
    $('#submit').on('click', function (){
        if (validate()) {
            postToGoogle();
        } else {
            console.log("MAMAM");
            $('input[required], textarea[required]').each(function(i, e) {
                console.log(e.type);
                if (!$.trim($(e).val())) {
                    $(e).addClass('error');
                    $(e).closest('.form-group').find('.error-validation').show();
                }
            });
            if (!$('input[name=pertama]').is(":checked") || !$('input[name=kedua]').is(":checked") || !$('input[name=ketiga]').is(":checked")) {
                $('.division-error').show();
            }
        }
    })

});