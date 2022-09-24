import myAxios from "./axios";
export function getListAPI(paramsList) {
  return myAxios({
    url: "/getTodos",
    method: "get",
  });
}

export function addItemAPI(paramsList) {
  return myAxios({
    url: "/addTodo",
    method: "post",
    data: paramsList,
  });
}

export function delItemAPI(paramsList) {
  return myAxios({
    url: "/deleteTodo",
    method: "post",
    data: paramsList,
  });
}
