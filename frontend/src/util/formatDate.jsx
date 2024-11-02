export default function formatDate(date_string,exclude_date=false,exclude_month=false) {
    const date = new Date(date_string);
    var options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      };
    if (exclude_date) {
        options = {
            year: 'numeric',
            month: 'long',
          }
    };
    if (exclude_month) {
        options = {
            year: 'numeric',
          }
    };
    return date.toLocaleString('en-GB', options)
    }