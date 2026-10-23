import React from 'react'
import s from './homepage.module.css';
export default function page() {
  console.log(s)
  return (
    <>
        <div className={s.mainContainer}>
          <h1 className={s.linkShort}>
            Link Shortener 
          </h1>
          <div className={s.container}>
            <form className={s.containerform}>
              <input 
              type="text" 
              placeholder='Paste the looongg url here: '
              />
              <button>
                  Shorten
              </button>
            </form>
          </div>
        </div>
    </>
  )
}
