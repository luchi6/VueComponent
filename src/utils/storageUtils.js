
// export default{
//   saveObj(){},
//   getObj(){}
// }

export function saveTodos(obj) {
  localStorage.setItem("todos_key", JSON.stringify(obj))
}

export const getTodos = () => JSON.parse(localStorage.getItem("todos_key") || '[]')
