//index.js
//获取应用实例
var app = getApp()
Page({
  data: {

    userInfo: {},
  
  },
  add: function(e) {
    this.setData({
      data: this.data.count + 1
      
    })
  },
  viewTap: function() {
    console.log('view tap')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})

