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
/*
$('#name').find('li').first().click(function(){
    $(this).nextAll().toggle();
}).nextAll().hide();
*/
/*
$(document).ready(function(){
    $('p').find('strong').addClass('bold');
});
*/
/*
$('ul').each(function(){
    this_sel = $(this);
    if(this_sel.has('li').length==0)
    {
        this_sel.after('Empty menu');
    }
});
*/
/*
$('#a_button').click(function(){
    $('#a_div').hide(1000,'linear',function(){
        alert('Successfully hidden');
    });
});
*/
/*
$(document).ready(function(){
    $('#image').fadeIn(2000,'linear',function(){
        $('#feedback').html('Completed');
    });
});
*/
/*
$('#button').click(function(){
    $('#button').attr('disabled',true);
    if ($('#button').val()=="Hide")
    {
        $('#image').fadeOut(2000,'linear',function(){
            $('#button').attr('disabled',false);
        });
        $('#button').attr('value','Show');
    }
    else 
    {
        $('#image').fadeIn(2000,'linear',function(){
            $('#button').attr('disabled',false);
        });
        $('#button').attr('value','Hide');
    }
});
*/
/*
$('#button').click(function(){
    $('#image').fadeToggle(1000,'linear');
});
*/
/*
$('p').fadeOut(5000).delay(2000).fadeIn(5000);
*/
/*
$('.FadeClass').css('opacity','0.4');
$('.FadeClass').mouseover(function(){
    $(this).fadeTo(100,1);
    $('.FadeClass').not(this).fadeTo(100,0.4);
}).mouseleave(function(){
    $(this).fadeTo(100,0.4);
});
*/
/*
var i=0;
$('#button').click(function(){
    $('#area').append(i+' ');
    i+=1;
});
*/
/*
$('#button').click(function(){
    var name=$('#name').val();
    if (name==''){
        $('p').text('Enter your name, you dumb fuck!');
    }
    else{
        $('p').text('Your name is: ')
        $('p').append(name);
    }
});
*/
/*
$('#button').click(function(){
    $('paragraph1').removeAttr('style');
    $('#paragraph1').appendTo('#paragraph2');
});
$('#button').click(function(){
    $('paragraph1').removeAttr('style');
    $('#paragraph1').clone().appendTo('#paragraph2');
});
*/
/*
var windown_width = $(window).width();
var window_height = $(window).height();
$('#image').css('width',windown_width).css('height',window_height);
*/
/*
$('#textarea').scroll(function(){
    var scroll_top=$(this).scrollTop();
    $('#feedback').text('Currently at position: '+scroll_top);
});
*/
/*
$('#textarea').keyup(function(){
    var count=0;
    var text = $('#textarea').val();
    if (text[0]!=' ' && text.length>0)
        count++;
    for(var i=0;i<text.length;i++)
    {
        if(text[i]!=' ' && text[i-1]==' ')
            count++;
    }
    $('#some_feedback').html("Word count: "+ count);
});
*/
/*
$('.link').click(function(){
    var item= $(this).text();
    var duplicated= false;
    $('option').each(function(){
        if ($(this).text()==item)
        {
            duplicated= true;
            alert("Duplicated");
        }
    })
    if (!duplicated)
        $('#list').append('<option>'+item+'</option>');
});
*/
/*
function move_div(){
    window_width = $(window).width();
    window_height = $(window).height();
    obj_width = $('#verycenter').width();
    obj_height = $('#verycenter').height();
    $('#verycenter').css('top',window_height/2-obj_height/2).css('left',window_width/2-obj_width/2);
}
move_div();
$(window).resize(function(){
    move_div();
});
*/
/*
$('input[type="text"]').focus(function(){
    this_sel = $(this);
    minlength = this_sel.attr('minlength');

    if (minlength>0 && this_sel.val().length<minlength){
        this_sel.after('<span>'+ minlength+' characters requierd</span>');
    }
}).blur(function(){
    this_sel.next().remove();
}).keyup(function(){
    if (this_sel.val().length>=minlength)
    {
        this_sel.next().remove();
    }
    else 
    {
        this_sel.next().remove();
        this_sel.after('<span>'+ minlength+' characters requierd</span>');
    }
});
*/
/*
$('.top').click(function(){
    $('html, body').animate({scrollTop:0},1000);
});
*/
/*
$('#agree').attr('disabled',true);
$('#terms').scroll(function(){
    textarea_height = $(this)[0].scrollHeight;
    scroll_height = textarea_height-$(this).innerHeight();
    scroll_top = $(this).scrollTop();
    if (scroll_top==scroll_height)
    {
        $('#agree').removeAttr('disabled');
    }
})
*/
/*
var names=['John','Paul','George','Ringo'];

$('#check').click(function(){
    name= $('#name').val();
    if (jQuery.inArray(name,names)!='-1')
    {
        alert("Found");
    }
    else 
    {
        alert("name "+ name+" is not found" );
    }
})
*/
/*
function display_array(){
    $('#feedback').text('');
    $.each(names,function(index,value){
        $('#feedback').append(value+'<br>');
    });
}

names= [];

$('#insert').click(function(){
    name= $('#name').val();
    if (jQuery.inArray(name,names)=='-1')
    {
        names.push(name);
    }
    else 
    {
        alert("name "+name+" is found");
    }
    display_array();
});
*/

