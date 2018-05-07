<style scoped>
.layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}
.layout-logo{
    width: 100px;
    height: 5px;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 1px;
    left: 20px;
}
h3{
    color: #eee
}
.layout-nav{
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
}
.layout-footer-center{
    text-align: center;
}
</style>
<template>
    <div class="layout">
        <Layout>
            <Header>
                <Menu mode="horizontal" theme="dark" active-name="1" @on-select = 'routeTo'>
                    <div class="layout-logo">
                    <h3>学生预约中心</h3>
                </div>
                    <div class="layout-nav">
                        <MenuItem name="UserInfo">
                            <Icon type="ios-navigate"></Icon>
                            <a>
                            用户档案
                            </a>
                        </MenuItem>
                        <MenuItem name="2">
                            <Icon type="ios-keypad"></Icon>
                            <a >
                            需要帮助
                            </a>
                        </MenuItem>
                        <MenuItem name="/">
                            <Icon type="ios-analytics"></Icon>
                            <a>
                            注销登录
                            </a>
                        </MenuItem>
                        
                    </div>
                </Menu>
            </Header>
            <Layout :style="{padding: '0 50px'}">
                <Breadcrumb :style="{margin: '16px 0'}">
                    <BreadcrumbItem>Home</BreadcrumbItem>
                    <BreadcrumbItem>Components</BreadcrumbItem>
                    <BreadcrumbItem>Layout</BreadcrumbItem>
                </Breadcrumb>
                <Content :style="{padding: '24px 0', minHeight: '280px', background: '#fff'}">
                    <Layout>
                        <Sider hide-trigger :style="{background: '#fff'}">
                            <Menu active-name="1-1" theme="light" width="auto" :open-names="['1']" @on-select = 'routeTo'>
                                <Submenu name="1">
                                    <template slot="title">
                                        <Icon type="ios-navigate"></Icon>
                                        开始预约
                                    </template>
                                    <MenuItem name="faqiyuyue">发起预约</MenuItem>
                                    <MenuItem name="1-2">预约反馈</MenuItem>
                                    <MenuItem name="1-3">预约响应</MenuItem>
                                </Submenu>
                                <Submenu name="2">
                                    <template slot="title">
                                        <Icon type="ios-keypad"></Icon>
                                        教师查询
                                    </template>
                                    <MenuItem name="OriginTeachers">教师名单</MenuItem>
                                </Submenu>
                                <Submenu name="3">
                                    <template slot="title">
                                        <Icon type="ios-analytics"></Icon>
                                        更多
                                    </template>
                                    <MenuItem name="3-1"></MenuItem>
                                    <MenuItem name="3-2">Option 2</MenuItem>
                                </Submenu>
                            </Menu>
                        </Sider>
                        <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
                            <router-view/>
                        </Content>
                    </Layout>
                </Content>
            </Layout>
            <Footer class="layout-footer-center">2010-2018 &copy; 八年老兵代表队</Footer>
        </Layout>
    </div>
</div>
</template>
<script>
    export default {
        data () {
            return {
                formItem: {
                    input: '',
                    select: '',
                    radio: 'male',
                    checkbox: [],
                    switch: true,
                    date: '',
                    time: '',
                    slider: [20, 50],
                    textarea: ''
                }
            }
        },
        methods: {
            routeTo (e) {
          this.$router.push(e)
         },
        }
    }
</script>