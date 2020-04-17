let app = getApp()

Page({
  data:{
    userInfo: {},
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  onLoad:function() {

    var that = this;
     // 查看是否授权
     wx.getSetting({
      success (res){
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: function(res) {
              console.log('getUserInfo',res.userInfo)

              that.setData({ userInfo:  res.userInfo  });

            }
          })
        }
      }
    })
  
  


    // app.getUserInfo(userInfo => {
    //   this.setData({
    //     userInfo: userInfo
    //   })
    // })

  },
  navToPage(event) {
    let route = event.currentTarget.dataset.route
    wx.navigateTo({
      url: route
    })
  }

  ,
  bindGetUserInfo (e) {
    console.log('bindGetUserInfo:',e.detail.userInfo)
    
    this.setData({
      userInfo: e.detail.userInfo
    })
    

  }

})
