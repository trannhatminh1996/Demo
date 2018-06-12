<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Person extends Model
{
    public function types(){
        return $this->belongsToMany('App\Type');
    }
}
