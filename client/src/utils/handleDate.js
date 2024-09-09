export const getDate = (dateString) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = ("0" + (date.getMonth() + 1)).slice(-2); // Add leading zero if needed
  const day = ("0" + date.getDate()).slice(-2); // Add leading zero if needed

  const formattedDate = `${day}/${month}/${year}`;
  return formattedDate;
};

export const getTime = (dateString) => {
  const date = new Date(dateString);

  // Extracting hours, minutes, and seconds
  const hours24 = date.getHours();
  const minutes = ("0" + date.getMinutes()).slice(-2); // Add leading zero if needed

  // Converting to 12-hour format
  const ampm = hours24 >= 12 ? "PM" : "AM";
  const hours12 = ("0" + (hours24 % 12) || 12).slice(-2);

  // Formatting time in 12-hour clock format
  const time = `${hours12}:${minutes} ${ampm}`;

  return time;
};
