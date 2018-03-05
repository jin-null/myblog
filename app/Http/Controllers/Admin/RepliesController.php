<?php

namespace App\Http\Controllers\Admin;

use App\Models\Reply;
use App\Models\Topic;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Http\Controllers\Controller;

class RepliesController extends Controller
{
    //
    public function index(Request $request)
    {
        $where = [];
        $data_info = ['data' => []];


        $datas = Reply::select('id', 'topic_id','user_id', 'content')->offset($request->start)->limit($request->length)->get();

        $data_count = Reply::count();
        $filtercount = $datas->count();

        $data_info = ['data' => []];

        foreach ($datas as $data) {
            $data['author'] = User::where('id',$data->user_id)->value('username');
            $data['title'] = Topic::where('id',$data->topic_id)->value('title');
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
