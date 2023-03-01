import { createSlice } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";

interface IState {
	currentNumber: string | number,
	prevNumber?:string | number,
	resultNumber:number,
	operator:string,
	equal:boolean,
	holdNumber:number
}

const calculator = createSlice({
	name:"calculatorReducer",
	
	initialState:{
		currentNumber:"",
		resultNumber:0,
		holdNumber:0,
		operator:"",
		equal:false
	},

	reducers:{
		NUMBER:(state:IState,action) => {
			state.equal = false;
				state.currentNumber = String(state.currentNumber).concat(action.payload)
		},
		CLEAR:(state:IState) => {
			state.equal = false;
			state.currentNumber = "";
			state.operator ="";
			state.holdNumber = 0;
			state.resultNumber = 0;
		},
		NEGATIVE:(state:IState) => {
			state.currentNumber = Number(state.currentNumber)*(-1);
		},
		PERCENTAGE:(state:IState) => {
			state.currentNumber = Number(state.currentNumber) / 100
		},
		OPERATORS:(state:IState,action) =>{
			state.equal = false
			if(state.holdNumber == 0){
				state.holdNumber = Number(state.currentNumber)
			}else{
				if(state.currentNumber !== "" && state.operator === action.payload){
						switch(action.payload){
							case "+":
								state.resultNumber = state.holdNumber + Number(state.currentNumber)
								break;
							case "-":
								state.resultNumber = state.holdNumber - Number(state.currentNumber)
								break;
							case "x":
								state.resultNumber = state.holdNumber * Number(state.currentNumber)
								break;
							case "/":
								state.resultNumber = state.holdNumber / Number(state.currentNumber)
								break;
							default:
								break;
						} 
						state.holdNumber = state.resultNumber 
				}
			}
			state.operator = action.payload
			state.currentNumber = ""
		},


		
		EQUAL:(state:IState) => {
			state.equal = true
			switch(state.operator){
				case "+":
					state.resultNumber = Number(state.holdNumber) + Number(state.currentNumber)
					break;

				case "-":
					state.resultNumber = Number(state.holdNumber) - Number(state.currentNumber)
					break;

				case "x":
					if(Number(state.currentNumber) !== 0){
						state.resultNumber = state.holdNumber * Number(state.currentNumber)
					}else{
						state.resultNumber = state.holdNumber * state.holdNumber
						state.currentNumber = state.holdNumber
					}
					break;

				case "/":
					if(Number(state.currentNumber) !== 0){
						state.resultNumber = state.holdNumber / Number(state.currentNumber)
					}else{
						state.resultNumber = state.holdNumber / state.holdNumber
						state.currentNumber = state.holdNumber
					}
					break;

				default:
					break;
				}
				state.holdNumber = state.resultNumber
		}
}})

export const store = configureStore({
    reducer : calculator.reducer
})

export type RootState = ReturnType<typeof store.getState>;

export const {NUMBER,CLEAR,NEGATIVE,PERCENTAGE,OPERATORS,EQUAL} = calculator.actions

export default calculator










