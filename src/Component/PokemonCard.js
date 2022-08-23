const PokemonCard = ({selectedPokemon}) => {
	if (!selectedPokemon) {
		return null
	}
	return (
		<div class="choice">
			<img class="choicePokemon" src={selectedPokemon?.img || ""} ></img>
			<div>{selectedPokemon.name}</div>
			<table className="choiceTable">
				<tr>
					<td>Type</td>
					<td>{selectedPokemon.type}</td>
				</tr>
				<tr>
					<td>HP</td>
					<td>{selectedPokemon.hp}</td>
				</tr>
				<tr>
					<td>Attack</td>
					<td>{selectedPokemon.attack}</td>
				</tr>
				<tr>
					<td>Defense</td>
					<td>{selectedPokemon.defense}</td>
				</tr>
				<tr>
					<td>SP Attack</td>
					<td>{selectedPokemon.spAttack}</td>
				</tr>
				<tr>
					<td>SP Defense</td>
					<td>{selectedPokemon.spDefense}</td>
				</tr>
				<tr>
					<td>Speed</td>
					<td>{selectedPokemon.spDefense}</td>
				</tr>
				<tr>
					<td>Weight</td>
					<td>{selectedPokemon.weight}</td>
				</tr>
				<tr>
					<td>Total Moves</td>
					<td>{selectedPokemon.totalMoves}</td>
				</tr>
			</table>
		</div>
	)

};

export default PokemonCard;