import { Tarea } from "./Tarea";

type ListaTareaProps = {
    listaTareas: string[];
    borrarTarea: (index: number) => void;
    editarTarea: (index: number, texto: string) => void;
}

export const ListaTareas = ({ listaTareas, borrarTarea, editarTarea }: ListaTareaProps) => {
    return (
        <div className="taskList">
            {listaTareas.map((tarea, index) => (
                <Tarea
                    key={index}
                    tarea={tarea}
                    borrarTarea={() => borrarTarea(index)}
                    editarTarea={(nuevoTexto) => editarTarea(index, nuevoTexto)}
                />
            ))}
        </div>
    );
};