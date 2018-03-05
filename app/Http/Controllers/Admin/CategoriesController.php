<?php

namespace App\Http\Controllers\Admin;

use App\Models\Category;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Http\Response;

class CategoriesController extends Controller
{
    //
    public function index(Request $request)
    {
        $where = [];
        $data_info = ['data' => []];


        $datas = Category::select('id','name','description')->offset($request->start)->limit($request->length)->get();

        $data_count = Category::count();
        $filtercount =$datas->count();

        $data_info = ['data' => []];

        foreach ($datas as $data) {
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
