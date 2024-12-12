

export interface Task {
  id: number;
  Title: string;
  Content: string;
  DataF: string;
}

export const addTask = (
    Title: string, 
    Content: string, 
    DataF: string, 
    Tasks: Task[],
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>,
    setTitle: React.Dispatch<React.SetStateAction<string>>,
    setContent: React.Dispatch<React.SetStateAction<string>>,
    setDataF: React.Dispatch<React.SetStateAction<string>>//setDataF: React.Dispatch<React.SetStateAction<string>> significa que a função setDataF é uma função que aceita um argumento de tipo string (um valor ou uma função que retorna um valor string), e essa função serve para atualizar o estado DataF no React. 
) => {
    if (!Title || !Content || !DataF) {
      alert("Preencha todos os campos");
      return;
    }

    const newTask: Task = {
      id: Date.now(),
      Title,
      Content,
      DataF
    };

    const updatedTasks = [...Tasks, newTask];
    setTasks(updatedTasks); // Atualiza o estado com as novas tarefas
    localStorage.setItem('tasks', JSON.stringify(updatedTasks)); // Salva no localStorage

    // Limpa os campos após adicionar a tarefa
    setTitle('');
    setContent('');
    setDataF('');
  };