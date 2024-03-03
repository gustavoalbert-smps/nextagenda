<?php

namespace App\Models\Agenda;

use App\Models\User;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

trait AgendaRelationship
{

    /**
     * The members that belong to the AgendaRelationship
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function members(): BelongsToMany
    {
        return $this->belongsToMany(User::class, 'user_agenda');
    }
}
