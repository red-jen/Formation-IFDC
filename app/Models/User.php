<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $fillable = [
        'name',
        'email',
        'password',
        'address',
        'phone_number',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];

    // User diploma field selections
    public function diplomaFields()
    {
        return $this->hasMany(UserDiplomaField::class);
    }

    // Get user's selected diplomas
    public function diplomas()
    {
        return $this->belongsToMany(Diploma::class, 'user_diploma_fields')
                    ->withPivot('field_id', 'status')
                    ->withTimestamps();
    }
}