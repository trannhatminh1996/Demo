<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Post;
use DB;

class SearchController extends Controller
{
    public function searchform()
    {
        return view('posts.search');
    }
    public function search(Request $request)
    {
        $this->validate($request,[
            'name'=>'required_without_all:address,birthday',
            'address'=>'required_without_all:name,birthday',
            'birthday'=>'required_without_all:address,name'
        ]);
        $name = $request->input('name');
        $address = $request->input('address');
        $birthday = $request->input('birthday');
        if($name and $address)
        {
        $posts = Post:: where('name',"like","%".$name."%")->orwhere('address',"like","%".$address."%")->orwhere('birthday',$birthday)->get();
        }
        else if (!$address)
        {
            $posts = Post:: where('name',"like","%".$name."%")->orwhere('birthday',$birthday)->get();
        }
        else 
        {
            $posts = Post::where('address',"like","%".$address."%")->orwhere('birthday',$birthday)->get();
        }
        return view('posts.searchdetails')->with('posts',$posts);
    }
    public function continueadd(Request $request)
    {
        $this->validate($request,[
            'name'=>'required',
            'address'=>'required',
            'birthday'=>'required'
        ]);
        
        $student = new Post;
        $student->name = $request->input('name');
        $student->address = $request->input('address');
        $student->birthday = $request->input('birthday');
        $student->user_id = auth()->user()->id;
        $student->save();

        return redirect('/posts/create')->with('success','Student Create');
    }
}
