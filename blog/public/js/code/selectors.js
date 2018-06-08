//var count = $('#area').find('p').length;
//alert(count);
//var name = $('#name').val();
//var text = $('#text').text();
//alert(name);
/*$('#click_me').click(function(){
    var name = $('#click_me').val();
    alert(name);
});*/
//$('p').text('Hello');
//$('p:first').text('Hello');
/*$(':button:first').click(function(){
    alert("Hello");
});
$(':submit').click(function(){
    alert("Hi");
});

$(':submit').click(function(){
    $(this).attr('value','Please wait');
});
*/
/*
$(':text').focusin(function(){
    $(this).css('background-color','yellow');
});
$(':text').focusout(function(){
    $(this).css('background-color','white');
});
*/

$(':button,p').click(function(){
    $('p').toggle();
});