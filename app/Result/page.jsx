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
              <div className={s.theshorturl}>short url will be here</div>
              <button>
                  copy
              </button>
          </div>
        </div>
    </>
  )
}
