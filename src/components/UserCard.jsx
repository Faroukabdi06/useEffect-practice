export default function UserCard({name,email}) {
    return (
        <>
            <div className="user-card">
                <img width="100" height="100" src="https://img.icons8.com/material-rounded/100/user-male-circle.png" alt="user-male-circle"/>
                <h2 className="user-name">{name}</h2>
                <p className="user-role">{name}</p>
                <p className="user-description">{email}</p>
            </div>
        </>
    )
}
