import './globals.css'
import Link from 'next/link'
import Navbar from './layout/navbar'
import Hero from './layout/hero'
import LinkedinIcon from './icons/linkedin'
import GithubIcon from './icons/github'

export const metadata = {
  title: 'Cesar Gomez',
  description: 'Ruby on Rails Developer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="autumn">
      <body>
        <Navbar/>
        {children}
        <footer className="footer footer-center p-10 bg-primary text-primary-content">
          <div>
            <svg fill="#ffffff" width="64px" height="64px" viewBox="0 0 22 22" className="fill-current" xmlns="http://www.w3.org/2000/svg" id="memory-heart"><g id="SVGRepo_bgCarrier"></g><g id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"><path d="M12 20H10V19H9V18H8V17H7V16H6V15H5V14H4V13H3V12H2V10H1V5H2V4H3V3H4V2H9V3H10V4H12V3H13V2H18V3H19V4H20V5H21V10H20V12H19V13H18V14H17V15H16V16H15V17H14V18H13V19H12V20M5 11V12H6V13H7V14H8V15H9V16H10V17H12V16H13V15H14V14H15V13H16V12H17V11H18V9H19V6H18V5H17V4H14V5H13V6H12V7H10V6H9V5H8V4H5V5H4V6H3V9H4V11H5Z"></path></g></svg>
            <p className="font-bold">
              From Mexico with love. <br/>Providing Web Development since 2013
            </p>
            <p>Copyright © 2023 - All right reserved</p>
          </div>
          <div>
            <div className="grid grid-flow-col gap-4">
              <a><LinkedinIcon/></a>
              <a><GithubIcon/></a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
