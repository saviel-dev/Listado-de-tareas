import { useState } from "react";
import { ListaTareas } from "./ListaTareas";

export const TodoApp = () => {
    const [nuevaTarea, setNuevaTarea] = useState<string>('');
    const [listaTarea, setListaTarea] = useState<string[]>([]);

    const handleAddTask = () => {
        if (nuevaTarea.trim() === '') return;
        setListaTarea(tareasAnteriores => [...tareasAnteriores, nuevaTarea]);
        setNuevaTarea('');
    };

    const handleBorrarTareas = (index: number) => {
        setListaTarea(tareas => tareas.filter((_, i) => i !== index));
    };

    const handleEditarTareas = (index: number, texto: string) => {
        if (texto.trim() === '') return; // Evita agregar tareas vacías

        setListaTarea(tareas => {
            const nuevasTareas = [...tareas]; // Crea una copia del arreglo
            nuevasTareas[index] = texto; // Actualiza la tarea en el índice especificado
            return nuevasTareas;
        });
    };

    return (
        <div className="">
            <h1>Listado de Tareas</h1>
            <div className="flex">
                <input
                    type="text"
                    value={nuevaTarea}
                    onChange={(e) => setNuevaTarea(e.target.value)}
                    placeholder="Nueva Tarea"
                />
                <button onClick={handleAddTask}>Agregar Tarea</button>
            </div>
            <ListaTareas
                listaTareas={listaTarea}
                borrarTarea={handleBorrarTareas}
                editarTarea={handleEditarTareas}
            />
        </div>
    );
};