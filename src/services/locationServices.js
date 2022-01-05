import Api from './api';

async function getVendingLocation() {
    return await Api.get("/vendingLocation");
}

async function getVendingLocationById(id) {
    return await Api.get(`/vendingLocation/${id}`)
};

export { getVendingLocation, getVendingLocationById };