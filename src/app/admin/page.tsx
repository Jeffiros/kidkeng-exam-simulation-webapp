import Sidebar from './SideBar'
import Dashboard from './DashBoard'


export default function Admin() {
    return (
        <>
            <div className='flex flex-col h-screen lg:flex-row-reverse'><Dashboard />
                <div>
                    <Sidebar />
                </div>
            </div>


        </>
    )
}