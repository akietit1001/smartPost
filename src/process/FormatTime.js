function FormatTime(time) {
  const d = new Date(time)
  const date = d.getDate()
  const month = d.getMonth()
  const year = d.getFullYear()

  return `${year}年${month}月${date}日`
}

export default FormatTime