import React, {useEffect} from 'react';
import axios from 'axios';
import './viewFilms.css';

export default function ViewFilms() {

	const [data, setData] = React.useState([]);
	
	useEffect(() => {
		const fetchData = async () => {
			try {
                const response = await axios.get('http://localhost:3000/test');
                if (response.status === 200) {
                    setData(response.data)
                } 
            } catch(error) {
                console.log(error)
			}
        }
        fetchData()
	}, []);
		
	const array = data.map((list)=>{
		return (
			<div className="card" key={list.pelicula_id}>
				<div className="cardTitle">{list.pelicula_titulo}</div>
				<div className="cardSynopsis">{list.pelicula_sinopsis}</div>
			</div>
		);
	});
    
	return (
		<div className="container">{array}</div>
	);
};