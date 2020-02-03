// // var 名字=text("二手手机").findOne();
// log (名字);
// var id=名字.id();
// // log("id---"+id);

// var 长按演示=id("f0i").findOne();
// log(长按演示);
// 长按演示.longClick();

// var 滚动控件=className("ListView").findOne();
// // log(滚动控件);
// // 滚动控件.scrollDown();
// var 滚动控件的子项=滚动控件.children();
// // log(滚动控件的子项);
// 滚动控件的子项.forEach((item,position)=>{
// //    log(item);
// var 评论=item.findOne(desc("评论"));
// 评论.click();
// sleep(1000); 
// log(position);


// });
while (true)
{
    点赞操作();
}

function 点赞操作()
{
    var 滚动控件=className("ListView").findOne();
    var 滚动控件的子项=滚动控件.children();
    滚动控件的子项.forEach((item,position)=>{
    var 评论=item.findOne(desc("评论"));
    if(评论)
    {
        评论.click();
        sleep(200);
        var 赞=text("赞").findOnce();
        if(赞){
            赞.parent().click();
        }
        sleep(1000);
    }

    })
    滚动控件.scrollDown();
    sleep(1000);
}
// var 文本框=className("EditText").findOne();
// log(文本框);
// 文本框.setText("你好啊");