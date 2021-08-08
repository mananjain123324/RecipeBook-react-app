import RecipeName from './RecipeName';
import './Sidebar.css';

function Sidebar(props) {
    function recipeNameClickHandler(event) {
        props.onRecipeClick(event.toString());
    };

    function addNewClickHandler() {
        props.onAddNewClick();
    };

    return(
        <div className="sidebar">
            <div className="itemlist">
                {props.recipeList.map(recipe => <RecipeName onRecipeNameClick={recipeNameClickHandler} title={recipe.title} key={recipe.id}></RecipeName>)}
            </div>
            <button onClick={addNewClickHandler}>Add New</button>
        </div>
    );
};

export default Sidebar;