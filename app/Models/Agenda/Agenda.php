<?php

namespace App\Models\Agenda;

use Illuminate\Database\Eloquent\Model;

class Agenda extends Model
{
    use AgendaRelationship;

    protected $fillable = [
        'user_id',
        'name',
        'status',
    ];   
}