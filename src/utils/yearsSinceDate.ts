export default function yearsSinceDate(dateStr: string) {
    const [month, year] = dateStr.split("-").map(Number);
    const givenDate = new Date(year, month - 1);
    const currentDate = new Date();
  
    // Difference in years (rounding up)
    let yearsDiff = currentDate.getFullYear() - givenDate.getFullYear();
    const monthDiff = currentDate.getMonth() - givenDate.getMonth();
  
    // If the current month is before the given month or it's the same month but the current day is before the given day,
    // subtract a year from the difference
    if (monthDiff < 0 || (monthDiff === 0 && currentDate.getDate() < givenDate.getDate())) {
      yearsDiff--;
    }
  
    // Since we need to round up the years, if the difference in months is negative, we add one year to the result
    return yearsDiff >= 0 ? yearsDiff + 1 : 0;
}
  