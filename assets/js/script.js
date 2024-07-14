(function(){
  $('.fa-bars').on('click', function(){
    $('body').toggleClass('msb-x');
    $(".header #msbo").toggleClass('d-none');
  });
}());

$(".center-side #email-template").hide();
$(".templateCreate").click(function(){
  console.log(123);
  $(".center-side #chat-Box").hide();
  $(".center-side #email-template").show();
})
$("#template-form").submit(function(e){
  e.preventDefault();
  $(".center-side #email-template").hide();
  $(".center-side #chat-Box").show();
});

$(".close-btn").on("click",function(e){
  e.preventDefault();
  $(".center-side #email-template").hide();
  $(".center-side #chat-Box").show();
});



$("#email_btn").on("click",function(e){
  e.preventDefault();

  $("#chat-Box").hide();
  $("#email-template").show();
});