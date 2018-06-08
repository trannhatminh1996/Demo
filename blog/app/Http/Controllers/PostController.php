<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Post;
use DB;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //$posts = Post::orderBy('name','asc')->get();
        //return Post::where('name','John')->get();
        //$posts = DB::select('SELECT * from posts ')
        //$posts = Post::all();
        //$posts = Post::orderBy('name','asc')->take(1)->get();
        $posts = Post::orderBy('name','asc')->paginate(5);
        return view('posts.index')->with('posts',$posts);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('posts.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
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

        return redirect('/posts')->with('success','Student Create');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $post= Post::find($id);
        return view('posts.show')->with('post',$post);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $post = Post::find($id);
        return view('posts.edit')->with('post',$post);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $this->validate($request,[
            'name'=>'required',
            'address'=>'required',
            'birthday'=>'required'
        ]);
        
        $student = Post::find($id);
        $student->name = $request->input('name');
        $student->address = $request->input('address');
        $student->birthday = $request->input('birthday');
        $student->save();

        return redirect('/posts')-> with('success','Post Updated');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $post = Post::find($id);
        $post->delete();
        return redirect('/posts')-> with('success','Post Deleted');
    }
}
