$('#phone').mask('(00) 00000-0000');

$( "#target" ).submit(function( event ) {
  event.preventDefault();
  let phone = $("#phone").val();
  let typeSubmition = $('input[name="type-submition"]:checked').val();

  if (phone != ''){
    phone = phone.replace(/[^\d]/g, ''); 
    let uri = `https://wa.me/55${phone}`;
    let anchor = `<a href="https://wa.me/55${phone}">${uri}</a>`;

    if (typeSubmition == 0){
      $( "section" ).removeClass( "display-none" );
      
      $('.link-wa').html(anchor);
    } else {
      window.location.href = uri
    }
  } else {
    swal("Vixii, aconteceu um problema", "Você precisa adicionar um número");
  }
});