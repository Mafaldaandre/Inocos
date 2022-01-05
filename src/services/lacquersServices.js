import Api from '../services/api';

async function getLacquers() {
    return await Api.get("/lacquers");
}

export { getLacquers };