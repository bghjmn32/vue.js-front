<template>
    <Table border :columns="columns7" :data="data6"></Table>
</template>
<script>
    export default {
        data () {
            return {
                columns7: [
                    {
                        title: 'Name',
                        key: 'name',
                        render: (h, params) => {
                            return h('div', [
                                h('Icon', {
                                    props: {
                                        type: 'person'
                                    }
                                }),
                                h('strong', params.row.name)
                            ]);
                        }
                    },
                    {
                        title: 'Age',
                        key: 'age'
                    },
                    {
                        title: '领域',
                        key: 'research'
                    },
                    {
                        title: '选择',
                        key: 'action',
                        width: 150,
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.show(params.index)
                                        }
                                    }
                                }, '更多'),
                                h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                            this.remove(params.index)
                                        }
                                    }
                                }, '不考虑')
                            ]);
                        }
                    }
                ],
                data6: [
                    {   
                        photo:'<img src="http://imgsrc.baidu.com/forum/w%3D580/sign=2609b2805a43fbf2c52ca62b807fca1e/a4ddd1c8a786c9179f6bc5b1c03d70cf3ac757e1.jpg">',
                        name: '罗弘毅',
                        age: 21,
                        research: '前端开发，图像识别，人工智能',
                        location: '研究院二号楼303',

                    },
                    {   
                         photo:'<img src="http://imgsrc.baidu.com/forum/w%3D580/sign=1e6df0612e7f9e2f70351d002f32e962/9053ad345982b2b76f447b4338adcbef77099b71.jpg">',
                        name: '王庆',
                        age: 21,
                        research: '区块链，FPGA',
                        location: 'N楼401',
                    },
                    {   
                        photo:'<img src="http://imgsrc.baidu.com/forum/w%3D580/sign=2609b2805a43fbf2c52ca62b807fca1e/a4ddd1c8a786c9179f6bc5b1c03d70cf3ac757e1.jpg">',
                        name: '卜俊杰',
                        age: 21,
                        research: '后端开发，web设计',
                        location: '九公寓122二号床',
                    },
                    {   
                        photo: '<img src="http://imgsrc.baidu.com/forum/w%3D580/sign=1e6df0612e7f9e2f70351d002f32e962/9053ad345982b2b76f447b4338adcbef77099b71.jpg">',
                        name: '江荣印',
                        age: 21,
                        research: '网络安全，安卓开发',
                        location: '研究院二号楼401',
                    },
                ]
            }
        },
        methods: {
            show (index) {
                this.$Modal.info({
                    title: '教师信息',
                    content: `Photo: ${this.data6[index].photo}<br>Name：${this.data6[index].name}<br>Age：${this.data6[index].age}<br>research：${this.data6[index].research}<br>location:${this.data6[index].location}`
                })
            },
            remove (index) {
                this.data6.splice(index, 1);
            }
        }
    }
</script>
