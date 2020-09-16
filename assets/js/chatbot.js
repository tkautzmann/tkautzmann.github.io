var chat = 0;

$(".minimizar").click(function(){
	if(chat == 1){
		$(".chattiago").css("height","auto");
		$(".minimizar").html("Maximizar");
		chat = 0;
	}else{
		$(".chattiago").css("height","100%");
		$(".minimizar").html("Minimizar");
		chat = 1;
	}
	$("#watson").toggle("slow");
});

//Submeter Formulário
$("#mensagem").submit(function(){
	//Caso o usuário envie uma mensagem vazia
	if($("#mensagem #texto").val() === ""){
		//Adiciona na área de Chat a mensagem enviada pelo usuário
		$("#chat1").append("<div class=\"texto usuario\">...</div>");
		
		//Faz um scroll para a mensagem mais recente, caso necessário
		$(".mensagens").animate({scrollTop: $("#chat1").height()});
		setTimeout(function(){
			//Adiciona uma resposta padrão afirmando que o usuário deixou o campo vazio
			$("#chat1").append("<div class=\"texto chatbot\">Você precisa digitar alguma coisa para prosseguir.</div>");
			//Faz um scroll para a mensagem mais recente, caso necessário
			$(".mensagens").animate({scrollTop: $("#chat1").height()});
		},1000);
		return false;
	}
	
	//Inicia método AJAX
	$.ajax({
		//Substitua o caminho da URL pelo que você salvou o arquivo de backend
		url: "conversa.php?texto=" + $("#mensagem #texto").val(),
		dataType: 'json', // Determina o tipo de retorno
		beforeSend: function(){
			//Adiciona a mensagem de usuário à lista de mensagens.
			$("#chat1").append("<div class=\"texto usuario\">" + $("#mensagem #texto").val() + "</div>");	
		},
		success: function(resposta){
			//Limpa o que o usuário digitou e foca no input para próxima interação.
			
			$("#mensagem #texto").val("");
			$("#mensagem #texto").focus();
			
			//Caso haja um erro, o Watson retornará a mensagem de erro ao usuário
			//Basta ler o objeto error para o usuário.
			if(resposta.error){
				$("#chat1").append("<div class=\"texto chatbot\">" + resposta.error + "</div>");
				return false;
			}
			
			//Colocar a resposta do Watson para o usuário ler
			//A mensagem de texto pode ser lida a partir da lógica
			//do json de exemplo da imagem no post
			var mensagemChatbot  = "<div class=\"texto chatbot\">";
			mensagemChatbot		+= "TiagoBot: " + resposta.output.text[0];
			mensagemChatbot		+= "</div>";
			setTimeout(function(){
				$("#chat1").append(mensagemChatbot);
				$(".mensagens").animate({scrollTop: $("#chat1").height()});
			},1000);
		}
	});

	return false;
});