export interface tasksType {
  id: number;
  taskValue: string;
  completed: boolean;
}

export interface FormTypes {
  task: tasksType[];
  monthId: number;
}

export type InputEvent = React.ChangeEvent<HTMLInputElement>;
export type HandlerEvent = React.MouseEvent<HTMLButtonElement>;
