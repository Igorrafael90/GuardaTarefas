

export interface Task {
  id: number;
  Title: string;
  Content: string;
  DataF: string;
  dataCriacao: string;
}

export const addTask = (
    Title: string, 
    Content: string, 
    DataF: string, 
    Tasks: Task[],
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>,
    setTitle: React.Dispatch<React.SetStateAction<string>>,
    setContent: React.Dispatch<React.SetStateAction<string>>,
    setDataF: React.Dispatch<React.SetStateAction<string>>//setDataF: React.Dispatch<React.SetStateAction<string>> significa que a função setDataF é uma função que aceita um argumento de tipo string, e essa função serve para atualizar o estado DataF no React, e no caso de Tasks por esta pegando uma lista. 
) => {

    const datafinal = new Date(DataF)
    const dataatual = new Date()

    if (!Title || !Content || !DataF) {
      alert("Preencha todos os campos");
      return;
    }else if(datafinal < dataatual){
      alert("A data final não pode ser menor que a atual")
      return
    }
    
    const dataCriacao = new Date().toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    })

    const newTask: Task = {
      id: Date.now(),
      Title,
      Content,
      DataF,
      dataCriacao
    };

    const updatedTasks = [...Tasks, newTask];//vai destrinchar as informações dadas e passar para uma nova tarefa
    setTasks(updatedTasks); // Atualiza o estado com as novas tarefas
    localStorage.setItem('tasks', JSON.stringify(updatedTasks)); // Salva no localStorage

    // Limpa os campos após adicionar a tarefa
    setTitle('');
    setContent('');
    setDataF('');
  };

  export const clearTasks = (
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>
  ) => {
    localStorage.removeItem('tasks')
    setTasks([])//limpa o estado de tasks
  }

  export const deleteTask = (
    id:number, 
    Tasks:Task[], 
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>
  ) => {
    const updatedTasks = Tasks.filter(task => task.id !== id)//Filtra todos os ids diferentes do fornecido
    setTasks(updatedTasks)//Atualiza o estado de tasks
    localStorage.setItem('tasks', JSON.stringify(updatedTasks))//atualiza o localstorage com a nova lista
  }