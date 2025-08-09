import { Button } from "@/components/ui/button"
import './App.css'
import { Outlet } from "react-router"
import Layout from "./components/layout/Layout"

function App() {
 

  return (
    <>
    <div>
    <Layout>
      <Outlet/>
    </Layout>
    </div>
    </>
  )
}

export default App
