<?php

namespace App\Livewire;

use App\Contracts\HasMingles;
use App\Traits\InteractsWithMingles;
use Illuminate\Support\Collection;
use Livewire\Component;

class AnimatedCards extends Component implements HasMingles
{
    use InteractsWithMingles;

    public function component(): string
    {
        return 'resources/js/animated-cards/index.js';
    }

    public function mingleData(): array
    {
        return [
            'message' => 'Message in a bottle 🍾',
        ];
    }

    public function doubleIt($amount)
    {
        return $amount * 2;
    }
}
