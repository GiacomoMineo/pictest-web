class PictureActions {
	static async list(contestId, cursor) {
		var response = await fetch(
			'http://localhost:58292/api/picture?contest=' + contestId
		)
		var json = await response.json()
		return json
	}

	static async vote(pictureId, token) {
		var response = await fetch(
			'http://localhost:58292/api/picture/' + pictureId,
			{
				method: 'PUT',
				body: JSON.stringify({ vote: true }),
				headers: new Headers({
          'Content-Type': 'application/json',
          authorization: 'Bearer ' + token
				})
			}
    )
		return response.ok
	}
}

export default PictureActions
