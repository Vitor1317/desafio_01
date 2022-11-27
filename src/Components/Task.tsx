import { Trash } from "phosphor-react";
import styles from "./Task.module.css";

interface TaskProps {
    id: string;
    content: string;
    isCompleted: boolean;
    deleted: (id: string) => void;
    updateDoneTask: (id: string) => void;
}

export function Task({content, id, isCompleted, deleted, updateDoneTask}: TaskProps){
    return (
        <div className={styles.task}>
            <input type="checkbox" name="" id="" onChange={() => updateDoneTask(id)} checked={isCompleted} />
            <p className={isCompleted ? styles.line : ''}>{content}</p>
            <button onClick={()=>deleted(id)}>
                <Trash size={24} />
            </button>
        </div>
    )
}