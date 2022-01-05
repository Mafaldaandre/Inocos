import HomePage from '../pages/HomePage';
import LacquersPage from '../pages/LacquersPage';
import DetailsPage from '../pages/DetailsPage';
import SearchPage from '../pages/SearchPage';
import GammaPage from '../pages/GammaPage';
import WishlistPage from '../pages/WishListPage';
import MapPage from '../pages/MapPage';
import VendingLocationPage from '../pages/VendingLocationPage';
import { Routes, Route } from 'react-router-dom';

const MyRoutes = () => {
    return (
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/lacquers"  element={<LacquersPage />} />
        <Route path="/details/:id" element={<DetailsPage />} />
        <Route path="/search/:search" element={<SearchPage />} />
        <Route path="/gamma/:id" element={<GammaPage />} />
        <Route path="/vendingLocation/:id" element={<VendingLocationPage/>} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/map" element={<MapPage />} />
    </Routes>)
    
}

export default MyRoutes;