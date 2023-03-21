import {useEffect, useState} from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import {getFilteredByCategory} from '../api'
import {Preloader} from '../layouts/Preloader'
import {MealsList} from './MealsList'

function  Category () {
    const {name} = useParams();
    const [meals, setMeals] = useState([])
    const navigate = useNavigate()

    useEffect (() => {
        getFilteredByCategory(name).then(data => setMeals(data.meals));
    }, [name])

    return (
        <>
            <button className="btn" onClick={() => navigate(-1)}>Go back</button>
            {
                !meals.length ? (
                    <Preloader />
                ) : (
                    <MealsList meals={meals} />
                )
            }
        </>
    )
}

export {Category}
