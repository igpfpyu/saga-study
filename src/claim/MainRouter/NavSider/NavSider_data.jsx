export default {
    indexNav:[
        {
            title:"待完成列表", id:"1000", chids:[
                {title:"面授录入",url:"/index", id:"1001", chids:[]},
                {title:"面授管理",url:"/give",  id:"1002", chids:[]},
                {title:"面授审核", url:"/giveMessage", id:"1003", chids:[]},
                {title:"面授报名审批",url:"/giveMessage",  id:"1004", chids:[]},
                {title:"讲师面授管理",url:"/giveMessage",  id:"1005", chids:[]}
            ]
        }, {
            title:"评估表", id:"1100",chids:[
                {title:"评估表管理", url:"/", id:"1101", chids:[]},
                {title:"评估表录入", url:"/", id:"1102", chids:[]},
                {title:"评估表审核", url:"/", id:"1103", chids:[]},
                {title:"目录管理", url:"/", id:"1104", chids:[]}
            ]
        },{
            title:"讲师管理",id:"1200", chids:[
                {title:"讲师管理", url:"/", id:"1201", chids:[]},
                {title:"讲师课程管理", url:"/", id:"1202", chids:[]},
                {title:"讲师等级管理", url:"/", id:"1203", chids:[]},
                {title:"目录管理", url:"/", id:"1204", chids:[]},
            ]
        },{
            title:"面授管理",id:"1300",chids:[
                {title:"课程管理", url:"/", id:"1301", chids:[]},
                {title:"课程审核", url:"/", id:"1303", chids:[]},
                {title:"目录管理", url:"/", id:"1304", chids:[]},
            ]
        }
    ]
}
