---
title: Switch 开关
---
# Switch 开关

<div>
  <h3 style="margin-bottom: 15px">基础开关</h3>
  <hl-card>
    <div class="display-area">
      <hl-switch v-model="value1"></hl-switch>
    </div>
  </hl-card>
</div>

<div>
  <h3 style="margin-bottom: 15px">禁用开关</h3>
  <hl-card>
    <div class="display-area">
      <hl-switch :disabled="true" v-model="value1"></hl-switch>
    </div>
  </hl-card>
</div>

<div>
  <h3 style="margin-bottom: 15px">颜色和值</h3>
  <hl-card>
    <div class="display-area">
      <hl-switch
          v-model="value2"
          active-color="#13ce66"
          inactive-color="#ff4949"
          active-value="1"
          inactive-value="2"
        >
      </hl-switch>
    </div>
  </hl-card>
</div>




<script>
  import { ref } from "vue"
  export default {
    setup() {
      const value1 = ref(true);
      const value2 = ref("1");

      return {
        value1,
        value2
      }
    }
  }
  
</script>

<style scoped>

</style>
