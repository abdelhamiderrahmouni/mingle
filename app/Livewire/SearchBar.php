<?php

namespace App\Livewire;

use App\Contracts\HasMingles;
use App\Models\User;
use App\Traits\InteractsWithMingles;
use Livewire\Attributes\Renderless;
use Livewire\Component;

class SearchBar extends Component implements HasMingles
{
    use InteractsWithMingles;

    public function component(): string
    {
        return 'resources/js/search-bar/index.js';
    }

    public function mingleData(): array
    {
        return [
            'users' => $this->usersQuery()->get(),
        ];
    }

    public function usersQuery()
    {
        return User::query()
            ->where('id', '>', 5);
    }

    #[Renderless]
    public function search(string $searchQuery)
    {
        return $this->usersQuery()
            ->where(function ($query) use ($searchQuery) {
                $query->where('name', 'like', "%$searchQuery%")
                    ->orWhere('email', 'like', "%$searchQuery%");
            })
            ->get();
    }

    public function doubleIt($amount)
    {
        return $amount * 2;
    }
}
