<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Type extends Model
{
    public function people()
    {
        return $this->belongsToMany('App\Person');
    }
}
