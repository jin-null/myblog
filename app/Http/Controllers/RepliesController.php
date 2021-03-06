<?php

namespace App\Http\Controllers;

use App\Http\Requests\ReplyRequest;
use App\Models\Reply;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class RepliesController extends Controller
{
    //

    public function __construct()
    {
        $this->middleware('auth');
    }

    public function store(ReplyRequest $request,Reply $reply)
    {
        $reply->content = $request->input('content');
        $reply->user_id = Auth::id();
        $reply->topic_id = $request->topic_id;
        $reply->save();

        return back()->with('success','回复成功！');
    }

    public function destroy(Reply $reply)
    {
        $this->authorize('destroy',$reply);
        $reply->delete();
        return redirect()->to($reply->topic->link())->with('success', '成功删除回复！');
    }
}
