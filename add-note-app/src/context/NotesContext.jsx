import { createContext, useContext, useReducer } from "react";

const NotesContext = createContext(null);
const NotesDispatchContext = createContext(null);

function noteReducer(state, {type, payload}) {
    switch(type) {
       case "ADD": {
         return [...state, payload]
       }
       case "DELETE": {
         return state.filter((s) => s.id != payload )
       }
       case "CHECK": {
         return state.map((note) => 
            note.id === payload ? { ...note, completed: !note.completed } : note
            )
       }
       default:
        throw new Error("unknown error" + type)
    }
    }

export function NotesProvider({children}) {
    const [notes, dispatch] = useReducer(noteReducer, []);
    return (
    <NotesContext.Provider value={{notes}}>
        <NotesDispatchContext value={{dispatch}}>
        {children}
        </NotesDispatchContext>
        </NotesContext.Provider>
    )
}

export function useNotes() {
  return useContext(NotesContext);
}

export function useNotesDispatch() {
    return useContext(NotesDispatchContext);
  }