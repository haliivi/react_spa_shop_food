import {useEffect, useState} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import {getMealById} from '../api';
import { Preloader } from '../layouts/Preloader'

function Recipe () {
    const [recipe, setRecipe] = useState({})
    const {id} = useParams();
    const navigate = useNavigate()

    useEffect(() => {
        getMealById(id).then(data => setRecipe(data.meals[0]))
    }, [id]);

    return (
        <>
            {
                !recipe.idMeal ? (
                    <Preloader />
                ) : (
                    <div className="recipe center-align">
                        <img src={recipe.strMealThumb} alt={recipe.strMeal} />
                        <h1>{recipe.strMeal}</h1>
                        <h5>Category: {recipe.strCategory}</h5>
                        {
                            recipe.strArea ? <h6>Area: {recipe.strArea}</h6> : null
                        }
                        <p>{recipe.strInstructions}</p>

                        <table className="centered">
                            <thead>
                                <tr>
                                    <th>Ingredient</th>
                                    <th>Measure</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    Object.keys(recipe).map(key => {
                                        if (key.includes('strIngredient') && recipe[key]) {
                                            return (
                                                <tr key={key}>
                                                    <td>{recipe[key]}</td>
                                                    <td>
                                                        {
                                                            recipe[`strMeasure${key.slice(13)}`]
                                                        }
                                                    </td>
                                                </tr>
                                            )
                                        };
                                        return null;
                                    })
                                }
                                <tr>
                                    <td>Alvin</td>
                                    <td>Eclair</td>
                                </tr>
                                <tr>
                                    <td>Alan</td>
                                    <td>Jellybean</td>
                                </tr>
                                <tr>
                                    <td>Jonathan</td>
                                    <td>Lollipop</td>
                                </tr>
                            </tbody>
                        </table>

                        {
                            recipe.strYoutube ? (
                                <div className="row">
                                    <h5 style={{margin: '2rem 0 1.5rem'}}>Video Recipe</h5>
                                    <iframe 
                                        title={id}
                                        src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(-11)}`}
                                        frameborder="0"
                                        allowFullScreen
                                    />
                                </div>
                            ) : null
                        }
                    </div>
                )
            }
            <button className="btn" onClick={() => navigate(-1)}>Go Back</button>
        </>
    )
}

export {Recipe}