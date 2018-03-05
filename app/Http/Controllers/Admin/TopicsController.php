<?php

namespace App\Http\Controllers\Admin;

use App\Models\Category;
use App\Models\Topic;
use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Http\Response;

class TopicsController extends Controller
{
    //
    public function index(Request $request)
    {
        $where = [];
        $data_info = ['data' => []];


        $datas = Topic::select('id', 'title','user_id', 'category_id', 'reply_count')->offset($request->start)->limit($request->length)->get();

        $data_count = Topic::count();
        $filtercount = $datas->count();

        $data_info = ['data' => []];

        foreach ($datas as $data) {
            $data['author'] = User::where('id',$data->user_id)->value('username');
            $data['category'] = Category::where('id',$data->category_id)->value('name');
            $data_info['data'][] = $data;
        }

        $data_info['order'] = $request->input("order") ?: 0;
        $data_info['prop'] = $request->input("prop") ?: 0;
        $data_info['recordsTotal'] = $data_count;
        $data_info['recordsFiltered'] = $filtercount;
        $data_info['error'] = "";
        return new Response($data_info);
    }
}
