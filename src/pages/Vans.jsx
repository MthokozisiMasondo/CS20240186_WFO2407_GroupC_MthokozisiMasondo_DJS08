import React from "react"

function Vans() {
    const [vans, setVans] = React.useState([])
    React.useEffect(() => {
        fetch("/api/vans") 
        .then(res => res.json())
        .then(data => setVans(data.vans))
    }, [])

    const vanElements = vans.map(van => (
        <div key={van.id} className="van-tile">
            <img src={van.imageUrl} alt="" />
            <div>
                <h3>{van.name}</h3>
                <p>R{van.price}<span>/day</span></p>
            </div>
            <i className={`van-type ${van.type} selected`}>{van.type}</i>
        </div>
    ))

    return (
        <div className="van-list-container">
            <h1>Explore our van options</h1>
            <div className="van-list">
                {vanElements}
            </div>
        </div>
    )
}

export default Vans 