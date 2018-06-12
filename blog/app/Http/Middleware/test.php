<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Routing\UrlGenerator;
use App\User;
use Illuminate\Support\Facades\Auth;

class test
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if (Auth::check())
        {
            if (auth()->user()->isAdmin==true)
            {
                return $next($request);
            }
            else 
            {
                throw new \Exception('You can\'t access this page, you fucker');
            }
        }
        else 
        {
            throw new \Exception('You aren\'t even logged in, you dumb shit!');
        }
    }
}
