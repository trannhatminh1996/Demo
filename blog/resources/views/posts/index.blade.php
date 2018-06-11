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