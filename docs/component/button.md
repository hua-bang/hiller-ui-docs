---
title: Button 按钮
---
# Button 按钮

<div>
  <h3 style="margin-bottom: 15px">基础按钮</h3>
  <hl-card>
    <div class="button-area">
      <hl-button>default</hl-button>
      <hl-button type="primary">primary</hl-button>
      <hl-button type="success">success</hl-button>
      <hl-button type="info">info</hl-button>
      <hl-button type="warning">warning</hl-button>
      <hl-button type="danger">danger</hl-button>
    </div>
  </hl-card>
</div>

<div>
  <h3 style="margin-bottom: 15px">原型按钮</h3>
  <hl-card>
    <div class="button-area">
      <hl-button round></hl-button>
      <hl-button round type="primary"></hl-button>
      <hl-button round type="success"></hl-button>
      <hl-button round type="info"></hl-button>
      <hl-button round type="warning"></hl-button>
      <hl-button round type="danger"></hl-button>
    </div>
  </hl-card>
</div>

<div>
  <h3 style="margin-bottom: 15px">禁用按钮</h3>
  <hl-card>
    <div class="button-area">
      <hl-button disabled></hl-button>
      <hl-button disabled type="primary"></hl-button>
      <hl-button disabled type="success"></hl-button>
      <hl-button disabled type="info"></hl-button>
      <hl-button disabled type="warning"></hl-button>
      <hl-button disabled type="danger"></hl-button>
    </div>
  </hl-card>
</div>

<div>
  <h3 style="margin-bottom: 15px">按钮尺寸</h3>
  <hl-card>
    <div class="button-area">
      <hl-button>默认按钮</hl-button>
      <hl-button size="medium">中等按钮</hl-button>
      <hl-button size="small">小型按钮</hl-button>
      <hl-button size="mini">超小按钮</hl-button>
    </div>
  </hl-card>
</div>

<div>
  <h3 style="margin-bottom: 15px">图标按钮</h3>
  <hl-card>
    <div class="button-area">
      <hl-button icon="wechat">微信按钮</hl-button>
      <hl-button icon="fenlei" type="primary">分类按钮</hl-button>
      <hl-button icon="yonghu" type="success">用户按钮</hl-button>
      <hl-button icon="calendar" type="info">日历按钮</hl-button>
      <hl-button icon="shouye" type="warning">首页按钮</hl-button>
    </div>
  </hl-card>
</div>

<div>
  <h3 style="margin-bottom: 15px">加载按钮</h3>
  <hl-card>
    <div class="button-area">
      <hl-button loading>加载中</hl-button>
      <hl-button loading type="primary">加载中</hl-button>
      <hl-button loading type="success">加载中</hl-button>
      <hl-button loading type="info">加载中</hl-button>
      <hl-button loading type="warning">加载中</hl-button>
      <hl-button loading type="danger">加载中</hl-button>
    </div>
  </hl-card>
</div>

<div>
  <h3 style="margin-bottom: 15px">事件按钮</h3>
  <hl-card>
    <div class="button-area">
      <hl-button @click="test">打开弹窗</hl-button>
    </div>
  </hl-card>
</div>


<script>
  import { ref } from "vue"
  export default {
    setup() {
      const test = () => {
        alert("hello, world");
      }
      return {
        test
      }
    }
  }
  
</script>

<style scoped>
  .button-area > button{
    margin-right: 10px
  }

</style>
