(function() {
    
    
    $('.mnav.s-top-more-btn a[name="tj_briicon"]').css("color", "red");

    // 通过jqeury 找到真实对应的元素，给其禁用
    // 找到 gitlab 中页面上是合入到 master 的按钮
    // 给按钮改样式 并且 再将按钮禁用掉
    // 进一步，提供一个 switch 开关，允许对这个操作进行打开和关闭

    console.log('这是 22223 的content-script！', $('.mnav.s-top-more-btn a[name="tj_briicon"]'));


    // 此代码验证 给 input 框填充值
    $('#kw').val('hello world');

})();