/*
setInterval(function(){
eventTime= Math.floor(Date.parse('15 June 2018')/1000);
currentTime = Math.floor(jQuery.now()/1000);
seconds = eventTime - currentTime;
days= Math.floor(seconds/(60*60*24));
hours = Math.floor((seconds - days*60*60*24)/(60*60));
minutes = Math.floor((seconds- days*60*60*24 - hours*60*60)/60);
secondsleft = seconds-days*60*60*24 - hours*60*60 - minutes*60; 
$('#days').text(days+' days '+hours+' hours '+minutes+' minutes '+secondsleft+' seconds left until event');
},1000)
*/
/*
$('#button').click(function(){
    $('#content').load('js/sources/page.html');
});
*/
/*
$('#button').click(function(){
    var this_string = $('#string').val();
    $.get('js/sources/reverse.php',{phpString:this_string},function(data){
        $('#feedback').text(data);
    });
});
*/
/*
$('#button').click(function(){
    var this_string = $('#string').val();
    var name = $('#name').val();
    $.post('js/sources/reverse.php',{phpString:this_string, name:name},function(data){
        $('#feedback').html(data);
    }).fail(function(){
        $('#message').append('Error!');
    }).always(function(){
        $('#message').append("Request complete<br>");
    }).done(function(){
        $('#message').append("Request success<br>");
    });
});
*/
/*
$('#button').click(function(){
    $.ajax({
        url: 'js/sources/page.html',
        success:function(data){
            $('#content').html(data);
        }
    });
});
*/
/*
$('#button').click(function(){
    var thisName = $('#name').val();
    $.ajax({
        type:'GET',
        url: 'js/sources/page.php',
        data:{name:thisName},
        success:function(data){
            $('#content').html(data);
        }
    });
});
*/
/*
$('#button').click(function(){
    $.ajax({
        url:'http://demo.com/posts?page=2',
        statusCode:{
            404: function(){
                $('#content').html('Page not found');
            },
            000:function(){
                $('#content').html('Page not found');
            }
        },
        success: function(data){
            $('#content').html(data);
        }
    });
});
*/
/*
function checkValidEmail(email){
    $.post('js/sources/email.php',{email:email},function(data){
        $('#email_feedback').html(data);
    });
}
$('#email').focusin(function(){
    if ($('#email').val()=='')
        $('#email_feedback').text('Type your email');
    else
        checkValidEmail($('#email').val());
}).blur(function(){
    $('#email_feedback').text('');
}).keyup(function(){
    checkValidEmail($('#email').val());
});
*/
/*
$('#save_button').click(function(){
    var name= $('#name').val();
    $('#feedback').text('Loading...');
    $.post('js/sources/settings.php',{name:name},function(data){
        $('#feedback').html(data);
    });
});
*/