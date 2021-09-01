export const initialState = {
    task: ''
};
const reducer = (state, action) => {
    switch(action.type){
        case "ADD_TASKS": 
            return {...state, task: action.task}
        case "CHECK_TASKS": 
            const newArray = [...state.task]
            const index = newArray.findIndex(task => task.id === action.task.id);
            newArray[index].completed = action.task.completed;
            return {...newArray, task: [...newArray]}

        case "REMOVE_TASK":
            const newArray2 = state.task.filter(task => task.id !== action.id)
            return {
                ...newArray2,
                task: [...newArray2]
            }
        default: 
            return state;
    }
};
export default reducer;