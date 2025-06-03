<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\DiplomaController;
use App\Http\Controllers\FieldController;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/register', [RegisterController::class, 'register']);

Route::apiResource('diplomas', DiplomaController::class);



Route::apiResource('fields', FieldController::class);
Route::get('/diplomas/{diplomaId}/fields', [FieldController::class, 'getFieldsByDiploma']);
Route::get('/available-diplomas', [FieldController::class, 'getAvailableDiplomas']);

Route::get('/diplomas-with-fields', [DiplomaController::class, 'getDiplomasWithFields']);