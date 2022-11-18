

$(document).on('change', '#tipo-veiculo', function(id, modelo_id){
	var tipo = $('#tipo-veiculo').val();

	if(tipo == 'carros'){
		$('#variavel-tipo-veiculo').html(tipo.toUpperCase());
		$('#container-formulario').show();
	}

	if(tipo == 'motos'){
		$('#variavel-tipo-veiculo').html(tipo.toUpperCase());
		$('#container-formulario').hide();
	}

	if(tipo == 'caminhoes'){
		$('#variavel-tipo-veiculo').html(tipo.toUpperCase());
		$('#container-formulario').hide();
	}
	
})