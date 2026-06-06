import React from "react";

import { getTodoList } from "../services/get-todo-list";
import { TodoItem } from "../types/TodoItem";

type UseTodoListReturn = {
  items: TodoItem[] | undefined;
  loading: boolean;
  error: string | undefined;
  fetchData: () => Promise<void>;
};

export const useTodoList = (): UseTodoListReturn => {
  const [items, setItems] = React.useState<TodoItem[]>();
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string>();

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await getTodoList();
      setItems(response);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError(error as string);
    } finally {
      setLoading(false);
    }
  };

  return { items, loading, error, fetchData };
};
