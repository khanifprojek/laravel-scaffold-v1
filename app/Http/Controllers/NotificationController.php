<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\User;

class NotificationController extends Controller
{
    public function markAsRead()
    {
        $user = User::find(Auth::id());

        return $user->unreadNotifications->markAsRead();
    }
}
