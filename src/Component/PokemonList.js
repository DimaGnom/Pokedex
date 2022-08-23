const PokemonList = (props) => {
	console.log(props);
	return (
		<div className="boxWithButton">
			<div class="box">
				{props.selectedPokemons.map((pokemon) => {
					return (
						<button key={pokemon.id} onClick={() => props.handleChangPokemon(pokemon)} >
							<img src={pokemon.img} />
							{pokemon.name}
							<div>
								<table>
									{pokemon.types.map((type) =>
										<td key={type} className={type}>{type}</td>
									)}
								</table>
							</div>
						</button>
					)
				})
				}

			</div>
			<div>
				<button className="btn" onClick={props.loadingMore}>More</button>
			</div>
		</div>
	)
};

export default PokemonList;