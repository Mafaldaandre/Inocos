export class StateLoader {
    key = 'STATE_LACQUERS'; 

    loadState() {
        try {
            let serializedState = localStorage.getItem(this.key);

            if (serializedState === null) {
                return this.initializeState();
            }

            return JSON.parse(serializedState);
        }
        catch (err) {
            return this.initializeState();
        }
    }

    saveState(state) {
        try {
            let serializedState = JSON.stringify(state);
            localStorage.setItem(this.key, serializedState);
        }
        catch (err) {

        }
    }

    initializeState() {
        return []
        };
}
