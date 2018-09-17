new Vue({
  el: '#webtest',
  data: {
    webtest:[
        {
            title:'1.假设今天是2006年4月1日星期六,请问以下javascript代码输出结果是()var time = new Date()document.write(time.getDate( ));',
            resolution:'这么简单都不会',
            trueTitle:'C',
            select:[
                {
                    name:'select1',
                    forId:'A1',
                    value:1,
                    conunt:1,
                    content:'A. 2006 '


                },
                {
                    name:'select1',
                    forId:'A2',
                    value:2,
                    conunt:1,
                    content:'B. 4 '

                },
                {
                    name:'select1',
                    forId:'A3',
                    value:3,
                    conunt:1,
                    content:'C. 1 '

                },
                {
                    name:'select1',
                    forId:'A4',
                    value:4,
                    conunt:1,
                    content:'D. 6 '

                }
            ]

        },
        {
            title:'2.在HTML文档对象模型(DOM)中,history对象的(   )方法用于加载历史列表中的下一个URL页面。',
            resolution:'这么简单都不会',
            trueTitle:'C',
            select:[
                {
                    name:'select2',
                    forId:'B5',
                    value:1,
                    conunt:2,
                    content:'A. next( ) '

                },
                {
                    name:'select2',
                    forId:'B6',
                    value:2,
                    conunt:2,
                    content:'B. history( ) '
                },
                {
                    name:'select2',
                    forId:'B7',
                    value:3,
                    conunt:2,
                    content:'C. forword( )'
                },
                {
                    name:'select2',
                    forId:'B8',
                    value:4,
                    conunt:2,
                    content:'D. go(-1)'
                }
            ]

        },
        {
            title:'3.关于bind( )方法与unbind( )方法说法正确的是(    )',
            resolution:'这么简单都不会',
            trueTitle:'C',
            select:[
                {
                    name:'select3',
                    forId:'B9',
                    value:1,
                    conunt:3,
                    content:'A. bind( )方法可用来移除单个或多个事件'

                },
                {
                    name:'select3',
                    forId:'B10',
                    value:2,
                    conunt:3,
                    content:'B. unbind( )方法可以同时移除多个事件，但不能移除单个事件'
                },
                {
                    name:'select3',
                    forId:'B11',
                    value:3,
                    conunt:3,
                    content:'C. 使用bind( )方法可同时绑定鼠标事件和键盘事件 '
                },
                {
                    name:'select3',
                    forId:'B12',
                    value:4,
                    conunt:3,
                    content:'D. unbind( )方法不是与bind( )方法对应的方法'
                }
            ]

        },
        {
            title:'4.在JQuery中，课用于获取和设置元素属性值的方法是( ) ',
            resolution:'这么简单都不会',
            trueTitle:'B',
            select:[
                {
                    name:'select4',
                    forId:'B13',
                    value:1,
                    conunt:4,
                    content:'A. val( )'

                },
                {
                    name:'select4',
                    forId:'B14',
                    value:2,
                    conunt:4,
                    content:'B. attr( )'
                },
                {
                    name:'select4',
                    forId:'B15',
                    value:3,
                    conunt:4,
                    content:'C. removeAttr( )'
                },
                {
                    name:'select4',
                    forId:'B16',
                    value:4,
                    conunt:4,
                    content:'D. css( )'
                }
            ]

        },
        {
            title:'5.对字符串str="welcome to china"进行下列操作处理,描述结果正确的是(   )',
            resolution:'str.substring(1,5)不包含第5个,str.indexOf("come",4)从第四个开始寻找,str.toUpperCase( )转换成大写。',
            trueTitle:'B',
            select:[
                {
                    name:'select5',
                    forId:'B17',
                    value:1,
                    conunt:5,
                    content:'A. str.substring(1,5)的返回值是"elcom"'

                },
                {
                    name:'select5',
                    forId:'B18',
                    value:2,
                    conunt:5,
                    content:'B. str.length的返回值16'
                },
                {
                    name:'select5',
                    forId:'B19',
                    value:3,
                    conunt:5,
                    content:'C. str.indexOf("come",4)的返回值为4'
                },
                {
                    name:'select5',
                    forId:'B20',
                    value:4,
                    conunt:5,
                    content:'D. str.toUpperCase( )的返回值是"Welcome To China"'
                }
            ]

        },
        {
            title:'6.腾讯QQ号从10000开始，目前最高位10位，(   )可以匹配QQ号',
            resolution:'',
            trueTitle:'B',
            select:[
                {
                    name:'select6',
                    forId:'B21',
                    value:1,
                    conunt:6,
                    content:'A. /^[1-9][0-9]{4,10}$/'

                },
                {
                    name:'select6',
                    forId:'B22',
                    value:2,
                    conunt:6,
                    content:'B. /^[1-9][0-9]{4,9}$/'
                },
                {
                    name:'select6',
                    forId:'B23',
                    value:3,
                    conunt:6,
                    content:'C. /^\d{5,10}$/'
                },
                {
                    name:'select6',
                    forId:'B24',
                    value:4,
                    conunt:6,
                    content:'D. /^\d[5,10]$/'
                }
            ]

        },
        {
            title:'7.对于Math对象常用方法，以下描述不正确的是(   )',
            resolution:'D:0-1之间',
            trueTitle:'D',
            select:[
                {
                    name:'select7',
                    forId:'B25',
                    value:1,
                    conunt:7,
                    content:'A. ceil( ) 向上舍入 '

                },
                {
                    name:'select7',
                    forId:'B26',
                    value:2,
                    conunt:7,
                    content:'B. floor( )向下舍入'
                },
                {
                    name:'select7',
                    forId:'B27',
                    value:3,
                    conunt:7,
                    content:'C. round( )四舍五入'
                },
                {
                    name:'select7',
                    forId:'B28',
                    value:4,
                    conunt:7,
                    content:'D. random( )返回0~1中的随机数，包括0和1'
                }
            ]

        },
        {
            title:'8.在Jquery中，下列关于DOM操作的说法错误的是(   )',
            resolution:'',
            trueTitle:'C',
            select:[
                {
                    name:'select8',
                    forId:'B29',
                    value:1,
                    conunt:8,
                    content:'A. $(A).append(B)表示将B追加到A中'

                },
                {
                    name:'select8',
                    forId:'B30',
                    value:2,
                    conunt:8,
                    content:'B. $(A).appendTo(B)表示把A追加到B中'
                },
                {
                    name:'select8',
                    forId:'B31',
                    value:3,
                    conunt:8,
                    content:'C. $(A).after(B)表示将A插入到B以后 '
                },
                {
                    name:'select8',
                    forId:'B32',
                    value:4,
                    conunt:8,
                    content:'D. $(A).insertAfter(B)表示将A插入到B以后'
                }
            ]

        },
        {
            title:'9.盒子的Margin为20px border为1px,padding为10px,content宽202px, 高为50px求标准IE盒子模型的，盒子的实际大小的高为(    )',
            resolution:'在标准模式下，一个块的总宽度= width + margin(左右) + padding(左右) + border(左右);在怪异模式下，一个块的总宽度= width + margin(左右)（即width已经包含了padding和border值）',
            trueTitle:'A',
            select:[
                {
                    name:'select9',
                    forId:'B33',
                    value:1,
                    conunt:9,
                    content:'A. 50px'

                },
                {
                    name:'select9',
                    forId:'B34',
                    value:2,
                    conunt:9,
                    content:'B. 70px '
                },
                {
                    name:'select9',
                    forId:'B35',
                    value:3,
                    conunt:9,
                    content:'C. 72px'
                },
                {
                    name:'select9',
                    forId:'B36',
                    value:4,
                    conunt:9,
                    content:'D. 52px '
                }
            ]

        },
        {
            title:'10.下面那个不是vuex的属性？',
            resolution:'参考：https://www.jianshu.com/p/b1dd80f4d542',
            trueTitle:'D',
            select:[
                {
                    name:'select10',
                    forId:'B37',
                    value:1,
                    conunt:10,
                    content:'A. State'

                },
                {
                    name:'select10',
                    forId:'B38',
                    value:2,
                    conunt:10,
                    content:'B. Getter'
                },
                {
                    name:'select10',
                    forId:'B39',
                    value:3,
                    conunt:10,
                    content:'C. Mutation '
                },
                {
                    name:'select10',
                    forId:'B40',
                    value:4,
                    conunt:10,
                    content:'D. Actions'
                }
            ]

        }


    ],
    checkvalue:[0],
    truevalue:[0,3,3,3,2,2,2,4,3,1,4],
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
                    motto:'座右铭：挣很多的钱，娶个媳妇度过余生。',
                    content:'当然他已经25了,精通vue node.js,帅气前端大佬'
                },
                {
                    src:'img/mengmeng.jpg',
                    time:'后台——梦梦(九月)',
                     motto:'座右铭：高峰只对攀登它的人来说才真正有意义',
                    content:'别看她是个妹子,精通java,王者段位荣耀王者'
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
                {
                    src:'img/dengyan.jpg',
                    time:'前端——外包小哥(瞪眼有益健康)',
                    motto:'座右铭：苦逼的外包小哥。',
                    content:'好吧,第一眼看到这张图就知道她是母猫,又一个喜欢猫的初级前端小帅哥,看起来很害羞的样子。'
                },
                {
                    src:'img/jingjing.jpg',
                    time:'前端——静静(静静大佬)',
                    motto:'座右铭：在这个世界上总要有些信仰，来麻醉自己，去鼓励他人。',
                    content:'又是一个逗比前端,又是一个老司机,群内最早的元老之一,神龙见首不见尾。'
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

