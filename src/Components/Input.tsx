import { PlusCircle } from "phosphor-react";
import { ChangeEvent, FormEvent } from "react";
import styles from "./Input.module.css";

interface InputProps {
    onChange: (event: ChangeEvent<HTMLInputElement>)=> void;
    onSubmit: (event: FormEvent) => void;
    isActive: boolean;
    newTask: string;
};

export function Input({onChange, onSubmit, newTask, isActive}: InputProps){
    return (
        <form className={styles.form} onSubmit={onSubmit}>
            <input onChange={onChange} value={newTask} placeholder="Adicione uma nova tarefa" type="text" />
            <button type="submit" disabled={isActive}>
                <span>Criar</span>
                <PlusCircle size={16} />
            </button>
        </form>
    )
}