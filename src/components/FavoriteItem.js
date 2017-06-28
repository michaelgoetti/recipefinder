import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeFavoriteById } from '../actions';


class FavoriteItem extends Component {
	constructor() {
		super();

		this.state = {
			favorited: true,
		}
	}

	favorite(recipe) {
		this.props.favoriteRecipe(recipe);
		this.setState({favorited: false});
	}

	render() {
		let { recipe } = this.props;

		return(
			<div className="recipe-item">
				{
					// this.state.favorited ?
						<div
							className="star"
							onClick={() => this.props.removeFavoriteById(recipe.id)}
						>&#9733;</div>
					// :
						// <div className="star">
						// 	&#9734;
						// </div>
				}
				<div className="recipe-text">
					<a href={recipe.href} target="_blank" rel="noreferrer noopener">
						<h4>{recipe.title}</h4>
					</a>
					<p>{recipe.ingredients}</p>
				</div>
				<img
					src={recipe.thumbnail}
					alt={recipe.title}
					className="recipe-img"
				/>
			</div>
		)
	}
}

export default connect(null, { removeFavoriteById })(FavoriteItem);
