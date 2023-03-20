import {useParams, useNavigate, useMatch, useLocation} from 'react-router-dom'

function Movie() {
    const {title} = useParams();
    const navigate = useNavigate();
    // const value = useMatch();
    const value2 = useLocation();

    // console.log(value)
    console.log(value2)

    return (
        <>
            <h1>Some movie{title}</h1>
            <button className="btn" onClick={() => navigate(-1)}>Goback</button>
        </>
    )
}

export {Movie}