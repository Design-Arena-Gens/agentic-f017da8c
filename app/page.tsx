import styles from "./page.module.css";

const TiredManIllustration = () => (
  <svg
    className={styles.illustration}
    viewBox="0 0 360 360"
    role="img"
    aria-labelledby="tired-man-title"
  >
    <title id="tired-man-title">رجل منحنٍ يتأمل المدينة المزدحمة خلفه</title>
    <defs>
      <radialGradient id="bgHalo" cx="50%" cy="20%" r="65%">
        <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.25" />
        <stop offset="45%" stopColor="#38bdf8" stopOpacity="0.1" />
        <stop offset="100%" stopColor="#0f172a" stopOpacity="0" />
      </radialGradient>
      <linearGradient id="cityGlow" x1="0%" x2="100%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#334155" />
        <stop offset="60%" stopColor="#1e293b" />
        <stop offset="100%" stopColor="#0f172a" />
      </linearGradient>
      <linearGradient id="coat" x1="20%" x2="80%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#334155" />
        <stop offset="50%" stopColor="#1e293b" />
        <stop offset="100%" stopColor="#0b1120" />
      </linearGradient>
      <linearGradient id="skin" x1="0%" x2="100%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#f8fafc" stopOpacity="0.85" />
        <stop offset="100%" stopColor="#cbd5f5" stopOpacity="0.6" />
      </linearGradient>
      <filter id="softBlur" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="12" />
      </filter>
    </defs>
    <rect width="360" height="360" fill="url(#bgHalo)" />
    <g filter="url(#softBlur)" opacity="0.55">
      <rect x="36" y="140" width="288" height="120" rx="14" fill="url(#cityGlow)" />
      <rect x="60" y="120" width="30" height="80" rx="6" fill="#1f2937" />
      <rect x="280" y="100" width="40" height="110" rx="8" fill="#1f2937" />
      <rect x="120" y="135" width="32" height="95" rx="10" fill="#273044" />
      <rect x="210" y="115" width="24" height="72" rx="8" fill="#273044" />
    </g>
    <g className={styles.wave}>
      <ellipse cx="180" cy="270" rx="74" ry="18" fill="rgba(15,23,42,0.85)" />
      <g className={styles.chest}>
        <path
          d="M210 138c0 32-18 60-30 60s-30-28-30-60 13-48 30-48 30 16 30 48z"
          fill="url(#coat)"
        />
        <path
          d="M210 196c22 8 42 36 42 74 0 25-16 38-48 38h-48c-32 0-48-13-48-38 0-38 20-66 42-74"
          fill="url(#coat)"
        />
        <path
          d="M156 198c-10 18-12 38-6 62 8 32 32 46 62 46s54-14 62-46c6-24 4-44-6-62-12 22-30 34-56 34s-44-12-56-34z"
          fill="rgba(15,23,42,0.75)"
        />
      </g>
      <g className={styles.head}>
        <path
          d="M180 126c-21 0-34-12-34-34s15-38 34-38 34 16 34 38-13 34-34 34z"
          fill="url(#skin)"
        />
        <path
          d="M214 84c-1 27-38 28-48 10-3-5-4-11-2-16 4-9 14-14 26-14 11 0 20 3 24 11"
          fill="#0f172a"
        />
        <path
          d="M172 108c-4.5 0-8 3.5-8 8 0 3 2 5 4 5"
          stroke="#1e293b"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M202 108c4.5 0 8 3.5 8 8 0 3-2 5-4 5"
          stroke="#1e293b"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M188 122c-6 4-12 4-18 0"
          stroke="#1f2937"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M166 72c-4 8-2 18 4 26"
          stroke="#0b1120"
          strokeWidth="6"
          strokeLinecap="round"
        />
      </g>
      <path
        d="M126 206c-22 10-34 34-30 60 4 26 22 38 52 38"
        stroke="rgba(148, 163, 184, 0.35)"
        strokeWidth="8"
        strokeLinecap="round"
      />
      <path
        d="M234 206c22 10 34 34 30 60-4 26-22 38-52 38"
        stroke="rgba(148, 163, 184, 0.35)"
        strokeWidth="8"
        strokeLinecap="round"
      />
      <path
        d="M168 248c-12 20-26 32-44 36"
        stroke="rgba(96, 165, 250, 0.45)"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path
        d="M210 248c12 20 26 32 44 36"
        stroke="rgba(96, 165, 250, 0.45)"
        strokeWidth="6"
        strokeLinecap="round"
      />
    </g>
    <g opacity="0.3">
      <path
        d="M74 248c8-18 25-24 42-14"
        stroke="rgba(148, 163, 184, 0.5)"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path
        d="M274 248c-8-18-25-24-42-14"
        stroke="rgba(148, 163, 184, 0.5)"
        strokeWidth="6"
        strokeLinecap="round"
      />
    </g>
  </svg>
);

export default function Home() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <h1 className={styles.title}>صورة رجلٍ أرهقته الدنيا</h1>
        <p className={styles.subtitle}>
          لوحة رقمية لشخص يقف في مدينة صاخبة بينما ينحني تعباً. الإضاءة الباردة والظلال
          العميقة تعكس صراع الحياة اليومية وروتينها المتعب، مع لمسة أمل خافتة في الخلفية.
        </p>
      </header>

      <section className={styles.card}>
        <div className={styles.mood}>
          <p className={styles.quote}>
            &ldquo;أحياناً نشعر بأن العالم يميل بثقله على أكتافنا، ومع ذلك نستمر بالمضي قدماً
            متشبثين بخيط النور البعيد.&rdquo;
          </p>
          <div className={styles.signature}>
            <span className={styles.statusPill} aria-hidden="true" />
            <span>مشهد من المدينة بعد منتصف الليل</span>
          </div>
        </div>
        <TiredManIllustration />
      </section>
    </main>
  );
}
