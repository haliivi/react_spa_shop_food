import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {getFilteredByCategory} from '../api'
import {Preloader} from '../layouts/Preloader'
import {MealsList} from './MealsList'

function  Category () {
    const {name} = useParams();
    const [meals, setMeals] = useState([])
    
    useEffect (() => {
        getFilteredByCategory(name).then(data => setMeals(data.meals));
    }, [name])

    return (
        <>
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
