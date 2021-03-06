var e = require("../../../components/goods/goods_send.js");

Page({
    data: {
        pageType: "PINTUAN",
        order_refund: null,
        express_index: null
    },
    onLoad: function(e) {
        getApp().page.onLoad(this, e);
        var o = this;
        getApp().core.showLoading({
            title: "正在加载"
        }), getApp().request({
            url: getApp().api.group.order.refund_detail,
            data: {
                order_refund_id: e.id
            },
            success: function(e) {
                0 == e.code && o.setData({
                    order_refund: e.data
                });
            },
            complete: function() {
                getApp().core.hideLoading();
            }
        });
    },
    onReady: function(e) {
        getApp().page.onReady(this);
    },
    onShow: function(o) {
        getApp().page.onShow(this), e.init(this);
    },
    onHide: function(e) {
        getApp().page.onHide(this);
    },
    onUnload: function(e) {
        getApp().page.onUnload(this);
    }
});