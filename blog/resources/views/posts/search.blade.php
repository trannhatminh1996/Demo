@extends('layouts.app')
@section('content')
    <h1> SEARCH FOR STUDENTS:</h1>
    {!! Form::open(['action'=>'SearchController@search','method'=>'POST'])!!}
        <div class= "form-group">
            {{Form::label('name','Name')}}
            {{Form::text('name','',['class'=>'form-control','placeholder'=>'Name'])}}
            </div>
        <div class= "form-group">
                {{Form::label('address','Address')}}
                {{Form::text('address','',['class'=>'form-control','placeholder'=>'Address'])}}
            </div> 
            
        <div class= "form-group">
                {{Form::label('birthday','Birthday')}}
                {{Form::date('birthday','',['class'=>'form-control','placeholder'=>'Birthday'])}}
            </div>      
        {{Form::submit('Submit',['class'=>"btn btn-primary"])}}
    {!!Form::close()!!}
@endsection
