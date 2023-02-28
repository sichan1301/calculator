import { createSlice } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";

const calculator = createSlice({
	name:"valueReducer",
	initialState:{
		currentNumber:"",
		prevNumber:0,
		operator:""
	},
	reducers:{
		NUMBER:(state,action) => {
			state.currentNumber = String(state.currentNumber).concat(action.payload)
		},
		CLEAR:(state) => {
			state.currentNumber = "";
		},
		NEGATIVE:(state) => {
			state.currentNumber = Number(state.currentNumber)*(-1);
		},
		PERCENTAGE:(state) => {
			state.currentNumber = Number(state.currentNumber) / 100
		},
		OPERATORS:(state,action) =>{
			state.operator = action.payload
			state.prevNumber = Number(state.currentNumber)
			state.currentNumber = ""
		},
		EQUAL:(state) => {
			switch(state.operator){
				case "+":
					state.currentNumber = state.prevNumber + Number(state.currentNumber)
            		break;
				case "-":
					state.currentNumber = state.prevNumber - Number(state.currentNumber)
            		break;
				case "x":
					state.currentNumber = state.prevNumber * Number(state.currentNumber)
            		break;
				case "/":
					state.currentNumber = state.prevNumber / Number(state.currentNumber)
            		break;
				default:
					break;
				}

		}
}})

export const store = configureStore({
    reducer : calculator.reducer
})

export const {NUMBER,CLEAR,NEGATIVE,PERCENTAGE,OPERATORS,EQUAL} = calculator.actions

export default calculator

