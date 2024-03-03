<?php

namespace App\Models;

use App\Models\Agenda\Agenda;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

trait UserRelationship
{
    /**
     * Get all of the agendas for the UserRelationship
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function agendas(): HasMany
    {
        return $this->hasMany(Agenda::class);
    }

    /**
     * The sharedAgendas that belong to the UserRelationship
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function sharedAgendas(): BelongsToMany
    {
        return $this->belongsToMany(Agenda::class, 'user_agenda');
    }
}
