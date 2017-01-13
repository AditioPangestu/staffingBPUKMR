$(document).ready(function(){
   $("input[name=pertama]") // select the radio by its id
    .change(function(){ // bind a function to the change event
        if( $(this).is(":checked") ){ // check if the radio is checked
            var pertamaString = $(this).val(); // retrieve the value
            var alasanSatu = $(".alasan")[0];
            alasanSatu.innerHTML = "Kenapa kamu memilih "+pertamaString+" sebagai pilihan pertama?" ;
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
            alasanSatu.innerHTML = "Kenapa kamu memilih "+keduaString+" sebagai pilihan kedua?" ;
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
            alasanSatu.innerHTML = "Kenapa kamu memilih "+ketigaString+" sebagai pilihan ketiga?" ;
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
});