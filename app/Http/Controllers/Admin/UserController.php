<?php

namespace App\Http\Controllers\Admin;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Http\Response;

class UserController extends Controller
{
    //
    public function users(Request $request)
    {
        $where = [];
        $user_info = ['data' => []];


        $users = User::select('id','avatar','username','email')->offset($request->start)->limit($request->length)->get();

        $user_count = User::count();
        $filtercount =$users->count();

        $user_info = ['data' => []];

        foreach ($users as $user) {
            $user_info['data'][] = $user;
        }

        $user_info['order'] = $request->input("order") ?: 0;
        $user_info['prop'] = $request->input("prop") ?: 0;
        $user_info['recordsTotal'] = $user_count;
        $user_info['recordsFiltered'] = $filtercount;
        $user_info['error'] = "";
        return new Response($user_info);
    }
}
