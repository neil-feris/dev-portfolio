export const pageview = (url) => {
  // console.log("pageview", url);
  window.gtag("config", "G-NZ0853WTD9", {
    page_path: url,
  });
};

export const event = ({ action, category, label, value }) => {
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value,
  });
};
