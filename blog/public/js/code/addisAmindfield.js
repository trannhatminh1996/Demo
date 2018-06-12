$(document).ready(function(){
    $('#register_button').click(function(){
        if ($('#isAdmincheckbox').is(':checked')==true){
            $('#isAdmin').attr('value','1');
        }
        else 
        {
            $('#isAdmin').attr('value','0');
        }
    });
});