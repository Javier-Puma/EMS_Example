'use client'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from '@/app/components/header/HeaderComponent'
import Footer from '@/app/components/footer/FooterComponent'
import './globals.css'
import { usePathname } from 'next/navigation'
import Notification from '@/app/components/Notification/Notification'
import { NotificationProvider } from '@/app/components/notification/context/notificationContext'


export default function DashboardLayout({ children }) {
  const pathname = usePathname()

  return (
    <NotificationProvider>
      <html lang="en">
        <body>
          <div className='min-vh-100 d-flex flex-column'>
            <Header />
            <main className='flex-grow-1'>
              <div className='container py-4'>
                {/* Mostrar notificaciones globales */}
                <Notification />
                
                {/* Breadcrumbs dinámicos */}
                {pathname !== '/' && (
                  <nav aria-label="breadcrumb" className='mb-4'>
                    <ol className='breadcrumb'>
                      <li className='breadcrumb-item'>
                        <a href="/">Home</a>
                      </li>
                      {pathname.split('/').filter(Boolean).map((segment, index, segments) => (
                        <li 
                          key={index} 
                          className={`breadcrumb-item ${index === segments.length - 1 ? 'active' : ''}`}
                        >
                          {index === segments.length - 1 ? (
                            segment.charAt(0).toUpperCase() + segment.slice(1)
                          ) : (
                            <a href={`/${segments.slice(0, index + 1).join('/')}`}>
                              {segment.charAt(0).toUpperCase() + segment.slice(1)}
                            </a>
                          )}
                        </li>
                      ))}
                    </ol>
                  </nav>
                )}
                
                {children}
              </div>
            </main>
            
            <Footer />
          </div>
        </body>
      </html>
    </NotificationProvider>
  )
}