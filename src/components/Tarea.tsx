import { useState } from 'react';

type TareaProps = {
    tarea: string;
    borrarTarea: () => void;
    editarTarea: (nuevoTexto: string) => void;
}

export const Tarea = ({ tarea, borrarTarea, editarTarea }: TareaProps) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedText, setEditedText] = useState(tarea);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = () => {
        editarTarea(editedText);
        setIsEditing(false);
    };

    return (
        <div className="task">
            {isEditing ? (
                <input
                    type="text"
                    value={editedText}
                    onChange={(e) => setEditedText(e.target.value)}
                />
            ) : (
                <span>{tarea}</span>
            )}
            <div className="botones">
                {isEditing ? (
                    <button onClick={handleSaveClick} id="guardar">Guardar</button>
                ) : (
                    <>
                        <button onClick={borrarTarea} id="borrar">Borrar Tarea</button>
                        <button onClick={handleEditClick} id="editar">Editar Tarea</button>
                    </>
                )}
            </div>
        </div>
    );
};