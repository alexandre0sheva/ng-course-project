import { Recipe } from '../recipe.model';
import { Ingredient } from '../../shared/ingredient.model';
import * as RecipeActions from './recipe.actions';
import * as fromApp from '../../store/app.reducers';

export interface FeatureState extends fromApp.AppState {
	recipes: State
}

export interface State {
	recipes: Recipe[];
}

const initialState: State = {
	recipes: [
		new Recipe(
			'Tasty Schnitzel',
			'A super-tasty Schnitzel - just awesome!',
			'https://upload.wikimedia.org/wikipedia/commons/2/2f/Oscar_schnitzel_at_Grilli_Toro.jpg',
			[
				new Ingredient('Meat', 1),
				new Ingredient('French Fries', 20)
			]
		),
		new Recipe('Big Fat Burger',
			'What else you need to say?',
			'https://upload.wikimedia.org/wikipedia/commons/9/9a/Big_Mac_hamburger.jpg',
			[
				new Ingredient('Buns', 2),
				new Ingredient('Meat', 1)
			]
		)
	]
}

export function recipeReducer(state = initialState, action: RecipeActions.RecipeActions) {
	switch (action.type) {
		case RecipeActions.SET_RECIPES:
			return {
				...state,
				recipes: [...action.payload]
			};
		case RecipeActions.ADD_RECIPE:
			return {
				...state,
				recipes: [...state.recipes, action.payload]
			};
		case RecipeActions.UPDATE_RECIPE:
			const idx: number = action.payload.index;
			const recipe = state.recipes[idx];
			const updatedRecipe = {
				...recipe,
				...action.payload.updatedRecipe
			};
			const recipes = [...state.recipes];
			recipes[action.payload.index] = updatedRecipe;
			return {
				...state,
				recipes: recipes
			};
		case RecipeActions.DELETE_RECIPE:
			const oldRecipes = [...state.recipes];
			oldRecipes.splice(action.payload, 1);
			return {
				...state,
				recipes: oldRecipes
			};
		default: 
			return state;
	}
}