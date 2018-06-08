@extends('layouts.app')
@section('content')
    <a href="/posts" class= "btn btn-default">Go Back</a>
    <h3>Details:</h3>
    <h2>{{$post->name}}</h2>
    <h1>{{$post->address}}</h1>
    <small>{{$post->birthday}}</small><br>
    <a href="/posts/{{$post->id}}/edit" class= "btn btn-default">Edit</a>
    {!!Form::open(['action'=>['PostController@destroy',$post->id],'method'=>'DELETE','class'=>'pull-right'])!!}
        {{Form::submit('Delete',['class'=>'btn btn-danger '])}}
    {!!Form::close()!!}
@endsection