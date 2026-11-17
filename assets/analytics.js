// Replace this placeholder with your GA4 web stream Measurement ID.
const measurementId = '';

const isWebPage = ['https:', 'http:'].includes(window.location.protocol);

if (isWebPage && /^G-[A-Z0-9]+$/.test(measurementId)) {
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () {
    window.dataLayer.push(arguments);
  };

  // The contact URL can include a product selection. Only send the page path.
  const pageUrl = new URL(window.location.pathname, window.location.origin);
  const referrer = document.referrer ? new URL(document.referrer) : null;
  window.gtag('js', new Date());
  window.gtag('config', measurementId, {
    page_location: pageUrl.href,
    page_referrer: referrer ? referrer.origin + referrer.pathname : ''
  });

  const tag = document.createElement('script');
  tag.async = true;
  tag.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(measurementId);
  document.head.append(tag);
}

window.trackShopEvent = function (eventName, detail) {
  window.gtag?.('event', eventName, { interaction_detail: detail });
};
