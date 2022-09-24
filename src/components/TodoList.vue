<template>
  <ul id="doingThings">
    <li v-for="(TodosObj, index) in todos" :key="TodosObj.id">
      <!-- <input type="checkbox" class="checkDone" name="" id="" /> -->
      <section class="listTitle" @click="Checkdone(TodosObj)">
        <p v-show="!TodosObj.isEdit" :class="{ checked: TodosObj.done }">
          {{ TodosObj.title }}
        </p>
        <input
          type="text"
          class="editInput"
          v-show="TodosObj.isEdit"
          v-model="NewEdit"
          @keyup.enter="handleBlur(TodosObj)"
          @blur="handleBlur(TodosObj)"
          ref="inputTitle"
        />
      </section>

      <div class="operation">
        <span v-show="!TodosObj.isEdit" class="edit" @click="EditItem(TodosObj)"
          >&#xe602;</span
        >
        <span @click="DelItem(TodosObj.id)" :title="hint.delTitle" class="del"
          >&#xe600;</span
        >
      </div>
    </li>
  </ul>
</template>
<script setup>
import { ref, nextTick, onBeforeMount } from "vue";

import { getListAPI, addItemAPI, delItemAPI } from "../api/request.js";
const props = defineProps(["todos"]);
const emit = defineEmits(["CheckTodo", "DelTodo"]);
const hint = {
  delTitle: "删除此事项",
  editTitle: "修改",
};
let NewEdit = ref("");

onBeforeMount(async () => {
  await getListAPI().then((data) => {
    console.log(data.data.data);
  });
});

const Checkdone = (todo) => {
  emit("CheckTodo", todo);
  console.log(todo.done);
};

const DelItem = (id) => {
  if (confirm("是否删除？")) {
    emit("DelTodo", id);
  }
};

const inputTitle = ref(null);

const EditItem = (Todos) => {
  NewEdit.value = Todos.title;
  Todos.isEdit = true;
};
const handleBlur = (Todos) => {
  Todos.isEdit = false;
  //console.log(NewEdit.value);
  if (NewEdit.value == "") {
    alert("输入不能为空");
    NewEdit.value = Todos.title;
  } else {
    Todos.title = NewEdit.value;
  }
};
</script>
<style>
#doingThings {
  margin-top: 10px;
  padding: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
}

#doingThings li {
  position: relative;
  font-size: 1.2em;
  box-sizing: content-box;
  min-height: 60px;
  cursor: pointer;
  list-style: none;
  display: flex;
  align-items: stretch;
  background-color: rgba(255, 255, 255, 0.6);
  margin-top: 5px;
  backdrop-filter: blur(30px);
  letter-spacing: 2px;
  border: 0;
  border-radius: 10px;
}

#doingThings li:hover {
  background-color: rgb(167, 165, 165);
}

.checked {
  text-decoration: line-through 5px;
}
.checkDone {
  min-height: 60px;
  width: 50px;
  margin-left: 20px;
}
.editInput {
  border-top: 0;
  border-left: 0;
  border-right: 0;
  outline: 0;
  height: 100%;
  border: 0;
  background-color: rgba(255, 255, 255, 0);
  font-size: 1.2em;
  margin-left: 20px;
}

.listTitle {
  width: 90%;
  display: flex;
  align-items: center;
}
.listTitle p {
  margin-left: 20px;
}
.operation {
  font-family: "iconfont";
  width: 120px;
  display: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.operation span {
  width: 50%;
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
}
.operation .del:hover {
  background-color: red;
  color: #fff;
}
.operation .edit:hover {
  background-color: rgb(88, 61, 237);
  color: #fff;
}
</style>
