import React, { Component } from 'react';
import { connect } from 'react-redux';
import { favoriteRecipe } from '../actions';


class RecipeItem extends Component {
	constructor() {
		super();

		this.state = {
			favorited: false,
		}
	}

	favorite(recipe) {
		this.props.favoriteRecipe(recipe);
		this.setState({favorited: true});
	}

	render() {
		let { recipe } = this.props;

		return(
			<div className="recipe-item">
				{
					this.state.favorited ?
						<div className="star">&#9733;</div>
					:
						<div
							className="star"
							onClick={() => this.favorite(recipe)}>
							&#9734;
						</div>
				}
				<div className="recipe-text">
					<a href={recipe.href} target="_blank" rel="noreferrer noopener">
						<h3>{recipe.title}</h3>
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

export default connect(null, { favoriteRecipe })(RecipeItem);
