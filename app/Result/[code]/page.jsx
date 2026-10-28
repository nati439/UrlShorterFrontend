import React from 'react'
import s from './Result.module.css'
import CopyButton from '../../CopyButton.jsx'
export const instant = false
// : it tells Next.js that this route is allowed to wait for the request data before rendering.

export default async function page({ params }) {
  const { code } = await params;
  const shortUrl = `http://localhost:8080/${code}`;

  return (
    <>
      <div className={s.mainContainer}>
        <h1 className={s.linkShort}>Your short url:</h1>
        <div className={s.container}>
          <div className={s.theshorturl}>{shortUrl}</div>
          <CopyButton text={shortUrl} />
        </div>
      </div>
    </>
  )
}