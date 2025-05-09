import React, { useEffect } from 'react';

const Fundraiser = () => {
  useEffect(() => {
    const scriptUrl = 'https://www.gofundme.com/static/js/embed.js';
    const existingScript = document.querySelector(`script[src="${scriptUrl}"]`);

    const loadScript = () => {
      if (!existingScript) {
        const script = document.createElement('script');
        script.src = scriptUrl;
        script.async = true;

        script.onload = () => {
          const event = new Event('DOMContentLoaded', {
            bubbles: true,
            cancelable: true,
          });
          document.dispatchEvent(event);
        };

        script.onerror = () => {
          console.error('Error loading the GoFundMe embed script');
        };

        document.body.appendChild(script);

        return () => {
          document.body.removeChild(script);
        };
      } else {
        const event = new Event('DOMContentLoaded', {
          bubbles: true,
          cancelable: true,
        });
        document.dispatchEvent(event);
      }
    };

    if (document.readyState === 'complete') {
      loadScript();
    } else {
      window.addEventListener('load', loadScript);
      return () => window.removeEventListener('load', loadScript);
    }
  }, []);

  return (
    <div class="min-h-screen flex justify-center py-10">
      <div class="flex gap-40 grid grid-cols-1 sm:grid-cols-3 ">
        <div className=" gfm-embed " data-url="https://www.gofundme.com/f/help-haitham-and-his-family-to-get-to-a-safe-place/widget/large?sharesheet=CAMPAIGN_PAGE&attribution_id=undefined"></div>
        <div className=" gfm-embed " data-url="https://www.gofundme.com/f/support-soas-student-encampment/widget/large?sharesheet=CAMPAIGN_PAGE&attribution_id=undefined"></div>
        <div className=" gfm-embed " data-url="https://www.gofundme.com/f/help-gazan-family-of-6-leave-gaza/widget/large?sharesheet=CAMPAIGN_PAGE&attribution_id=undefined"></div>
      </div>
    </div>
  );
};

export default Fundraiser;

