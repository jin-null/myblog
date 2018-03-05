export default [{
    index: '1',
    label: 'dashboard',
    icon: 'glyphicon glyphicon-dashboard',
    uri: '/'
}, {
    index: '2',
    label: '用户管理',
    icon: 'glyphicon glyphicon-user',
    uri: '/users'
}, {
    index: '3',
    label: '内容管理',
    icon: 'glyphicon glyphicon-th-list',
    children: [{
        index: '3-1',
        label: '分类管理',
        icon: 'glyphicon glyphicon-th-large',
        uri: '/categories'
    }, {
        index: '3-2',
        label: '话题管理',
        icon: 'glyphicon glyphicon-list',
        uri: '/topics'
    }, {
        index: '3-3',
        label: '回复管理',
        icon: 'glyphicon glyphicon-list-alt',
        uri: '/replies'
    }],
}, {
    index: '4',
    label: '网站管理',
    icon: 'glyphicon glyphicon-sunglasses',
    uri: '/sites'
}]
