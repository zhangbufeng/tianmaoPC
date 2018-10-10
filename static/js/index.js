$(function(){
    //顶部导航栏
    function down(item){
        item.mouseenter(function(){
            $(this).css('background',"#fff").find('.menu-bd').css('display','block')
            $(this).find('.zhezhao').css('display','block')
            $(this).find('b').css('transform','rotate(180deg)')
        })
        item.mouseleave(function(){
            $(this).css('background','#f2f2f2').find('.menu-bd').css('display','none')
            $(this).find('.zhezhao').css('display','none')
            $(this).find('b').css('transform','rotate(360deg)')
        })
    }
    var tb=$('.mytaobao')
    var scj=$('.favorite')
    var phone=$('.mobile')
    var zc=$('.seller')
    var wzdh=$('.sitemap')
    down(tb),down(scj),down(zc),down(wzdh)
    phone.mouseenter(function(){
        $(this).find('.sn-qrcode').css('display','block')
    })
    phone.mouseleave(function(){
        $(this).find('.sn-qrcode').css('display','none')
    })
    //轮播图侧选项卡移入效果
    var color=['#E74B7F','#588CF1','#6347ED','#E54077','#6347ED','#427DEF','#FA6666','#F8AE40','#F8AE40','#DD2727','#DD2727','#F7AB38','#3BC7B0','#DD2727','#3BC7B0','#3BC7B0']
    $('.wrap .item').mouseenter(function(){
        $(this).css("background","#fff")
        var index=$(this).index()
        $('.wrap .item .content').eq(index).css("display","block")
        $('.wrap .item').eq(index).find(".items1").css("color",color[index])
    })
    $('.wrap .item').mouseleave(function(){
        $(this).css("background-color","rgba(0,0,0,0)")
        var index=$(this).index()
        $('.wrap .item .content').eq(index).css("display","none")
        $('.wrap .item .items1').css("color","#fff")
    })
    //轮播图
    var t=setInterval(move,2500);
    var color2=['#EA0A02','#E8E8E8','#E9CDC1','#E8E8E8','#3E21D5','#0A78C5'];//最外层颜色变化
    var ban=$('.right .shops')
    var line=$('.right .line li')//相当于btn
    var index=0
    function move(){
        index++
        if(index==ban.length){
            index=0;
        }
        $('.category-con').css('background',color2[index])//分开写每一层变化
        line.css('background','#000')
        line.eq(index).css('background','#fff')
        ban.css("opacity","0")
        ban.eq(index).css("opacity","1")
    }
    line.mouseenter(function(){
        var index1=$(this).index();
        $('.category-con').css('background',color2[index1]);
        line.css('background','#000');
        line.eq(index1).css('background','#fff');
        ban.css("opacity","0");
        ban.eq(index1).css("opacity","1");
        index=index1;
    })
    $('.right').mouseenter(function(){
        clearInterval(t);
    })
    $('.right').mouseleave(function(){
        t=setInterval(move,2500);
    })
    //天猫超市轮播图
    var btn=$('.floor-tab-head li')
    var tmcs=$('.floor-tab-content')
    var tt=setInterval(keep,3000)
    var ind=0
    function keep(){
        ind++
        if(ind==btn.length){
            ind=0
        }
        btn.css('background','#F1F1F1')
        .eq(ind).css('background','#00B262')
        tmcs.css('display','none')
        .eq(ind).css('display','block')
    }
    btn.mouseenter(function(){
        var index=$(this).index()
        btn.css('background','#F1F1F1')
        .eq(index).css('background','#00B262')
        tmcs.css('display','none')
        .eq(index).css('display','block')
        ind=index;
        clearInterval(tt)
    })
    btn.mouseleave(function(){
        tt=setInterval(keep,3000)
    })
    //侧导航
    var vip=$('.mui-mbar-tab-prof')
    var money=$('.mui-mbar-tab-asset')
    var shouc=$('.mui-mbar-tab-favor')
    var isee=$('.mui-mbar-tab-foot')
    var cz=$('.mui-mbar-tab-charge')
    var top=$('.mui-mbar-tab-top')
    var fk=$('.mui-mbar-tab-ue')
    function aside(item){
        item.mouseenter(function(){
            item.find('.logo').css({
                background: '#ff0036',
            })
            // item.find('.bgg').css({
            //     display: 'block'
            // })
            item.find('.tips').css({
                right: '35px',
                display: 'block',
                transition: 'all .6s',
                opacity: 1,
            })
        })
        item.mouseleave(function(){
            item.find('.tips').css({
                right: '70px',
                display: 'block',
                opacity: 0,
            })
            item.find('.logo').css({
                background: '#000',
            })
        })
    }
    aside(vip),aside(money),aside(shouc),aside(isee),aside(cz),aside(top),aside(fk)
    //楼层跳转
    var arrHeight=$('.floor-con').map(function(){
        return $(this).offset().top;
    })
    var guess=$('.guess').offset().top;
    var flag=true;
    var sidebg=$('.fpLift a')
    var color3=['#64C333','#FF0036','#EA5F8D','#0AA6E8','#64C333','#EA5F8D','#19C8A9','#FF0036']
    arrHeight=arrHeight.toArray()
    arrHeight.push(guess)
    $(window).scroll(function(){
        if(!flag){
            return
        }
        var top=$(this).scrollTop()
        var index=arrHeight.findIndex((item)=>item>top-250)
        $(this).scrollTop() > 400 ? $(".mui-lift").slideDown():$(".mui-lift").slideUp()
        $(this).scrollTop() > 730 ? $(".middle-search").css('top','0'):$(".middle-search").css('top','-50px')
        if(index>=0){
            sidebg.css('background','rgba(0, 0, 0, 0.6)')
            .eq(index)
            .css('background',color3[index])
        }
    })

    sidebg.click(function(){
        var index=$(this).index()
        $("html").animate({scrollTop:arrHeight[index]-50},1000,function(){
            flag=true
        })
        sidebg.css('background','rgba(0, 0, 0, 0.6)')
        .eq(index)
        .css('background',color3[index])

    })
    $(".backTop").click(function(){
        $("html").animate({scrollTop:0},200)
    })
    // $('.s-combobox').blur(function () {
    //     $(this).val("")
    // })
    // $('.combobox-input').blur(function () {
    //     $(this).val("")
    // })

})