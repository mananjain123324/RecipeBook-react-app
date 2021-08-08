import { useState } from 'react';
import './RecipeName.css';

function RecipeName(props) {
    const [selected, setSelected] = useState(false);
    function recipeSelectHandler(event) {
        setSelected(event.target.value.toString());
        props.onRecipeNameClick(event.target.value.toString());
    };

    return(
        <div className='recipe-name'>
            <button value={props.title} onClick={recipeSelectHandler}>{props.title}</button>
        </div>
    );
};

export default RecipeName;