class PictureActions {
	static async list(contestId, cursor) {
		var response = await fetch('http://localhost:58292/api/picture?contest=' + contestId)
		var json = await response.json()
		return json
	}
}

export default PictureActions
