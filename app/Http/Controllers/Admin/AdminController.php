<?php

namespace App\Http\Controllers\Admin;

use App\Models\Admin;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class AdminController extends Controller
{
    //

    public function __construct()
    {
        $this->middleware('auth.admin:admin');
    }
    public function user(Request $request)

    {
        return auth()->guard('admin')->user();
    }
    public function index(Request $request)
    {
       return view('admin.index');
    }
}
