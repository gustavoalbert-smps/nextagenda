<?php

namespace App\Models\Agenda;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Event extends Model
{
    protected $table = 'Events';

    protected $fillable = [
        'name',
        'start_date',
        'end_date',
        'allDay',
        'description'
    ];

    public function agenda(): HasOne
    {
        return $this->hasOne(Agenda::class);
    }
}
