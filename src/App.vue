<script setup>
import TodoHeader from "./components/TodoHeader.vue";
import TodoList from "./components/TodoList.vue";
import TodoFooter from "./components/TodoFooter.vue";
import { reactive, ref, watch } from "vue";

let saveData = JSON.parse(localStorage.getItem("todos")) || [];
let todos = reactive(saveData);

const AddTodoItem = (Item) => {
  todos.push(Item);
};

const CheckTodo = (todo) => {
  /*   console.log("引用数据======>", todos.value); */
  todo.done = !todo.done;
};

const DelTodo = (index) => {
  todos.splice(index, 1);
};

const DeleteArray = () => {
  todos.splice(0);
};
watch(
  () => todos,
  () => {
    localStorage.setItem("todos", JSON.stringify(todos));
    /* console.log(
      "已将数据存储进浏览器内，数据为====>",
      JSON.parse(localStorage.getItem("todos"))
    ); */
    /*  console.log("检测到数据改变，此时todos的数据====>", todos); */
  },
  {
    deep: true,
    immediate: true,
  }
);
</script>

<template>
  <div class="container">
    <div class="containerMain">
      <TodoHeader @AddTodoItem="AddTodoItem"></TodoHeader>
      <TodoList
        :todos="todos"
        @CheckTodo="CheckTodo"
        @DelTodo="DelTodo"
      ></TodoList>
      <TodoFooter :todos="todos" @DeleteArray="DeleteArray"></TodoFooter>
    </div>
  </div>
  <img src="./assets/img/bcc2.webp" class="background" alt="" />
</template>

<style>
body {
  margin: 0;
  padding: 5vh;
}
h1 {
  color: #fff;
}
.container {
  text-align: center;
  width: 80%;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%), 0 2.5rem 5rem 0 rgb(0 0 0 / 10%);
  margin: auto;
  padding: 10px 0 10px 0;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
}
@media screen and (max-width: 400px) {
  body {
    padding: 0;
  }
  .container {
    width: 100%;
    margin: 0;
    border-radius: 0px;
  }
  .containerMain {
    width: 100%;
  }
}
.containerMain {
  margin: auto;
  width: 90%;
}
.background {
  width: 100%;
  height: 100%;
  position: fixed;
  object-fit: cover;
  top: 0;
  left: 0;
  z-index: -999;
}
</style>
