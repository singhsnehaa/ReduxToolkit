import { createSlice } from "@reduxjs/toolkit"

export const todoSlice =createSlice({
    name:'todo',
    initialState:[
        {id:1, title:'Todo List 1', completed:false},
        {id:2, title:'Todo List 2', completed:false},
        {id:3, title:'Todo List 3', completed:true},
    ],
    reducer:{
        todoList:(state, action)=>{
            console.log('state:',state)
        }
    }
})

export const {todoList} = todoSlice.actions;
export default todoSlice.reducer;
