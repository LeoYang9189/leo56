Page({
  data: {
    quickActions: [
      {
        id: 1,
        name: '名片夹',
        icon: '/assets/icons/card-folder.png'
      },
      {
        id: 2,
        name: '询价管理',
        icon: '/assets/icons/inquiry-manage.png'
      },
      {
        id: 3,
        name: '报价管理',
        icon: '/assets/icons/quote-manage.png'
      },
      {
        id: 4,
        name: '客户管理',
        icon: '/assets/icons/customer-manage.png'
      },
      {
        id: 5,
        name: '线索池',
        icon: '/assets/icons/leads-pool.png'
      },
      {
        id: 6,
        name: '任务',
        icon: '/assets/icons/task.png'
      },
      {
        id: 7,
        name: '日程',
        icon: '/assets/icons/schedule.png'
      },
      {
        id: 8,
        name: 'BI报表',
        icon: '/assets/icons/bi-report.png'
      }
    ],
    todayStats: {
      customers: 15,
      inquiries: 28,
      quotes: 12
    },
    todoList: [
      {
        id: 1,
        type: 'urgent',
        tagText: '紧急',
        content: '跟进张总的报价方案',
        time: '10:30'
      },
      {
        id: 2,
        type: 'normal',
        tagText: '普通',
        content: '回复李经理的询价信息',
        time: '14:00'
      },
      {
        id: 3,
        type: 'normal',
        tagText: '普通',
        content: '更新客户资料',
        time: '16:30'
      }
    ]
  },

  onLoad: function() {
    // 使用 Promise 包装异步操作
    Promise.resolve().then(() => {
      // 页面加载时的初始化逻辑
    }).catch(err => {
      console.error('页面加载错误:', err)
    })
  },

  onShow: function() {
    // 使用 Promise 包装异步操作
    Promise.resolve().then(() => {
      // 页面显示时的逻辑
    }).catch(err => {
      console.error('页面显示错误:', err)
    })
  },

  onPullDownRefresh: function() {
    // 使用 Promise 包装异步操作
    Promise.resolve().then(() => {
      setTimeout(() => {
        wx.stopPullDownRefresh()
      }, 1500)
    }).catch(err => {
      console.error('下拉刷新错误:', err)
      wx.stopPullDownRefresh()
    })
  },

  onActionTap: function(e) {
    const actionId = e.currentTarget.dataset.id
    // 使用 Promise 包装异步操作
    Promise.resolve().then(() => {
      wx.showToast({
        title: '功能开发中',
        icon: 'none'
      })
    }).catch(err => {
      console.error('操作错误:', err)
    })
  }
}) 