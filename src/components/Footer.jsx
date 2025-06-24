import React from 'react'

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal footer-center fixed bottom-0 bg-base-300 text-base-content p-4">
  <aside>
    <p>Copyright © {new Date().getFullYear()} - All right reserved by DevTinder Ltd</p>
  </aside>
</footer>
  )
}

export default Footer