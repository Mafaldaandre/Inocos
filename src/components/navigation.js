import "../assets/navigation.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { getGamma } from '../services/gammaServices';
import WishlistComponent from "../components/wishlist";

const Navigation = () => {
	const [search, setSearch] = useState('');
	const [gamma, setGamma] = useState([]);
	const { search: pSearch } = useParams();
	
	const navigate = useNavigate();
	
	useEffect(() => {
		getGamma().then(({data: lacquersGamma})=>{
		setGamma(lacquersGamma);
		})
	}, []);
	
	useEffect(() => {
		if (pSearch) {
			setSearch(pSearch);
		}
	}, [pSearch])

	const handleApplySearch = (e) => {
		if (e.key === 'Enter' || e.type  === "click") {
    		navigate(`/search/${search}`)
		}
	}

	return (
	<div>
		<nav className="header-nav">
			<ul>
				<h1><Link to={`/`}>Inocos</Link></h1>
				<li><Link to={`/lacquers`}> Vernizes </Link></li>
				<li><Link to={`/map`}>Onde comprar</Link></li>
				<div className="dropdown">
					<button>Gamma</button>
					<div class="dropdown-content">
						
					  {
         				 gamma.map(g => (<Link key={g.id} to={`/gamma/${g.id}`}>{g.name}</Link>))
      				  }
		
					</div>
				</div>

				<div className="search-form">
					<input type="text" value={search} name="search"  placeholder="Procura o teu verniz"  onChange={ e => setSearch(e.target.value)}  onKeyUp={handleApplySearch}/>
						<button onClick={
							handleApplySearch}>Search</button>
				</div>
				<WishlistComponent />
			</ul>
		</nav>
	</div>
)};

export default Navigation;



