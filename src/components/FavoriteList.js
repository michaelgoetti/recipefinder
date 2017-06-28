import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import FavoriteItem from './FavoriteItem';

class FavoriteList extends Component {
	render() {
		console.log('this.props', this.props);

		return (
			<div>
				<h4 className="link"><Link to='/'>Home</Link></h4>
			{' '}
				{ this.props.favoriteRecipes.length > 0 ?
						<h3>Favorites</h3>
					: <p></p>
				}
				{
					this.props.favoriteRecipes.map((recipe, index) => {
						return (
							<FavoriteItem key={index} recipe={recipe}/>
						)
					})
				}
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		favoriteRecipes: state.favoriteRecipes
	}
}

export default connect(mapStateToProps, null)(FavoriteList);
