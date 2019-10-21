import { stat } from "fs";

const initialState=
{
    address:'',
    city_id:'',
    collections:[]
}
export default function locationReducer(state=initialState,action)
{console.log('this is reducer')
    switch(action.type)
    {
        case 'GET_LOCATION':
            return {
                ...state,address:action.payload.city_name,city_id:action.payload.city_id
            }
            case 'GET_COLLECTIONS':
                return {
                    ...state,collections:action.payload.collections
                }
         default:
        return state;
    }
}