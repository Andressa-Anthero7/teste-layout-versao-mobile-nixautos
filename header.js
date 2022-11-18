



$( document ).ready(function() {
    $('#menu-hidden').hide();
    $('#container-formulario').hide();

});


$(document).on('click','.menu', function () {
        $('#menu-hidden').show();
        $('.menu').removeClass('menu').addClass('show-menu');
        $('#campo-escolha-tipo-anuncio').hide();
        $('#container-formulario').hide();
        
});

$(document).on('click','.show-menu', function () {
        $('#menu-hidden').hide();
        $('#menu').removeClass('show-menu').addClass('menu');
        var tipo = $('#tipo-veiculo').val();
        if(tipo == 'escolha'){
            $('#container-formulario').hide();
            $('#campo-escolha-tipo-anuncio').show();    
        }

        if(tipo == 'carros'){
              $('#campo-escolha-tipo-anuncio').show();
              $('#container-formulario').show();
        }
        
});







