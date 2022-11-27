import { ChangeEvent, FormEvent, useState } from 'react';

import { Header } from './Components/Header';
import { Input } from './Components/Input';
import { TaskCount } from './Components/TaskCount';
import { Empty } from './Components/Empty';
import { Task } from './Components/Task';

import { v4 as uuid } from 'uuid';

import './global.css';
import styles from './App.module.css';

interface Tasks {
  id: string;
  done: boolean;
  task: string;
};

export function App() {
  const [newTaskValue, setNewTask] = useState("");
  const [tasks, setTasks] = useState<Tasks[]>([]);

  const isEmptyNewTask = newTaskValue.length === 0;
  const isEmptyTasks = tasks.length === 0;

  function handleNewTaskValue(event: ChangeEvent<HTMLInputElement>){
    setNewTask(event.target.value);
  }

  function handleTasksText(event: FormEvent){
    event.preventDefault();

    setTasks([...tasks, {
      id: uuid(),
      done: false,
      task: newTaskValue
    }]);
    setNewTask("");
  }

  function handleDeleteTask(id: string){
      const deletedOne = tasks.filter(task => {
      return task.id !== id;
    })

    setTasks(deletedOne);
  }

  function handleUpdateDoneTask(id: string){
    const updatedOne = tasks.map(task=> {
      if(task.id === id) {
        task.done = !task.done;
        return task;
      }
      return task;
    })

    setTasks(updatedOne);
  }

  function taskDone(){
    const taskCompleted = tasks.reduce((acc, task)=>{
      if(task.done){
        acc++;
      }else{
        acc = acc + 0;
      }

      return acc;
    }, 0);

    return taskCompleted;
  }

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Input 
          onChange={handleNewTaskValue} 
          onSubmit={handleTasksText} 
          isActive={isEmptyNewTask} 
          newTask={newTaskValue} 
        />
        <div className={styles.taskcontent}>
          <TaskCount taskNumber={tasks.length} taskDone={taskDone()} />
          {
            isEmptyTasks ? (<Empty />) : (
              <div className={styles.taskitem}>
                {
                  tasks.map(task => (
                    <Task
                      key={task.id}
                      id={task.id}
                      content={task.task}
                      isCompleted={task.done}
                      deleted={handleDeleteTask}
                      updateDoneTask={handleUpdateDoneTask}
                    />
                  ))
                }
              </div>
            )
          }
        </div>
      </div>
    </>
  )
}
