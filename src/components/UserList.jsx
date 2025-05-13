import UserCard from './UserCard'
import Search from './Search'

export default function UserList({users,randomNumber,randomUser,getAll}) {

    return (
        <>
            <Search randomNumber={randomNumber} getAll={getAll}/>
            {randomUser ?
            (
            <div>
                <UserCard name={randomUser.name} email={randomUser.email}   />
            </div>
            ) :
            (
            <div className="user-list">
                {users.map((user)=>(
                    <UserCard key={user.name} name={user.name} email={user.email}/>
                ))}
            </div>
        )
}
        </>
    )
}
