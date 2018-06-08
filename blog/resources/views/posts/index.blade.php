@extends('layouts.app')
@section('content')
    <h3>STUDENTS:</h3>
    @if (count($posts)>0)
        @foreach($posts as $post)
        <div class= "well">
        <h3><a href="/posts/{{$post->id}}">{{$post->name}}</a></h3>
        {!!Form::open(['action'=>['PostController@destroy',$post->id],'method'=>'POST','class'=>'pull-right'])!!}
        {{Form::hidden('_method','DELETE')}}
        {{Form::submit('Delete',['class'=>'btn btn-danger '])}}
        {!!Form::close()!!}
        </div>
        @endforeach
        {{$posts->links()}}
    @else
        <p>No post found</p>
    @endif
@endsection
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
-->
<input type="button" value="Click"/>
<p>Some Text</p>
<script src="js/jquery.js"></script>
<script src="js/code/selectors.js"></script>
