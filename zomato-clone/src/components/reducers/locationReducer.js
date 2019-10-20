const initialState=
{
    address:''
}
export default function locationReducer(state=initialState,action)
{console.log('this is reducer')
    switch(action.type)
    {
        case 'GET_LOCATION':
            return {
                ...state,address:action.payload
            }
         default:
        return state;
    }
}