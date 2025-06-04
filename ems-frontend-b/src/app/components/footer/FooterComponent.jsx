import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5>Employee Management System</h5>
            <p>All rights reserved 2025 by Sogni_Appesi</p>
          </div>
          <div className="col-md-6 text-end">
            <Link href="/privacy" className="text-white me-3">Privacy Policy</Link>
            <Link href="/terms" className="text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}