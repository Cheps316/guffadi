import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <section >
      <div className='footer_container'>
        <div className='footer_columns'>
          <h3>Contact Info</h3>
          <p>Guffadi Creative Design, Digital Marketing & Development Agency</p>
          <ul>
            <li className='tick_list'>
            <svg className="tick" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
</svg>
              <span>Address:
                <br />Sherpa Mall, Durbarmarg,Kathmandu
              </span>
            </li>
            <li className='tick_list'>
            <svg className="tick" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
</svg>
              <span>Address:
                <br />Sherpa Mall, Durbarmarg,Kathmandu
              </span>
            </li>
          </ul>
        </div>
        <div className='footer_columns'>
          <h3>About Us</h3>
          <ul>
            <li>
              <Link href="/">About Organization</Link>
            </li>
            <li>
              <Link href="/">Social Marketing</Link>
            </li>
            <li>
              <Link href="/">Graphics Design</Link>
            </li>
            <li>
              <Link href="/">Web Development</Link>
            </li>
          </ul>
        </div>
        <div className='footer_columns'>
          <h3>Important Links</h3>
          <ul>
            <li>
              <Link href="/">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/">Cookies Policy</Link>
            </li>
            <li>
              <Link href="/">Terms & Conditions</Link>
            </li>
          </ul>
          <h3>Social Links</h3>
          <div>

          </div>
        </div>
      </div>
      <div className='flex-center copyright'>
        Copyright @2023 - Guffadi.Online
      </div>
    </section>
  )
}

export default Footer