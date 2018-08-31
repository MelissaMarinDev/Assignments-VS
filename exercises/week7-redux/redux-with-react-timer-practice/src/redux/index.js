
import { createStore } from 'redux';


    const initialState={
            currentTime: 0,
            minutes: 0,
            seconds: 0,
            milliseconds: 0,
            data:[], 
        }
    


    ////Actions Creator
     export const tick = () => {
         return {
            type: "TICK_ME"
         }
    }
    export const stop = () => {
        return {
            type: "STOP_ME"
        }
    }
    export const reset = () => {
        return {
            type: "RESET_ME"
        }
    }

    
    //// REDUCER
    const reducer = (prevState = initialState, action) => {
        switch(action.type){
            case "TICK_ME":
                if (prevState.seconds === 60){
                    return {
                        minutes: prevState.minutes + 1,
                        seconds: 0,
                        milliseconds: 0,
                    }
                }
                if (prevState.milliseconds === 100) {
                    return {
                        minutes: prevState.minutes,
                        seconds: prevState.seconds + 1,
                        milliseconds: 0,
                    }
                } else {
                    return {
                        minutes: prevState.minutes,
                        seconds: prevState.seconds,
                        milliseconds: prevState.milliseconds + 1
                    }
                }
            case "STOP_ME":
                return{
                    minutes: prevState.minutes,
                    seconds: prevState.seconds,
                    milliseconds: prevState.milliseconds
                }
            case "RESET_ME":
                return{
                    minutes: 0,
                    seconds: 0,
                    milliseconds: 0
                }
            default:
                return prevState   
        }
    }
    
// const store = createStore(reducer)
// export default store
export default createStore(reducer);