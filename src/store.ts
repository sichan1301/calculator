import { createSlice } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";

interface IState {
	currentNumber: string | number,
	resultNumber:number,
	operator:string,
	equal:boolean,
	holdNumber:number,
	canClear:boolean,
	history:number[],
	index:number
}

const calculator = createSlice({
	name:"calculatorReducer",
	
	initialState:{
		currentNumber:"",
		resultNumber:0,
		holdNumber:0,
		operator:"",
		equal:false,
		canClear: false,
		history:[],
		index:1
	},

	reducers:{
		NUMBER:(state:IState,action) => {
			state.equal = false;
				if(state.holdNumber!== 0 && state.currentNumber === "0"){     
					state.currentNumber = ""
				}
				state.currentNumber = String(state.currentNumber).concat(action.payload)
				state.canClear = true
		},
		CLEAR:(state:IState) => {
			if (state.canClear === true) {
				if(state.currentNumber !== ""){
					if(state.equal === true){
						state.operator = ""
						state.resultNumber = 0
					}
					state.currentNumber = "0";	
				} 
				state.canClear = false
			}else{
				state.equal = false;
				state.currentNumber = "";
				state.operator ="";
				state.holdNumber = 0;
				state.resultNumber = 0;
			}
		},
		NEGATIVE:(state:IState) => {
			if(state.equal === true){
				state.resultNumber = -state.resultNumber;
				state.holdNumber = -state.holdNumber;
			}else{
				if(state.currentNumber === ""){
					state.holdNumber = -state.holdNumber;
				}else{
					state.currentNumber = Number(state.currentNumber)*(-1);
				}
			}
		},
		PERCENTAGE:(state:IState) => {
			state.currentNumber = Number(state.currentNumber) / 100
		},
		OPERATORS:(state:IState,action) =>{
			if(state.holdNumber === 0){
				state.holdNumber = Number(state.currentNumber)
			}else{
				if(state.equal === false && state.currentNumber !== ""){
					switch(state.operator){
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
			state.equal = false
			state.operator = action.payload
			state.currentNumber = ""
		},

		EQUAL:(state:IState) => {
			state.equal = true
			if(state.currentNumber !== ""){
				switch(state.operator){
					case "":
						state.resultNumber = Number(state.currentNumber);
						break;
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
			}else{
				if(state.canClear === true){
					switch(state.operator){
						case "+":
							state.resultNumber = state.holdNumber + state.holdNumber
							break;
						case "-":
							state.resultNumber = state.holdNumber - state.holdNumber
							break;	
						case "x":
							state.resultNumber = state.holdNumber * state.holdNumber
							break;
						case "/":
							state.resultNumber = state.holdNumber / state.holdNumber
							break;
						default:
							break;
					}
					state.currentNumber = state.holdNumber
				}else{
					state.resultNumber = state.holdNumber
					state.operator = "";
				}
			}
			state.holdNumber = state.resultNumber
			state.history.push(state.resultNumber)
		},
		HISTORY:(state,action) =>{
				switch(action.payload){
					case "up":
						if(state.index===1){
							return
						}
						state.index = state.index-1
						break;
					case "down":
						if(state.index > state.history.length-1){
							return
						}
						state.index = state.index+1
						break;
					default:
						break;
				}
			}
}})

export const store = configureStore({
    reducer : calculator.reducer
})

export type RootState = ReturnType<typeof store.getState>;

export const {NUMBER,CLEAR,NEGATIVE,PERCENTAGE,OPERATORS,EQUAL,HISTORY} = calculator.actions

export default calculator
