import { Link, useLocation } from 'react-router-dom'

export default function NoMatch() {
    let location = useLocation()

    return (
        <div>
            <h2>Nothing to see here !</h2>
            <code>Page : {location.pathname}</code>

            <p>
                <Link to='/'>Go to home page</Link>
            </p>
        </div>
    )
}
