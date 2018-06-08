@extends('layouts.app')
@section('content')
    <h1>{{count($posts)}} Students found(s):</h1>
    @if (count($posts)>0)
        @foreach ($posts as $post)
            <h3>{{$post->name}}</h3>
            <h3>{{$post->address}}</h3>
            <h3>{{$post->birthday}}</h3>
        @endforeach
    @else
        <h1>No student found</h1>
    @endif
@endsection
