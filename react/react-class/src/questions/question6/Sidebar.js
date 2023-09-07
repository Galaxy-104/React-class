import './Sidebar.css'

function Sidebar({ open, children, name }){
    return (
        <div className={`sidebar ${ open ? 'open' : '' }`} name={name}>
            <div className='sidebar-menus'>{children}</div>
        </div>
    )
}
export default Sidebar