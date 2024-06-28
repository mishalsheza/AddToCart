// export function loadCategories() {
//     return (dispatch) => {
//         fetch("https://run.mocky.io/v3/dc25e1aa-3ae4-4c41-8626-b2529c231bcd").then(
//             (res) => {
//                 return res.json();
//             }
//         ).then((res) => {
//             console.log(res);
//             dispatch({ type: "LOAD_CATEGORIES_DONE", payload: res });
//         })
//     }
// }

export function loadCategories() {

    return (dispatch) => {
        
        fetch("https://run.mocky.io/v3/dc25e1aa-3ae4-4c41-8626-b2529c231bcd")
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .then((res) => {
                console.log(res);
                dispatch({ type: "LOAD_CATEGORIES_DONE", payload: res });
            })
            .catch((error) => {
                console.error('Error fetching categories:', error);
                // Handle error state or dispatch an action to indicate fetch failure
            });
    };
}


function categoriesReducer(state = {
    categories: []
}, action) { 
    switch (action.type) {
        case "LOAD_CATEGORIES_DONE": {
            return {
                ...state,
                categories: action.payload
            }
        }
        default:
            return state;
    }
}

export default categoriesReducer;