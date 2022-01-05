import Api from './api';

async function getGamma() {
    return await Api.get("/lacquersGamma");
}

async function getGammaById(id) {
    return await Api.get(`/lacquersGamma/${id}`)
}

export { getGamma, getGammaById };