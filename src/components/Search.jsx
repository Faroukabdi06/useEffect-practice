export default function Search({randomNumber,getAll}) {
    return (
        <div className="search">
            <input className="search-number" type="button" value="Get Random User" onClick={randomNumber}/>
            <input className="search-number" type="button" value="Get All Users" onClick={getAll}/>

        </div>
    )
}