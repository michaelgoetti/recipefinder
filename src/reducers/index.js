import { combineReducers } from 'redux';
import { SET_RECIPES, FAVORITE_RECIPE, REMOVE_FAVORITE } from '../actions';

function recipes(state = [], action) {
	switch(action.type) {
		case SET_RECIPES:
			for (var i=0; i<action.items.length; i++) {
				action.items[i].id = (new Date().getTime() + i);
			}
			return action.items;
		default:
			return state;
	}
}

function favoriteRecipes(state = [], action) {
	switch(action.type) {
		case FAVORITE_RECIPE:
			state = [...state];
			if (state.indexOf(action.recipe) === -1) {
				state = [...state, action.recipe];
			}
			return state;
		case REMOVE_FAVORITE:
			state = state.filter(recipe => recipe.id !== action.id);
			return state;
		default:
			return state;
	}
}

const rootReducer = combineReducers({
	recipes,
	favoriteRecipes,
});

export default rootReducer;
