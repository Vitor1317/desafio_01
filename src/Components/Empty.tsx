import { Note } from "phosphor-react";
import styles from "./Empty.module.css";

export function Empty(){
    return (
        <div className={styles.empty}>
            <Note size={56} />
            <div className={styles.emptycontent}>
                <strong>Você ainda não tem tarefas cadastradas</strong>
                <span>Crie tarefas e organize seus itens a fazer</span>
            </div>
        </div>
    )
}