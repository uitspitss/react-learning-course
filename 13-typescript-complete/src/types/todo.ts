export type Todo = {
  _id: string;
  text: string;
  checked: boolean;
};

export type CreateTodoData = Omit<Todo, '_id' | 'checked'>;

export type UpdateTodoData = Omit<Todo, '_id'>;
