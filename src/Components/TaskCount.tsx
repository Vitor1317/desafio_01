import styles from "./TaskCount.module.css";

interface TaskCountProps {
    taskDone: number;
    taskNumber: number;
}

export function TaskCount({taskDone, taskNumber}: TaskCountProps){
    return (
        <div className={styles.taskcount}>
            <div className={styles.taskcountcontent}>
                <strong>Tarefas criadas</strong>
                <span>{taskNumber}</span>
            </div>
            <div className={styles.taskcountcontent}>
                <strong className={styles.purple}>Concluídas</strong>
                {
                    taskNumber === 0 ? (<span>{taskNumber}</span>) : (
                        <span>{taskDone} de {taskNumber}</span>
                    )
                }
            </div>
        </div>
    )
}