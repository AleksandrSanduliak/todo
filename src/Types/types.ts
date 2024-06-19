export interface tasksType {
  id: number;
  taskValue: string;
}

export interface FormTypes {
  task: tasksType[];
  setTask: React.Dispatch<React.SetStateAction<tasksType[]>>;
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  create: any;
}

export type InputEvent = React.ChangeEvent<HTMLInputElement>;
export type HandlerEvent = React.MouseEvent<HTMLButtonElement>;
