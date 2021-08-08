import './Description.css'

function Description(props) {
    return(
        <div className="description">
            <div className="description__title">{props.recipe[0].title}</div>
            <div className="description__steps">
                <div className="description__subtitle">Steps</div>
                {props.recipe[0].steps}
            </div>
            <div className="description__ingredients">
                <div className="description__subtitle">Ingredients</div>
                {props.recipe[0].ingredients}
            </div>
        </div>
    );
}

export default Description;