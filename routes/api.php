<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\RegisterController;

// ... existing code ...

Route::post('/register', [RegisterController::class, 'register']);

// ... existing code ... 