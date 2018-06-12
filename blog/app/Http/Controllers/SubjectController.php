<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Subject;
use App\Course;
use App\Person;
use App\Type;
use Illuminate\Support\Facades\Schema;
use Illuminate\Routing\UrlGenerator;

class SubjectController extends Controller
{
    public function showsubject(){
        $people = Type::find(1)->people;
        Schema::dropIfExists('teachers');
        return $people[0]->name;
    }

    public function adminpage(){
        return view('admin.adminpage');
    }
}
