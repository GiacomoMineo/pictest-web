class ContestActions {
  static async list (cursor) {
    var response = await fetch('http://localhost:58292/api/contest')
    var json = await response.json()
    return json
  }
}

export default ContestActions