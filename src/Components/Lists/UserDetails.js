import { React, Component } from 'react';
import UserList from './UserList';
import "./lists.css";

const UserDetails = [
    {
        id: 1,
        name: "Daram",
        designation: "Software Developer",
    },

    {
        id: 2,
        name: "Daram Guru",
        designation: "Software Engineer",
    },

    {
        id: 3,
        name: "Guru Mahesh",
        designation: "Software Engineer & Software Developer",
    },

    {
        id: 4,
        name: "Raj",
        designation: "Doctor",
    }
]

class Users extends Component {

    state = {
        searchInput: "",
    }

    onChangeSearchInput = (event) => {
        this.setState({ searchInput: event.target.value })
    }

    render() {
        const searchInput = this.state
        // console.log(searchInput)
        // const searchResults = UserDetails.filter(eachUser =>
        //     eachUser.name.includes(searchInput)
        // )

        const searchResults = UserDetails.filter(eachUser =>
            eachUser.name.includes(searchInput),
        )

        return (
            <>
                <center>
                    <div>
                        <h1>Users List</h1>
                        <input type='search' onChange={this.onChangeSearchInput} />
                        <ul className="list-container" >
                            {searchResults.map(eachUser => (
                                <UserList userInfo={eachUser} key={eachUser.id} />
                            ))}
                        </ul>
                    </div>
                </center>
            </>
        )
    }
}

export default Users