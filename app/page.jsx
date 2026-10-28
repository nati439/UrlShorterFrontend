"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import s from "./homepage.module.css";

export default function Page() {
  const [longUrl, setLongUrl] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault(); // stops the form from reloading the page
    setError("");

    try {
      const res = await fetch("http://localhost:8080/shorten", {
        method: "POST",
        headers: { "Content-Type": "text/plain" },
        body: longUrl,
      });

      if (res.ok) {
        const code = await res.text();
        router.push(`/Result/${code}`);
      } else {
        setError(await res.text()); // the 400 message from Java
      }
    } catch (err) {
      setError("Could not reach the server");
    }
  }

  return (
    <div className={s.mainContainer}>
      <h1 className={s.linkShort}>Link Shortener</h1>
      <span className={s.madeby}>Built by Natnael Cherie ✦</span>      <div className={s.container}>
        <form className={s.containerform} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Paste the looongg url here: "
            value={longUrl}
            onChange={(e) => setLongUrl(e.target.value)}
          />
          <button type="submit">Shorten</button>
          {/* The button has type="submit", and it sits inside the <form>.
          Clicking a submit button (or pressing Enter in the input) makes the browser fire the form’s submit event. */}
        </form>
        {error && <p>{error}</p>}
      </div>
            
    </div>
  );
}