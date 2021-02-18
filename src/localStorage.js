export const loadState = _ => {
    try {
        const serializedState = localStorage.getItem('state');
        if(serializedState === null){
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (error) {
        return undefined;
    }
};

export const saveState = state => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    } catch (error) {
        alert(error);
    }
}

export const clearState = _ => {
    try{
        localStorage.clear();
    } catch (error){
        alert(error);
    }
}