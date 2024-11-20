
const formatDate = (dateInfo) => {
    try{
    const now = new Date()
    const dateObj = new Date(dateInfo)
    const hoursSince = now - dateObj
    const hoursDiff = Math.floor(hoursSince / (1000 * 60 * 60));
    const daysDiff = Math.floor(hoursDiff / 24);
    const secondsDiff = Math.floor(hoursSince / 1000);

    const minutesDiff = Math.floor(secondsDiff / 60);



    if (secondsDiff < 60) {
        return `${secondsDiff} seconds ago`;
      } else if (minutesDiff < 60) {
        return `${minutesDiff} minutes ago`;
      } else if (hoursDiff < 24) {
        return `${hoursDiff} hours ago`;
      } else if (daysDiff < 1.1) {
        return `${daysDiff} day(s) ago`;}
    else { const formattedDate = dateObj.toLocaleDateString('en-US', {
        month:'2-digit',
        day: '2-digit',
        year:'numeric'
    })
    return formattedDate}
}
catch(err){
    console.log(err)
}
}

export default formatDate