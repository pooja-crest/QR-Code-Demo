<?php

namespace App\Observers;

use App\Models\User;

class UserObserver
{
    /**
     * @param User $user
     */
    public function creating(User $user)
    {
        $user->code_text = strtolower(generate_search_string($user->code));
        $user->name_text = strtolower(generate_search_string($user->name));
    }

    /**
     * @param User $user
     */
    public function updating(User $user)
    {
        $user->code_text = strtolower(generate_search_string($user->code));
        $user->name_text = strtolower(generate_search_string($user->name));
    }

    /**
     * @param User $user
     */
    public function saving(User $user)
    {
        $user->code_text = strtolower(generate_search_string($user->code));
        $user->name_text = strtolower(generate_search_string($user->name));
    }

    /**
     * @param User $user
     */
    public function updated(User $user)
    {
        $user->code_text = strtolower(generate_search_string($user->code));
        $user->name_text = strtolower(generate_search_string($user->name));
    }

    /**
     * @param User $user
     */
    public function deleted(User $user)
    {
        //
    }

    /**
     * @param User $user
     */
    public function restored(User $user)
    {
        //
    }

    /**
     * @param User $user
     */
    public function forceDeleted(User $user)
    {
        //
    }
}
