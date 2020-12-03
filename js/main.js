$('#phone').mask('(00) 00000-0000');

$( "#target" ).submit(function( event ) {
  event.preventDefault();
  let phone = $("#phone").val();
  if (phone != ''){
    $( "section" ).removeClass( "display-none" );
    phone = phone.replace(/[^\d]/g, ''); 
    $('.link-wa').html('<a href="https://wa.me/55'+phone+'">https://wa.me/55'+phone+'</a>');
  } else {
    alert("É necessário o número telefônico")
  }
});