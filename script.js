//Import Data Add File 
var javascript = document.createElement('script');
javascript.src = 'https://123alehot.net.br/storage/projetos/mapa-mundi-interativo/data/?putaoyatoken=alehotprojekts.00inviteduser&type=var&add=innerHTMLsourcedata&generaltoken=bf5da9d69eeb43bbb55c6972d4e17a9df9132c4b60a1c5c0f589875e0c2907081812fb7c7fa84a9b6e9bbd5f502a8ad9ef2a54ac061e27887d7808c6e5c7d912ff817f112886b6f009999999999998787885859989898989996';
document.head.appendChild(javascript); 

//jQuery Script 
$('.st0').click(function(){
  var id = $(this).attr('id');
  //mapa
  $('.st0').removeClass('active');
  $(this).addClass('active');
  
  $('.informacoesPaises').removeClass('active');
  $('.informacoesPaises[data-id="'+id+'"]').addClass('active'); 
});

//tab activo por default