<template>
    <div class="module-head-oprt">
        <div class="topic-change">
            <a v-for="(item, index) in total" :key="index" href="javascript:void(0)" :class="['topic-spot', current === index ? 'selected' : '']" @click="$emit('update:current', index)"></a>
            <a href="javascript:void(0)" class="pre-topic" @click="$emit('update:current', (current + total - 1) % total)"></a>
            <a href="javascript:void(0)" class="next-topic" @click="$emit('update:current', (current + 1) % total)"></a>
        </div>
    </div>
</template>

<script>
export default {
  name: 'pager',
  props: {
    current: {
      type: Number,
      default: 1
    },
    total: {
      type: Number,
      default: 5
    }
  },
  data() {
    return {
    }
  },
};
</script>
<style lang="stylus">
.topic-change {
  margin-top: 10px;
}
.topic-spot {
  display: inline-block;
  width: 6px;
  height: 6px;
  background: #c1c1c1;
  border-radius: 50%;
  margin-right: 2px;
}
.pre-topic,
.next-topic {
  width: 18px;
  height: 18px;
  display: inline-block;
  vertical-align: middle;
}
.pre-topic {
  background: url(../public/components-images/next-pre.png) 0 -76px no-repeat;
  &:hover {
    background: url(../public/components-images/next-pre.png) 0 -25px no-repeat;
  }
}
.next-topic {
  background: url(../public/components-images/next-pre.png) 0 -59px no-repeat;
  &:hover {
    background: url(../public/components-images/next-pre.png) 0 -42px no-repeat;
  }
}
.topic-spot.selected,
.topic-spot:hover {
  background: #00bc9b;
}
</style>
