

const UserList = (props) => {
    const { userInfo } = props
    const { name, designation } = userInfo
    return (
        <>

            <li>{name}</li>
            <li>{designation}</li>

        </>
    )

}

export default UserList;