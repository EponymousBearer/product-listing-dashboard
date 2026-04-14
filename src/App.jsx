import { NavLink, Outlet, Route, Routes } from 'react-router-dom'
import ListingPage from './pages/ListingPage'
import RegisterPage from './pages/RegisterPage'

const navLinkClassName = ({ isActive }) =>
  `rounded-lg px-3 py-2 text-sm font-semibold transition ${
    isActive ? 'bg-brand-500 text-white' : 'text-slate-700 hover:bg-slate-100'
  }`

const AppLayout = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="border-b border-slate-200 bg-white">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <NavLink to="/" className="text-lg font-black tracking-tight text-brand-600">
            ShopWave
          </NavLink>

          <div className="flex items-center gap-2">
            <NavLink to="/" end className={navLinkClassName}>
              Products
            </NavLink>
            <NavLink to="/register" className={navLinkClassName}>
              Register
            </NavLink>
          </div>
        </nav>
      </header>

      <main className="px-4 py-8 sm:px-6 lg:px-8">
        <Outlet />
      </main>
    </div>
  )
}

const App = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<ListingPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>
    </Routes>
  )
}

export default App
