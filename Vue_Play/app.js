new Vue({
        el: "#vue-app",
        data: {
            MyName: "MisterWu",
            job: "web前端",
            website: "http://www.baidu.com",
            websiteTag: "<a href= \"http://www.baidu.com\">百度绑定</a>",
            page: 10,
            x: 0,
            y: 0,
            name: "",
            age: 0
        },
        methods: {
            greet: function(time) {
                return 'Good ~!' + time
            },
            add: function(dec) {
                this.page += dec
            },
            subtract: function(inc) {
                this.page -= inc
            },
            updateXY: function(event) {
                this.x = event.offsetX;
                this.y = event.offsetY;
            },
            logName: function() {
                console.log("正在输入姓名")
                this.name = this.$refs.name.value

            },
            logAge: function() {
                console.log("输入年龄")
                this.age = this.$refs.age.value
            }
        },
        computed: {
            add
        },
    })
    /*
     *method 存储方法
     *data用于数据存储
     *element元素，获取
     */