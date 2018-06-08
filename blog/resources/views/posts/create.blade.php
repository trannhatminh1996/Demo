@extends('layouts.app')
@section('content')
    <h1> CREATE A STUDENT:</h1>
    {!! Form::open(['action'=>'PostController@store','method'=>'POST'])!!}
        <div class= "form-group">
            {{Form::label('name','Name')}}
            {{Form::text('name','',['class'=>'form-control','placeholder'=>'Name'])}}
            </div>
        <div class= "form-group">
                {{Form::label('address','Address')}}
                {{Form::text('address','',array('class'=>'form-control','id'=> 'address','placeholder'=>'Address'))}}
            </div>
        <div class= "form-group">
                    {{Form::label('birthday','Birthday')}}
                    {{Form::date('birthday','',['class'=>'form-control','placeholder'=>'Birthday'])}}
            </div>    

        {{Form::submit('Save',['class'=>"btn btn-primary"])}}
    {!!Form::close()!!}
{!! Form::open(['action'=>'SearchController@continueadd','method'=>'POST'])!!}
    {{Form::submit('Save and Continue Adding',['class'=>"btn btn-primary"])}}
{!!Form::close()!!}
@endsection

<script src="http://demo.com/js/jquery.js"></script>
<!--<script src="http://demo.com/js/code/selectors.js"></script>-->



