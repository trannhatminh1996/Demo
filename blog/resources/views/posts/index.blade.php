@extends('layouts.app')
@section('content')
    <h3>STUDENTS:</h3>
    @if (count($posts)>0)
    <div id="name">
        @foreach($posts as $post)
        <div class= "well">
        <h3><a href="/posts/{{$post->id}}">{{$post->name}}</a></h3>
        {!!Form::open(['action'=>['PostController@destroy',$post->id],'method'=>'POST','class'=>'pull-right'])!!}
        {{Form::hidden('_method','DELETE')}}
        {{Form::submit('Delete',['class'=>'btn btn-danger '])}}
        {!!Form::close()!!}
        </div>
        @endforeach
    </div>
        {{$posts->links()}}
    @else
        <p>No post found</p>
    @endif
@endsection

</head>
<link rel="stylesheet" style="text/css" href= "css/style.css">
</head>
<!--Selectors-->
<!--
<div id="area">
    <p>Paragraph</p>
    <input type="button" value="Button"/>
    <span> UselessTest</span>
</div>
<input id="name" type= "text" value = "Hello"/>
<p id= "text">Some Text</p>
<input type="button" id="click_me" value="Click me"/> 
<p></p>
<p></p>
<input type="button" value= "A button"/>
<input type="submit" value= "A button"/>
<input type="submit" value= "A button"/>
<input type="text"/>
<input type="button" value="Click"/>
<p>Some Text</p>

<p>Name:</p><br>
<input type="text"/>
<p>Email:</p><br>
<input type="email"/>
<p><input id="search" type="text"/></p>

<form action="#">
    <p> Name:</br><input type="text"/></p>
    <p> Email:</br><input type="text"/></p>
    <p><input id = "newsletter_button" type="button" value= "Sign up"/></p>

</form>

Font site: <a href="#" id= "smaller">Smaller</a> <a href="#" id="bigger">Bigger</a>
    <p>Text</p>

<form action="#" method="post" enctype="multipart/form-data">
    <input id="file" type="file"/>
    <input id="submit" type="submit" value="Upload" disabled="true"/>
</form>

<a href= "#" id="menu_link">Menu</a>
<div id="menu" style="display:none;">
    <a href="#">Programs</a><br>
    <a href="#">Settings</a><br>
    <a href="#">Log out</a><br>
</div>

<input type="text" id="user_text"/>
<span id="user_text_feedback"></span>

<select id="list">
    <option value=""></option>
    <option value="one">One</option>
    <option value="two">Two</option>
    <option value="three">Thress</option>
</select>
<span id="list_feedback"></span>

<form action= "#" id="signup_form">
    <p>Email: <input type="Email" id="email"/></p>
    <input type="submit" value="Sign up"/>
</form>
<div id="signup_feedback"></div>

<a href="#" id="click_me">Click me</a>
<div id= "click_event"></div>

<a href="#" id="menu_video">Video</a>
<a href="#" id="code_video">Code</a>
<a href="#" id="forum_video">Forum</a>
<div id="menu_feedback"></div>

<textarea id="some_text" rows="7" cols="25">Taxi demand prediction is an important building block to enabling intelligent transportation systems in a smart city. An accurate prediction model can help the city pre-allocate resources to meet travel demand and to reduce empty taxis on streets which waste energy and worsen the traffic congestion. With the increasing popularity of taxi requesting services</textarea>
<div id="some_feedback"></div>

<input type="text" id="some_text"/>
<div id="some_feedback"></div>

<label>Your name</label>
<input type="text" id="name"/>
<span id="name_span"></span>

<a href="#">A link</a>

<input class="duplicate" type="button" value="Click"/>

<textarea id ="textarea" rows="7" cols="25" maxlength="50"></textarea>
<div id="some_feedback"></div>

<a href="#" id="hide">Hide</a>
<div id="message" style="width: 300px; border:1px solid #700; padding: 10px;">Taxi demand prediction is an important building block to enabling intelligent transportation systems in a smart city. An accurate prediction model can help the city pre-allocate resources to meet travel demand and to reduce empty taxis on streets which waste energy and worsen the traffic congestion. With the increasing popularity of taxi requesting services</div>

<a class="hover" href="http://google.com" hovertext="This is Google">Google</a>
<div id ="hoverdiv">Some Text</div> 

<input type="button" id="copy_button" value="Copy"/>
<p id="text"> Some text</p>
<p id="copy"></p>

<input type="text" id="text"/>
<input type="button" value="Copy" id="button"/>
<div id="copy_text"></div> 

<p><a id="link" href="http://www.google.com" target="_blank">Google</a></p>
<p id="attr"></p>

<p><input type="button" value= "Apply class" id="apply_button"/>
<p id="sometext">This is some text</p>

<p><input type="checkbox" id="agree"/>I agree</p>
<input type="button" value="Continue" disabled= true id="continue"/>

<input type="text" /> <input type="text"/> <input type=button id="combine" value="Combine"/>
<div id="combine_text"></div>
-->


<!--table-->
<!--
    <table class="table">
        <tr><td>First row</td></tr>
        <tr><td>Second row</td></tr>
        <tr><td>Third row</td></tr>
        <tr><td>Fourth row</td></tr>
    </table>
        <div id="area">
        <p>First Row</p>
        <p>Second Row</p>
    </div>

-->
<script src="js/jquery.js"></script>
<script src="js/code/selectors.js"></script>

