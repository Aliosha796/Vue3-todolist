<template>
  <div class="footer">
    <p>已完成 {{ doneTotal }} - 全部 {{ todos.length }}</p>
    <span @click="CleanAll" :title="title">&#xe628;</span>
  </div>
</template>
<script setup>
import { computed } from "vue";

const props = defineProps(["todos"]);
const emit = defineEmits(["DeleteArray"]);
const title = "删除全部事项";
// 创建一个变量声明接收到的todos数组
const todosFooter = props["todos"];
const CleanAll = () => {
  if (confirm("确认全部删除？")) {
    emit("DeleteArray");
  } else {
  }
};
const doneTotal = computed(() => {
  let i = 0;
  todosFooter.forEach((todo) => {
    if (todo.done) {
      i++;
    }
  });
  return i;
});
</script>
<style scoped lang="scss">
.footer {
  margin-top: 20px;
  height: 12vh;
  span,
  p {
    color: #fff;
    font-size: 1.5rem;
    font-family: "iconfont";
    cursor: pointer;
  }
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

span:hover {
  color: red;
}
</style>
