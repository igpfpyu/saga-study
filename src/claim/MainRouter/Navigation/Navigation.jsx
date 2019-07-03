export default {
    //首页
    indexNavs:[
        {title:"在线课程", url:"/index", id:"0001"},
        {title:"课程管理", url:"/index/give-message", id:"0002"}
    ],
    //在线课程
    lessonNavs:[
        {
            title:"待完成列表", id:"1000", chids:[
                {title:"面授录入",url:"/lesson", id:"1001", chids:[]},
                {title:"面授管理",url:"/lesson/message",  id:"1002", chids:[]},
                {title:"面授审核", url:"/lesson/giveMessage2", id:"1003", chids:[]},
                {title:"面授报名审批",url:"/lesson/giveMessage1",  id:"1004", chids:[]},
                {title:"讲师面授管理",url:"/lesson/giveMessage3",  id:"1005", chids:[]}
            ]
        }, {
            title:"评估表", id:"1100",chids:[
                {title:"评估表管理", url:"/index01", id:"1101", chids:[]},
                {title:"评估表录入", url:"/index02", id:"1102", chids:[]},
                {title:"评估表审核", url:"/index03", id:"1103", chids:[]},
                {title:"目录管理", url:"/index04", id:"1104", chids:[]}
            ]
        }
        // ,{
        //     title:"讲师管理",id:"1200", chids:[
        //         {title:"讲师管理", url:"/", id:"1201", chids:[]},
        //         {title:"讲师课程管理", url:"/", id:"1202", chids:[]},
        //         {title:"讲师等级管理", url:"/", id:"1203", chids:[]},
        //         {title:"目录管理", url:"/", id:"1204", chids:[]},
        //     ]
        // },{
        //     title:"面授管理",id:"1300",chids:[
        //         {title:"课程管理", url:"/", id:"1301", chids:[]},
        //         {title:"课程审核", url:"/", id:"1303", chids:[]},
        //         {title:"目录管理", url:"/", id:"1304", chids:[]},
        //     ]
        // }
    ],
    coachNavs:[
        {id:"2000", title:'面授管理', chids:[
                {id:"1000", title:'面授管理', url:'/facem'},
                {id:"1001", title:'面授录入', url:'/facem/fimport'},
                {id:"1002", title:'面授目录', url:'/facem/facemCatalog'},
                {id:"1003", title:'面授报名审核', url:'/facem/fauditEnroll'}
            ]},
        {id:"2100", title:'评估表', chids:[
                {id:"2001", title:'评估表管理', url:'/assess/main'},
                {id:"2002", title:'评估表录入', url:'/assess/aimport'},
                {id:"2003", title:'评估表目录', url:'/assess/acatalog'},
            ]
        },
        {id:"2200", title:'讲师管理', chids:[
                {id:"2001", title:'讲师管理', url:'/lecturer/main' },
                {id:"2002", title:'讲师课程管理', url:'/lecturer/courses'},
                {id:"2003", title:'讲师等级管理', url:'/lecturer/levelManager'},
                {id:"2004", title:'讲师目录', url:'/lecturer/fmain'},
            ]
        },
        {id:"2300", title:'面授课程',url:"/kldjsf"},
    ]
}
