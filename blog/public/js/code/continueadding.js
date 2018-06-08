$(document).ready(function(){
    $('#name1').keyup(function(){
        var input_name= $(this).val();
        $('#name2').attr('value',input_name);
    });
    $('#address1').keyup(function(){
        var input_address= $(this).val();
        $('#address2').attr('value',input_address);
    });
    $('#birthday1').change(function(){
        var input_birthday= $(this).val();
        $('#birthday2').attr('value',input_birthday);
    });
});