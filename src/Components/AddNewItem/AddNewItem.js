import { useState } from 'react';
import './AddNewItem.css';

function AddNewItem(props) {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [ingerdients, setIngredients] = useState('');

    function SubmitHandler(event) {
        event.preventDefault();

        const newRecipe = {
            title: name,
            steps: description,
            ingredients: ingerdients,
            id: Math.random()
        };

        props.onAddNew(newRecipe);
        setName('');
        setDescription('');
        setIngredients('');
    };

    function nameChangeHandler(event) {
        setName(event.target.value);
    };

    function descriptionChangeHandler(event) {
        setDescription(event.target.value);
    };

    function ingredientsChangeHandler(event) {
        setIngredients(event.target.value);
    };

    return(
        <form onSubmit={SubmitHandler} className="add-new-item">
            <label className="add-new-item__title">Add new recipe</label>
            <div className="add-new-item__name">
                <label>Name</label>
                <div>
                    <input maxLength="30" className="add-new-item__input-field__name" type="paragraph-text" rows="5" value={name} onChange={nameChangeHandler}></input>
                </div>
            </div>
            <div className="add-new-item__name">
                <label>steps</label>
                <div> 
                    <textarea className="add-new-item__input-field__textarea" type="paragraph-text" rows="5" value={description} onChange={descriptionChangeHandler}></textarea>
                </div>
            </div>
            <div className="add-new-item__name">
                <label>Ingredients</label>
                <div>
                    <textarea className="add-new-item__input-field__textarea" type="paragraph-text" value={ingerdients} onChange={ingredientsChangeHandler}></textarea>
                </div>
            </div>
            <button type="submit" className="add-new-item__submit-button">Add</button>
        </form>
    );
};

export default AddNewItem;