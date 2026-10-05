import Script from "next/script";

/* ---------------------------------------------------------------------------
 * ChatWidget — the GoHighLevel (LeadConnector) live chat bubble, site-wide.
 *
 * Loaded through next/script rather than a raw <script> so the App Router
 * controls injection and the loader is never evaluated twice across client
 * navigations. `lazyOnload` keeps it out of the critical path: the bubble is
 * support UI, not page content, so it waits for idle instead of competing
 * with the fonts and the scrapbook background image for bandwidth.
 *
 * The widget id comes from NEXT_PUBLIC_GHL_WIDGET_ID. It isn't a secret —
 * LeadConnector exposes it in the markup of every site that embeds the
 * widget — but keeping it in the environment means staging and production
 * can point at different inboxes, and a missing value disables the widget
 * cleanly instead of shipping a dead script tag. Set it wherever the site is
 * deployed, plus .env.local for local work; with no value this renders
 * nothing at all.
 * ------------------------------------------------------------------------- */

const WIDGET_ID = process.env.NEXT_PUBLIC_GHL_WIDGET_ID;

export default function ChatWidget() {
  if (!WIDGET_ID) return null;

  return (
    <Script
      id="ghl-chat-widget"
      src="https://widgets.leadconnectorhq.com/loader.js"
      data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
      data-widget-id={WIDGET_ID}
      strategy="lazyOnload"
    />
  );
}
