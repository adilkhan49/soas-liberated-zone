function days_between(date1,date2) {

    // The number of milliseconds in one day
    const ONE_DAY = 1000 * 60 * 60 * 24;
    // Calculate the difference in milliseconds
    const differenceMs = Math.abs(date2 - date1);
  
    // Convert back to days and return
    return Math.round(differenceMs / ONE_DAY);
  }

  export default days_between