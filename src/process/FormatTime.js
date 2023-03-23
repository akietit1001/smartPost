function FormatTime(time) {
  const d = new Date(time)
  const date = d.getDate()
  const month = d.getMonth()
  const year = d.getFullYear()

  return `${year}年${month}月${date}日`
}

console.log(FormatTime('2023-03-17T16:35:22.111881+07:00'))

export default FormatTime