import { Outlet, Link } from "react-router-dom";


function User() {
    return (
        <>
            <div>
                <button><Link to="orders">Orders</Link></button>
                <button><Link to="profile">Profile</Link></button>
            </div>
            <h1>This is User Component</h1>
            <Outlet />
        </>
    )
}

export function Orders() {
    return (
        <h1>This is User Orders Component</h1>
    )
}

export function Profile() {
    return (
        <h1>This is User Profile Component</h1>
    )
}

export default User