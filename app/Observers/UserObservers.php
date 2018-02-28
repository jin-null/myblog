<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/2/5
 * Time: 17:29
 */

namespace App\Observers;


use App\Models\User;

class UserObservers
{
    public function saving(User $user)
    {
        // 这样写扩展性更高，只有空的时候才指定默认头像
        if (empty($user->avatar)) {
            $user->avatar = 'https://fsdhubcdn.phphub.org/uploads/images/201710/30/1/TrJS40Ey5k.png';
        }
    }
}