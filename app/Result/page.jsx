import React from 'react'
import s from './Result.module.css'
export default function page() {
  return (
  <>
        <div className={s.mainContainer}>
          <h1 className={s.linkShort}>
              Your short url: 
          </h1>
          <div className={s.container}>
              <span>short url will be here</span>
              <button>
                  copy
              </button>
          </div>
        </div>
    </>
  )
}
