export function NavBar(){
    return(
        <>
            <nav className="navbar bg-info">
                <div className="container-fluid">
                    <a className="navbar-brand" href="https://reactjs.org/" target="_blank" rel="noreferrer">JSX</a>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-dark" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </>
    )
}