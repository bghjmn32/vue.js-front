<template>
    <div>
    <Row>
        <h1>已有预约详情</h1>
        <br></br>
        <Col span="16" offset=4><Table height="200" :columns="columns1" :data="data2"></Table></Col>
        
    </Row>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                columns1: [
                    {
                        title: '预约标题',
                        key: 'title'
                    },
                    {
                        title: '教师姓名',
                        key: 'teacher'
                    },
                    {
                        title: '预约日期',
                        key: 'date'
                    },
                    {
                        title: '预约时间',
                        key: 'time'
                    },
                    {
                        title: '预约地点',
                        key: 'location'
                    },
                    {
                        title: '预约类型',
                        key: 'task'
                    },
                    {
                        title: '预约备注',
                        key: 'text'
                    },
                    {
                        title: '预约长度',
                        key: 'timetook'
                    },
                    
                ],
                data2: [
                    {
                        title: '关于守望先锋到底能不能上1500分',
                        teacher: '卜俊杰',
                        location: '9公寓122二号床',
                        date: '2018-05-07',
                        time: '20:00',
                        task: '人生哲理',
                        timetook: '100分钟',
                        text: '到底能不能整明白？',
                    },
                   
                ]
            }
        }
    }
</script>
