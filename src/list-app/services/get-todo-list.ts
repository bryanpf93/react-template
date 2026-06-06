import { TodoItem } from "../types/TodoItem";

type TodoItemResponse = {
  id: number;
  text: string;
  content: string[];
  likes: {
    userId: number;
  }[];
};

const transformTodoItem = (item: TodoItemResponse): TodoItem => {
  return {
    id: item.id,
    text: item.text,
    description: item.content.join(", "),
    numberLikes: item.likes.length
  };
};

export const getTodoList = async (): Promise<TodoItem[]> => {
  try {
    const response = await fetch("src/list-app/data/todos.json");
    const data = await response.json();
    return data.map(transformTodoItem);
  } catch (error) {
    console.error("Error fetching todo list:", error);
    throw error;
  }
};
