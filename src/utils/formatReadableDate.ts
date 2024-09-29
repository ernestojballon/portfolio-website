function formatReadableDate(dateString: string) {
  const date = new Date(dateString);
  // Define options for day, month (short), and year
  const options: any = { year: 'numeric', month: 'short', day: '2-digit' };
  console.log("********88")
  console.log({ date })
  console.log("********88")
  return new Intl.DateTimeFormat('en-GB', options).format(date);
}

export { formatReadableDate };