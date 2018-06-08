@extends('layouts.app')
@section('content')
    <h1> EDIT STUDENT:</h1>
    {!! Form::open(['action'=>['PostController@update',$post->id],'method'=>'PUT'])!!}
        <div class= "form-group">
            {{Form::label('name','Name')}}
            {{Form::text('name',$post->name,['class'=>'form-control','placeholder'=>'Name'])}}
            </div>
        <div class= "form-group">
                {{Form::label('address','Address')}}
                {{Form::text('address',$post->address,['class'=>'form-control','placeholder'=>'Address'])}}
            </div>
        <div class= "form-group">
                    {{Form::label('birthday','Birthday')}}
                    {{Form::date('birthday',$post->birthday,['class'=>'form-control','placeholder'=>'Birthday'])}}
            </div>    
        {{Form::submit('Submit',['class'=>"btn btn-primary"])}}
    {!!Form::close()!!}
@endsection
