// Efeitos de interface utilizando a biblioteca jQuery.
$(function(){
 $("#abrir-cadastro").on("click",function(){ $("#section-login, #botao-cadastrar").slideUp(250,function(){ $("#form-cadastrar").removeAttr("hidden").hide().slideDown(300); }); });
 $("#voltar-login").on("click",function(){ $("#form-cadastrar").slideUp(250,function(){ $(this).attr("hidden",true);$("#section-login, #botao-cadastrar").slideDown(300); }); });
});
