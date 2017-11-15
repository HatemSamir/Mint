// upload profile picture
$(document).ready(function() {

  var readURL = function(input) {
  		if (input.files && input.files[0]) {
  				var reader = new FileReader();

  				reader.onload = function (e) {
  						$('.profile-pic').attr('src', e.target.result);
  				}

  				reader.readAsDataURL(input.files[0]);
  		}
  }


  $(".file-upload").on('change', function(){
  		readURL(this);
  });

  $(".upload-button").on('click', function() {
  	 $(".file-upload").click();
  });

});


// change status
$(".status .edit").click(function(e) {
  $('.status .editable').html($(".status .text").html()).show();
  $('.status .editable').focus();
  $(".status .text").hide();
  $(this).hide();
  $(".status .save").show();
});

$(".status .save").click(function(e) {
  $('.status .text').show();
  $('.status .text').html($(".status .editable").val()).show();
  $('.status .editable').hide();
  $(this).hide();
  $(".status .edit").show();
});


// change mail
$(".mail-change .edit").click(function(e) {
  $('.mail-change .editable').text($(".text").val()).show();
  $('.mail-change .editable').focus();
  $(".mail-change .text").hide();
  $(this).hide();
  $(".mail-change .save").show();
});

$(".mail-change .save").click(function(e) {
  $('.mail-change .text').show();
  $('.mail-change .text').text($(".mail-change .editable").val()).show();
  $('.mail-change .editable').hide();
  $(this).hide();
  $(".mail-change .edit").show();
});

// change birth date
$(".birth-date-change .edit").click(function(e) {
  $('.birth-date-change .editable').text($(".birth-date-change .text").val()).show();
  $('.birth-date-change .editable').focus();
  $(".birth-date-change .text").hide();
  $(this).hide();
  $(".birth-date-change .save").show();
});

$(".birth-date-change .save").click(function(e) {
  $('.birth-date-change .text').show();
  $('.birth-date-change .text').text($(".birth-date-change .editable").val()).show();
  $('.birth-date-change .editable').hide();
  $(this).hide();
  $(".birth-date-change .edit").show();
});

// change interests
$(".interest-change .edit").click(function(e) {
  $('.interest-change .editable').text($(".text").val()).show();
  $('.interest-change .editable').focus();
  $(".interest-change .text").hide();
  $(this).hide();
  $(".interest-change .save").show();
});

$(".interest-change .save").click(function(e) {
  $('.interest-change .text').show();
  $('.interest-change .text').text($(".interest-change .editable").val()).show();
  $('.interest-change .editable').hide();
  $(this).hide();
  $(".interest-change .edit").show();
});


// prevent scroll up
$('.edit, .save').click(function(e) {
    e.preventDefault();
});
