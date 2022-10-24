export function NavBar(){
    const newLocal = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ba95df81-b44c-4b79-bec4-c88b9cbec68e/d1cyryj-db9b9eac-6c61-40cf-b615-4d27a39785f9.png/v1/fill/w_511,h_365,strp/arcane_symbol__water_by_thedarkwolfpup_d1cyryj-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MzY1IiwicGF0aCI6IlwvZlwvYmE5NWRmODEtYjQ0Yy00Yjc5LWJlYzQtYzg4YjljYmVjNjhlXC9kMWN5cnlqLWRiOWI5ZWFjLTZjNjEtNDBjZi1iNjE1LTRkMjdhMzk3ODVmOS5wbmciLCJ3aWR0aCI6Ijw9NTExIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.OTfplVGewkZQu3eNPu8M4VBNToUzb3G8B0Bmow6089M";
    return(
    <>
        <nav className="navbar navbar-dark bg-dark sticky-top">
            <div className="container-fluid">
                <div>
                    <div>
                        <button className="circle">&#60;</button>
                        <button className="circle">&#62;</button>
                    </div>
                    <div></div>
                </div>
                <a className="navbar-brand" href="https://reactjs.org/">
                    <img src={newLocal} alt="Logo" width="30" height="24" className="d-inline-block align-text-top" style={{
                        borderRadius: '50%',
                        marginTop: "2px"
                    }}/>
                    {" "}
                Arcane
                </a>
                <div>
                    <button className="sign bt">Sign up</button>
                    <button className="login bt">Log in</button>
                </div>
            </div>
        </nav>
    </>
    );
}