<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PagesController extends Controller
{
    public function index(){
        $title = 'Welcome to Laravel';
        return view('Pages.index')->with('a',$title);
    }
    
    public function service(){
        $data = array(
            'title'=>"Welcome to Service Page",
            'services'=>['IT','A','B'],
        );
        return view('Pages.service')->with($data);
    }

    public function student(){
        $title = 'Welcome to Laravel';
        return view('Pages.student')->with('a',$title);
    }
}
