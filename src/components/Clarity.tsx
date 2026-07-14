import Script from "next/script";

/* ---------------------------------------------------------------------------
 * Clarity — Microsoft Clarity analytics, rendered once from the root layout.
 * Production only: locally the component renders nothing, so dev sessions
 * never pollute recordings. afterInteractive keeps it off the critical path —
 * no render blocking, no SEO impact.
 * ------------------------------------------------------------------------- */

const CLARITY_PROJECT_ID = "xm3b6g6u9w";

export default function Clarity() {
  if (process.env.NODE_ENV !== "production") return null;

  return (
    <Script id="microsoft-clarity" strategy="afterInteractive">
      {`(function(c,l,a,r,i,t,y){
    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "${CLARITY_PROJECT_ID}");`}
    </Script>
  );
}
