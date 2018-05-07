<template>
    <Form :model="formItem" :label-width="80">
        <FormItem label="Input">
            <Input v-model="formItem.input" placeholder="预约标题"></Input>
        </FormItem>
        <FormItem label="Select">
            <Select v-model="formItem.select">
                <Option value="chudianhui">初佃辉</Option>
                <Option value="lichunshan">李春山</Option>
                <Option value="zhangweigang">张维刚</Option>
            </Select>
        </FormItem>
        <FormItem label="DatePicker">
            <Row>
                <Col span="11">
                    <DatePicker type="date" placeholder="选择日期" v-model="formItem.date"></DatePicker>
                </Col>
                <Col span="2" style="text-align: center">-</Col>
                <Col span="11">
                    <TimePicker type="time" placeholder="选择时间" v-model="formItem.time"></TimePicker>
                </Col>
            </Row>
        </FormItem>
        <FormItem label="预约人数">
            <RadioGroup v-model="formItem.radio">
                <Radio label="single">一人</Radio>
                <Radio label="group">多人</Radio>
            </RadioGroup>
        </FormItem>
        <FormItem label="预约内容">
            <CheckboxGroup v-model="formItem.checkbox">
                <Checkbox label="教学内容"></Checkbox>
                <Checkbox label="自我思考"></Checkbox>
                <Checkbox label="科研项目"></Checkbox>
                <Checkbox label="其他内容"></Checkbox>
            </CheckboxGroup>
        </FormItem>
        <FormItem label="接受调配">
            <i-switch v-model="formItem.switch" size="large">
                <span slot="open">是</span>
                <span slot="close">不</span>
            </i-switch>
        </FormItem>
        <FormItem label="时间长度/小时">
            <Slider v-model="formItem.slider" step="10"></Slider>
        </FormItem>
        <FormItem label="Text">
            <Input v-model="formItem.textarea" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="备注信息，简明扼要"></Input>
        </FormItem>
        <FormItem>
            <Button type="primary">Submit</Button>
            <Button type="ghost" style="margin-left: 8px">Cancel</Button>
        </FormItem>
    </Form>
</template>
<script>
    export default {
        data () {
            return {
                formItem: {
                    input: '',
                    select: '',
                    radio: 'single',
                    checkbox: [],
                    switch: true,
                    date: '',
                    time: '',
                    slider: [20, 50],
                    textarea: ''
                }
            }
        }
    }
</script>
