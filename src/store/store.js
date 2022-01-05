import { createStore } from "./myStore";
import { StateLoader } from './stateLoader';

const stateLoader = new StateLoader(); 

function reducer(state, action) {
   switch (action.type) {
       case 'ADD':
           const checkIfExist =  state.find(lacquer => lacquer.id == action.lacquer.id )
           !checkIfExist && state.push(action.lacquer)
           stateLoader.saveState(state);
           return state;
       case 'REMOVE': 
           state=state.filter (lacquer => {
               if(lacquer.id == action.lacquer.id) {
                   return;
               }
               return lacquer;
           } );
               
            stateLoader.saveState(state);
            return state;
        default:
            return state;
   }
}

export const store = createStore(reducer, stateLoader.loadState())