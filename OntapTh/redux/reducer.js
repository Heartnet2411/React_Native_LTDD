export default function calculate(state = {result: 0}, action) {
    switch (action.type) {
        case 'ADD':
            const rsAdd = action.value1 + action.value2;
            return {
                ...state,
                result: rsAdd
            }
        case 'SUB':
            const rsSub = action.value1 - action.value2;
            return {
                ...state,
                result: rsSub
            }
        case 'MUL':
            const rsMul = action.value1 * action.value2;
            return {
                ...state,
                result: rsMul
            }
        case 'DIV':
            const rsDiv = action.value1 / action.value2;
            return {
                ...state,
                result: rsDiv
            }
        default: return state;
    }

}
