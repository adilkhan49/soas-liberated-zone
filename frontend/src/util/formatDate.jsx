export default function formatDate(date_string) {
    const date = new Date(date_string);
    return date.toLocaleString('en-GB', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    }