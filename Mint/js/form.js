// password show/hide
$(".pass .reveal").mousedown(function() {
 $(".pass .pwd").replaceWith($('.pass .pwd').clone().attr('type', 'text'));
})
.mouseup(function() {
$(".pass .pwd").replaceWith($('.pass .pwd').clone().attr('type', 'password'));
})
.mouseout(function() {
$(".pass .pwd").replaceWith($('.pass .pwd').clone().attr('type', 'password'));
});

$(".reset-1 .reveal").mousedown(function() {
  $(".reset-1 .pwd").replaceWith($('.reset-1 .pwd').clone().attr('type', 'text'));
})
.mouseup(function() {
$(".reset-1 .pwd").replaceWith($('.reset-1 .pwd').clone().attr('type', 'password'));
})
.mouseout(function() {
$(".reset-1 .pwd").replaceWith($('.reset-1 .pwd').clone().attr('type', 'password'));
});

$(".reset-2 .reveal").mousedown(function() {
 $(".reset-2 .pwd").replaceWith($('.reset-2 .pwd').clone().attr('type', 'text'));
})
.mouseup(function() {
$(".reset-2 .pwd").replaceWith($('.reset-2 .pwd').clone().attr('type', 'password'));
})
.mouseout(function() {
$(".reset-2 .pwd").replaceWith($('.reset-2 .pwd').clone().attr('type', 'password'));
});
