import '../styles/Sidebar.css'

function Sidebar({ open, children, select }){
    return (
        <div className={`sidebar ${ open ? 'open' : '' }`} ref={select}>
            <div className='sidebar-menus'>{children}</div>
        </div>
    )
}
export default Sidebar