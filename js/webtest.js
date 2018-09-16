new Vue({
  el: '#webtest',
  data: {
    webtest:[
        {
            title:'1.制作级联菜单功能时调用的是下拉列表框的（）事件。',
            resolution:'这么简单都不会',
            trueTitle:'A',
            select:[
                {
                    name:'select1',
                    forId:'A1',
                    value:1,
                    conunt:1,
                    content:'A. onChange '


                },
                {
                    name:'select1',
                    forId:'A2',
                    value:2,
                    conunt:1,
                    content:'B. onFocus '

                },
                {
                    name:'select1',
                    forId:'A3',
                    value:3,
                    conunt:1,
                    content:'C. selected '

                },
                {
                    name:'select1',
                    forId:'A4',
                    value:4,
                    conunt:1,
                    content:'D. onClick '

                }
            ]

        },
        {
            title:'2.下列属性哪一个能够实现层的隐藏?（）',
            resolution:'这么简单都不会',
            trueTitle:'C',
            select:[
                {
                    name:'select2',
                    forId:'B5',
                    value:1,
                    conunt:2,
                    content:'A. display:fals '

                },
                {
                    name:'select2',
                    forId:'B6',
                    value:2,
                    conunt:2,
                    content:'B. display:hidden '
                },
                {
                    name:'select2',
                    forId:'B7',
                    value:3,
                    conunt:2,
                    content:'C. display:none '
                },
                {
                    name:'select2',
                    forId:'B8',
                    value:4,
                    conunt:2,
                    content:'D. display:” ”'
                }
            ]

        },
        {
            title:'3.下列哪一个选项不属于document对象的方法?（ ）',
            resolution:'这么简单都不会',
            trueTitle:'D',
            select:[
                {
                    name:'select3',
                    forId:'B9',
                    value:1,
                    conunt:3,
                    content:'A. focus() '

                },
                {
                    name:'select3',
                    forId:'B10',
                    value:2,
                    conunt:3,
                    content:'B. getElementById() '
                },
                {
                    name:'select3',
                    forId:'B11',
                    value:3,
                    conunt:3,
                    content:'C. getElementsByName() '
                },
                {
                    name:'select3',
                    forId:'B12',
                    value:4,
                    conunt:3,
                    content:'D. bgColor() '
                }
            ]

        },
        {
            title:'4.以下有关pixelTop属性与top属性的说法正确的是。( ) ',
            resolution:'这么简单都不会',
            trueTitle:'D',
            select:[
                {
                    name:'select4',
                    forId:'B13',
                    value:1,
                    conunt:4,
                    content:'A. 都是Location对象的属性'

                },
                {
                    name:'select4',
                    forId:'B14',
                    value:2,
                    conunt:4,
                    content:'B. 使用时返回值都是字符串'
                },
                {
                    name:'select4',
                    forId:'B15',
                    value:3,
                    conunt:4,
                    content:'C. 都是返回以像素为单位的数值'
                },
                {
                    name:'select4',
                    forId:'B16',
                    value:4,
                    conunt:4,
                    content:'D. 以上都不对'
                }
            ]

        },
        {
            title:'5.从1000000000000个书中选择最小的20个数，用以下那种排序算法比较方便？',
            resolution:'堆排序适合处理大量数据的排序问题http://www.jianshu.com/p/7d037c332a9d',
            trueTitle:'D',
            select:[
                {
                    name:'select5',
                    forId:'B17',
                    value:1,
                    conunt:5,
                    content:'A. 归并排序'

                },
                {
                    name:'select5',
                    forId:'B18',
                    value:2,
                    conunt:5,
                    content:'B. 快速排序'
                },
                {
                    name:'select5',
                    forId:'B19',
                    value:3,
                    conunt:5,
                    content:'C. 插入排序'
                },
                {
                    name:'select5',
                    forId:'B20',
                    value:4,
                    conunt:5,
                    content:'D. 堆排序'
                }
            ]

        },
        {
            title:'6.JavaScript中window对象的子对象不包含以下哪个对象？',
            resolution:'window的主对象主要有如下几个：window、self、window.self三者是等价的。document   frames   history  location   navigator   screen',
            trueTitle:'D',
            select:[
                {
                    name:'select6',
                    forId:'B21',
                    value:1,
                    conunt:6,
                    content:'A. document'

                },
                {
                    name:'select6',
                    forId:'B22',
                    value:2,
                    conunt:6,
                    content:'B. self'
                },
                {
                    name:'select6',
                    forId:'B23',
                    value:3,
                    conunt:6,
                    content:'C. history'
                },
                {
                    name:'select6',
                    forId:'B24',
                    value:4,
                    conunt:6,
                    content:'D. message'
                }
            ]

        },
        {
            title:'7.下面不属于TCP协议拥塞控制部分的是（）',
            resolution:' TCP的拥塞控制由4个核心算法组成：“快速重传 ”（Fast Retransmit）、“拥塞避免”（Congestion voidance）、 “慢启动”（Slow Start）“快速恢复”（Fast Recovery',
            trueTitle:'B',
            select:[
                {
                    name:'select7',
                    forId:'B25',
                    value:1,
                    conunt:7,
                    content:'A. 快速重传 '

                },
                {
                    name:'select7',
                    forId:'B26',
                    value:2,
                    conunt:7,
                    content:'B. 带外数据'
                },
                {
                    name:'select7',
                    forId:'B27',
                    value:3,
                    conunt:7,
                    content:'C. 慢启动'
                },
                {
                    name:'select7',
                    forId:'B28',
                    value:4,
                    conunt:7,
                    content:'D. 快速恢复'
                }
            ]

        },
        {
            title:'8.var arr = [] ;typeof arr 的结果是：',
            resolution:'5种简单数据类型（也称基本数据类型）：Undefined、Null、Boolean、Number、String1种复杂数据类型：Object（基本上除了上述5种，其余都是Object',
            trueTitle:'C',
            select:[
                {
                    name:'select8',
                    forId:'B29',
                    value:1,
                    conunt:8,
                    content:'A. array'

                },
                {
                    name:'select8',
                    forId:'B30',
                    value:2,
                    conunt:8,
                    content:'B. function'
                },
                {
                    name:'select8',
                    forId:'B31',
                    value:3,
                    conunt:8,
                    content:'C. object'
                },
                {
                    name:'select8',
                    forId:'B32',
                    value:4,
                    conunt:8,
                    content:'D. undefined'
                }
            ]

        },
        {
            title:'9.一个栈的入栈顺序是1,2,3,4,5，则栈的不可能输出顺序是：',
            resolution:'A.先进先出，12345按顺序入栈，在分别出栈 B.先进后出，12345按顺序入栈，在分别出栈；C.先进后出，1不可能在2之前先出栈 D.先进后出，1234入栈，4出栈，5入栈，5321出栈',
            trueTitle:'D',
            select:[
                {
                    name:'select9',
                    forId:'B33',
                    value:1,
                    conunt:9,
                    content:'A. 12345'

                },
                {
                    name:'select9',
                    forId:'B34',
                    value:2,
                    conunt:9,
                    content:'B. 54321'
                },
                {
                    name:'select9',
                    forId:'B35',
                    value:3,
                    conunt:9,
                    content:'C. 43512'
                },
                {
                    name:'select9',
                    forId:'B36',
                    value:4,
                    conunt:9,
                    content:'D. 45321'
                }
            ]

        },
        {
            title:'10.下列那些不是vue的优点？',
            resolution:'独立开发。开发人员可以专注于业务逻辑和数据的开发（ViewModel），设计人员可以专注于页面设计，使用Expression Blend可以很容易设计界面并生成xml代码。',
            trueTitle:'C',
            select:[
                {
                    name:'select10',
                    forId:'B37',
                    value:1,
                    conunt:10,
                    content:'A. 低耦合。'

                },
                {
                    name:'select10',
                    forId:'B38',
                    value:2,
                    conunt:10,
                    content:'B. 可重用性'
                },
                {
                    name:'select10',
                    forId:'B39',
                    value:3,
                    conunt:10,
                    content:'C. 不可独立开发'
                },
                {
                    name:'select10',
                    forId:'B40',
                    value:4,
                    conunt:10,
                    content:'D. 可测试'
                }
            ]

        }


    ],
    checkvalue:[0],
    truevalue:[0,1,3,4,4,4,4,2,3,4,3],
    errnum:0,
    errlist:[],
    truenum:0,
    errtitle:[],
    timeout:'',
    present:[
        {name:'成长历史'},
        {name:'人员介绍'},
        {name:'日常论坛'}
    ],
    changeRed:0,
    history:[
        {
            list:[
                {
                    src:'img/photo.jpg',
                    time:'2017/12/25',
                    content:'本群创建于2017/12/25:  本群是前端学习群,欢迎各位新人加群一起讨论一起学习,人生没有宏伟蓝图,有的只是一个一个的脚印,在这里你可以学习交流,闲暇之余一起聊聊天,共同进步,共同学习。'
                },
                {
                    src:'img/photo.jpg',
                    time:'2018/4/25',
                    content:'本群人数达到百人,男生80%,90后60%;单身38人。'
                }
            ]
        },
        {
            list:[
                {
                    src:'img/dudu.jpg',
                    time:'后台——嘟嘟',
                    motto:'',
                    content:'集帅气和天才于一身的全栈大佬,精通go,java,js等等'
                },
                {
                    src:'img/yaya.jpg',
                    time:'前端——傻丫',
                     motto:'',
                    content:'一个超阔爱的小美女,精通vue,爱吃爱玩,爱撒娇'
                },
                {
                    src:'img/bobo.jpg',
                    time:'前端——啵啵(啵小啵)',
                     motto:'座右铭：今天我要用我的实力，来证明我的弱小。',
                    content:'一个隐形大佬,精通前端各种类库,框架,当然也是后台的忠实爱好者'
                },
                {
                    src:'img/photo.jpg',
                    time:'前端——胡胡',
                     motto:'座右铭：我特么for循环到哪了！',
                    content:'一个集可爱与搞笑于一身的jq大佬,精通前端各类框架与类库,别忘了他那只逗比的狗。'
                },

                {
                    src:'img/ersi.jpg',
                    time:'前端——24',
                    motto:'座右铭：我做错了什么？',
                    content:'当然他已经25了,精通vue node.js,帅气前端大佬'
                },
                {
                    src:'img/mengmeng.jpg',
                    time:'后台——梦梦(九月)',
                     motto:'',
                    content:'别以为他是个妹子,然而,并不是,精通java,王者段位荣耀王者'
                },
                {
                    src:'img/momo.jpg',
                    time:'前端——沫沫',
                     motto:'',
                    content:'群里最会把妹的男人,一不小心又被他拐走一个妹子,当然也是绝对的实力派,精通前端各类框架'
                },
                {
                    src:'img/buhui.jpg',
                    time:'前端——不悔妹妹',
                     motto:'座右铭：即使生活欺骗了你，你也要笑着走下去.自己的人生自己定格就好，你所谓的命运，只是你自欺欺人的借口。',
                    content:'看图就知道,又被秀了一把,没错就是沫沫女朋友,也是一个正在入坑的妹子,听说舞蹈跳的不错呦！'
                },
                {
                    src:'img/jianjian.jpg',
                    time:'前端——贱贱',
                    motto:'座右铭：天空阴霾，隐约雷鸣，但盼风雨来，留君在此地。',
                    content:'好吧,人如其名,刻苦学习,群里最能逼逼的,最小的男孩'
                },
                {
                    src:'img/sheji.jpg',
                    time:'前端——小设计(七尺画烽烟)',
                    motto:'座右铭：是我做的但我不会做，不代表我以后不会做。',
                    content:'没错，这就是我们群里集帅气与实力以一身的唯一男设计'
                },
            ]
        },
        {
            list:[
                {
                    src:'img/photo.jpg',
                    time:'技能段位分布',
                    content:'青铜-了解html,css标签,白银-了解html,css标签,了解一点js,黄金-熟悉html,css3标签,熟悉js,熟悉常用类库,铂金-熟悉html5,css3,js,熟悉常用类库,数据交互,各种问题的解决方案,预编译语言,了解vue,react开发方式框架,钻石-熟悉html5,css3,js,熟悉常用类库,预编译语言,小程序,熟悉vue,react,angular框架一种或多种的运用,有一年项目经验,星耀-熟悉html5,css3,js,熟悉常用类库,预编译语言,小程序,熟悉vue,react,angular框架多种的运用,熟悉一种或多种后台语言有三年项目经验。王者-熟悉html5,css3,js,熟悉常用类库,预编译语言,小程序,精通悉vue,react,angular框架多种的运用,熟悉一种或多种后台语言有5年项目经验。荣耀王者-熟悉html5,css3,js,熟悉常用类库,预编译语言,小程序,精通悉vue,react,angular框架多种的运用,熟悉一种或多种后台语言有10年项目经验。'
                }
            ]
        }
    ]
  },
  created(){
    var winHeight = $(window).height();
    var time = 0;
    $('.weblist_error_center').height(winHeight);
    $('.webtestIndex').height(winHeight);
    $('.webteststart').height(winHeight);
    $('.present_mode').height(winHeight);
    timer=setInterval(function (){
        time++;
        var m=parseInt(time/3600)
        var s=parseInt(time/60%60);
        var M=parseInt(time%60);
        $('.Time').text(toDub(m)+":"+toDub(s)+":"+toDub(M));
    },1000/60);
    function toDub(n){

        return n<10?"0"+n:""+n;
    }
  },
  methods:{
    submit(){
        var selsectvalue =  this.checkvalue;
        var truevalue = this.truevalue;
        var count = 0;
        clearInterval(timer);
        this.timeout = $('.Time').text();
        $('.webtest_modal').show();

            for(var i = 0;i<truevalue.length;i++){

                if(selsectvalue[i]!=truevalue[i]){

                    this.errlist.push(i);

                    this.errtitle.push(this.webtest[i-1])

                    }
                }

            this.errnum = this.errlist.length;
            this.truenum = truevalue.length-this.errnum-1;

    },
    resolve() {
        $('.weblist_error').slideDown('slow');

    },
    upslide(){
        $('.weblist_error').slideUp();
    },
    modeHide(){
        $('.webtest_modal').hide();
    },
    aside(){
        $('.webtest_aside').animate({
            right:0
        }, 500)
        $('.present_mode').show();
    },
    asideli(index,e){
        var titleText = e.target.innerText;
        $('.present_title').text(titleText);
        $('.webtest_aside').animate({
            right:'-'+2.1+'rem'
        }, 500)
         $('.present_mode').hide();
        this.changeRed = index;
        $('.webtest_history ul').find('li').eq(index).show();
        $('.webtest_history ul').find('li').eq(index).siblings().hide();

    }


  }
})

