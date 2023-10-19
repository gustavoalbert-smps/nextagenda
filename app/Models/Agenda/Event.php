<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    use HasFactory;

    protected $table = 'Events';

    protected $fillable = [
        'name',
        'start_date',
        'end_date',
        'allDay',
        'description'
    ];
}
