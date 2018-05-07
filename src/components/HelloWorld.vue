<template>

  <div class="hello">
    <section>
      <div>
          <vue-particles
        class="background"
        color="#00B050"
        :particleOpacity="100"
        :particlesNumber="100"
        shapeType="circle"
        :particleSize="4"
        linesColor="#00B050"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
   >
          </vue-particles>
      </div>
    </section>
    <section>
    <Row>
        <Col span="8" offset = 8 >
          <img src="..\assets\HITLOGH1.jpg">
          <br>
            <h1>校园预约系统</h1>
          </br>
        </Col>
    </Row>
    </section>
    <br>
    <section>
    <Row>
        <Col span="8" offset=8>
        <Carousel autoplay v-model="value2" loop>
        <CarouselItem>
            <div class="demo-carousel"><img src="..\assets\news1.png"></div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel"><img src="..\assets\news2.png"></div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel"><img src="..\assets\news3.png"></div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel"><img src="..\assets\news4.png"></div>
        </CarouselItem>
        </Carousel>
        </Col>
    </Row>
    </section>
    <br>
    <section>
    <Row>
        <Col span="8" offset = 8>
          <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
        <FormItem prop="user">
            <Input type="text" v-model="formInline.user" placeholder="学工号">
                <Icon type="ios-person-outline" slot="prepend"></Icon>
            </Input>
        </FormItem>
        <FormItem prop="password">
            <Input type="password" v-model="formInline.password" placeholder="密码">
                <Icon type="ios-locked-outline" slot="prepend"></Icon>
            </Input>
        </FormItem>
        <FormItem>
            <Button type="primary" @click="handleSubmit('formInline')">登陆</Button>
        </FormItem>
    </Form>

        <ul>
      <li>
        <a
          href="www.baidu.com"
          target="_blank"
        >
          技术支持
        </a>
      </li>
      <li>
        <a
          href="https://github.com/EightYearVeteran"
          target="_blank"
        >
          Github项目
        </a>
      </li>
      <li>
        <a
          href="https://cn.vuejs.org/index.html"
          target="_blank"
        >
          框架DOC
        </a>
      </li>
      <li>
        <a
          href="https://www.iviewui.com/"
          target="_blank"
        >
          组件DOC
        </a>
      </li>
      <br>
      <li>
        <a
          href="http://news.hitwh.edu.cn/"
          target="_blank"
        >
          学校官网
        </a>
      </li>
    </ul>
    <h2>团队介绍</h2>
    <ul>
      <li>
        <a
          href="https://github.com/bghjmn32"
          target="_blank"
        >
          产品经理，前端：罗弘毅
        </a>
      </li>
      <li>
        <a
          href="https://github.com/ZKRS"
          target="_blank"
        >
          后台开发，框架设计：王庆
        </a>
      </li>
      <li>
        <a
          href="https://github.com/juzi123"
          target="_blank"
        >
          测试与数据库分析：卜俊杰
        </a>
      </li>
      <li>
        <a
          href="https://github.com/EightYearVeteran"
          target="_blank"
        >
          八年老兵代表队
        </a>
      </li>
    </ul>
        </Col>
        
    </Row>
  </section>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',

   data () {
            return {

                value2: 0,

                formInline: {
                    user: '',
                    password: ''
                },
                ruleInline: {
                    user: [
                        { required: true, message: '请输入学工号', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' },
                        { type: 'string', min: 6, message: '密码至少为六位', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            handleSubmit(name) {
              this.$router.push('/1')
                /*this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('Success!');
                    } else {
                        this.$Message.error('Fail!');
                    }
                })*/
            }
        }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.background {
    position: fixed;
    right:0;
    bottom: 0;
    min-width: 100%;
    min-height: 100%;
    height: auto;
    overflow:hidden;
    filter:blur(2px);
    width: auto;


  } 
</style>
