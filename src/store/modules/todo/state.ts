interface TodoItem {
  name: string;
  status: "todo" | "done";
}

export type Filter = "all" | "todo" | "done";

export type Todo = TodoItem[];

export type TodoState = {
  todos: Todo;
  filter: Filter;
};

const state: TodoState = {
  todos: [],
  filter: "all",
};

export default state;
