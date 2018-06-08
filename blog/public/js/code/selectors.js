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
/*
$(':button,p').click(function(){
    $('p').toggle();
});
*/
/*
$(document).ready(function(){
    var _email_default ="Enter email";

    $('input[type="email"]').attr('value',_email_default).focus(function(){
        if($(this).val()==_email_default)
        {
            $(this).attr('value','');
        }
    }).blur(function(){
        if ($(this).val()==''){
            $(this).attr('value',_email_default);
        }
    });
});
*/
/*
$(document).ready(function(){
    $('#search').keyup(function(){
        search_name= $(this).val();

        $('#name h3').removeClass('highlight');

        if(jQuery.trim(search_name)!='')
        {
        $('#name h3:contains("'+ search_name+'")').addClass('highlight');
        }
    });
});
*/

/*
$(':text').focusin(function(){
    $(this).css('background-color','yellow');
})
$(':text').focusout(function(){
    $(this).css('background-color','white');
})

$(':button').click(function(){
    $(this).attr('value','Please wait');
    $(this).attr('disabled',true);
});
*/
/*
function change_size(element,size){
    var cur = parseInt(element.css('font-size'));
    if (size=="smaller")
    {
        var new_size = cur-1;
    }
    else if (size=="bigger")
    {
        var new_size = cur+1;
    }
    element.css('font-size',new_size+'px');
}
$('#smaller').click(function(){
    change_size($('p'),'smaller');
});
$('#bigger').click(function(){
    change_size($('p'),'bigger');
});
*/
/*
$(document).ready(function(){
    $('#file').change(function(){
        $('#submit').attr('disabled',false);
    });
});
*/
/*
$('#menu_link').dblclick(function(){
    $('#menu').show();
});
*/
/*
$('#user_text').keydown(function(){
    var user_text = $('#user_text').val();
    $('#user_text_feedback').html(user_text);

});
*/
/*
$('#list').change(function(){
    var list_value = $('#list').val();
    $('#list_feedback').html("You have selected "+ list_value);
});
*/
/*
$('#signup_form').submit(function(){
    var user_email = $('#email').val();
    $('#signup_feedback').html("You have signed up with email:"+user_email);
});
*/
/*
var choice =0;
$('#click_me').click(function(){
    if ($('#click_event').html()=="")
    {
        $("#click_event").html("Yes");
    }
    else {
        if ($('#click_event').html()=="No")
        {
            $("#click_event").html("Yes");
        }
        else 
        {
            $("#click_event").html("No");
        }
    }
});
*/
/*
$('#menu_video').hover(function(){
    $('#menu_feedback').html('Free video tutorial');
}).mouseleave(function(){
    $('#menu_feedback').html('');
});

$('#code_video').hover(function(){
    $('#menu_feedback').html('Free code tutorial');
}).mouseleave(function(){
    $('#menu_feedback').html('');
});

$('#forum_video').hover(function(){
    $('#menu_feedback').html('Free forum tutorial');
}).mouseleave(function(){
    $('#menu_feedback').html('');
});
*/
/*
$('#some_text').scroll(function(){
    var scroll_pos = $('#some_text').scrollTop();
    $('#some_feedback').html("You are scrolling at position "+scroll_pos);
}).mouseleave(function(){
    $('#some_feedback').html('');
});
*/
/*
$('#some_text').select(function(){
    var selected_text = document.getSelection().toString();
    $('#some_feedback').html('You are selecting '+selected_text);
});
*/
/*
$('#name').focusin(function(){
    $('#name_span').html("Enter your name");
}).focusout(function(){
    $('#name_span').html("");
});
*/
/*
$('a').mouseenter(function(){
    $(this).addClass('bold');
}).mouseleave(function(){
    $(this).removeClass('bold');
});
$('a').bind('mouseenter mouseleave',function(){
    $(this).toggleClass('bold');
});
*/
/*
$('.duplicate').on(
    {
        click:function(){
            $(this).after('<input type="button" class="duplicate" value="Click"/>');
        }
    }
);
*/
/*
var text_max_length= $('#textarea').attr("maxlength");
$('#some_feedback').html(text_max_length+' characters remaining');
$('textarea').keyup(function(){
    var text_length = $('#textarea').val().length;
    var text_remaining = text_max_length-text_length;
    $('#some_feedback').html(text_remaining +' characters remaining');
});
*/
/*
$('#hide').click(function(){
    $('#message').slideToggle('slow',function(){
        if ($('#message').is(':visible'))
        {
            $('#hide').html("Hide");
        }
        else{
            $('#hide').html('Show');
        }
    });
});
*/
/*
$('.hover').mousemove(function(e){
    var description = $(this).attr('hovertext');
    $('#hoverdiv').text(description).show();
    $('#hoverdiv').css('top',e.clientY+10).css('left',e.clientX+10);
}).mouseout(function(){
    $('#hoverdiv').hide();
});
*/
/*
$('#copy_button').click(function(){
    var text = $('#text').html();
    $('#copy').html(text);
});
*/
/*
$('#button').click(function()
{
    var text = $('#text').val();
    $('#copy_text').html(text);
});
*/
/*
var attr = $('#link').attr('href');
$('#attr').text(attr);
*/
/*
$('#apply_button').click(function(){
    $('#sometext').addClass('bold');
});
*/
/*
$('#agree').change(function(){
    if ($(this).is(':checked'))
    {
        $('#continue').removeAttr('disabled');
    }
    else
    {
        $('#continue').attr('disabled',true);
    }
});
*/
/*
$('#combine').click(function(){
    var combined_text="";
    var failed = false;
    $('input[type="text"]').each(function(index,value){
        combined_text+= $(this).val()+' ';
        if ($(this).val()=="")
        {
            failed = true;
        }
    })
    if (failed==true)
    {
        alert("Please input all fields");
        $('#combine_text').html('');
    }
    else 
        $('#combine_text').html(combined_text);
});
*/