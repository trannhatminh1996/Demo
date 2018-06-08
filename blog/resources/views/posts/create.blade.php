@extends('layouts.app')
@section('content')
    <h1> CREATE A STUDENT:</h1>
    {!! Form::open(['action'=>'PostController@store','method'=>'POST'])!!}
        <div class= "form-group">
            {{Form::label('name','Name')}}
            {{Form::text('name','',['class'=>'form-control','placeholder'=>'Name','id'=>'name1'])}}
            </div>
        <div class= "form-group">
                {{Form::label('address','Address')}}
                {{Form::text('address','',array('class'=>'form-control','id'=> 'address','placeholder'=>'Address','id'=>'address1'))}}
            </div>
        <div class= "form-group">
                    {{Form::label('birthday','Birthday')}}
                    {{Form::date('birthday','',['class'=>'form-control','placeholder'=>'Birthday','id'=>'birthday1'])}}
            </div>    

        {{Form::submit('Save',['class'=>"btn btn-primary"])}}
    {!!Form::close()!!}
{!! Form::open(['action'=>'SearchController@continueadd','method'=>'POST'])!!}
        <div class= "form-group">
        {{Form::hidden('name','',['class'=>'form-control','placeholder'=>'Name','id'=>'name2'])}}
        </div>
        <div class= "form-group">
        {{Form::hidden('address','',['class'=>'form-control','placeholder'=>'Address','id'=>'address2'])}}
        </div>
        <div class= "form-group">
        {{Form::hidden('birthday','',['class'=>'form-control','placeholder'=>'Birthday','id'=>'birthday2'])}}
        </div>
    {{Form::submit('Save and Continue Adding',['class'=>"btn btn-primary"])}}
{!!Form::close()!!}
@endsection

<script src="http://demo.com/js/jquery.js"></script>
<script src="http://demo.com/js/code/continueadding.js"></script>



