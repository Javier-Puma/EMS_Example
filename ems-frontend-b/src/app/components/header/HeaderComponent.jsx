'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname()
  
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" href="/">
            Employee Management System
          </Link>
          
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link 
                  className={`nav-link ${pathname === '/' ? 'active' : ''}`} 
                  href="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  className={`nav-link ${pathname === '/employees' ? 'active' : ''}`} 
                  href="/employees"
                >
                  Employees
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  className={`nav-link ${pathname === '/add' ? 'active' : ''}`} 
                  href="/add"
                >
                  Add Employee
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}