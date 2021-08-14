function formatDate(timestamp) {
  const now = new Date()
  const date = new Date(timestamp)
  const betweenTime = Math.floor((now.getTime() - date.getTime()) / 1000 / 60)
  if (betweenTime < 1) return '방금전'
  if (betweenTime < 60) {
    return `${betweenTime}분전`
  }
  const betweenTimeHour = Math.floor(betweenTime / 60)
  if (betweenTimeHour < 24) {
    return `${betweenTimeHour}시간전`
  }
  const betweenTimeDay = Math.floor(betweenTime / 60 / 24)
  if (betweenTimeDay < 2) {
    return `${betweenTimeDay}일전`
  }
  let month = '' + (date.getMonth() + 1)
  let day = '' + date.getDate()
  const year = date.getFullYear()

  if (month.length < 2) 
    month = '0' + month
  if (day.length < 2) 
    day = '0' + day

  return [year, month, day].join('.')
}

export { formatDate }