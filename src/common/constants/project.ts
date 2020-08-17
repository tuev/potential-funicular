import { IProjectItem } from "../models/Project";

const projectList: IProjectItem[] = [
  {
    id: "todo",
    title: "Todo app",
    time: "23/07/2020",
    img:
      "https://images.unsplash.com/photo-1584422341649-8162f81b4f37?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
    description:
      "Unlike lightweight, freebie or cutesy list tools, use Todo when you have a deadline, NEED to focus, prioritize and get things done quickly–from home or school projects, to dozens of work tasks–with sub-tasks and projects.",
  },
  {
    id: "pixabay",
    title: "Pixabay",
    time: "16/08/2020",
    img:
      "https://images.unsplash.com/photo-1597508933754-88c40a085822?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60",
    description: "playground with pixabay api",
  },
];

export { projectList };
