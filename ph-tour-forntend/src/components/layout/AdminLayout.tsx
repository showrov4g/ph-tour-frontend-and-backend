
import { Outlet } from 'react-router'

const AdminLayout = () => {
  return (
    <div>
      <h1> This is admin page</h1>
      <Outlet/>
    </div>
  )
}

export default AdminLayout
