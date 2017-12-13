import Util from '../utils/Util'

export default class PictureActions {
  static async list(contestId, cursor) {
    var response = await fetch(
      'http://localhost:58292/api/picture?contest=' + contestId
    )
    var json = await response.json()
    return json
  }

  static async vote(pictureId) {
    var token = Util.getJwt()

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

  static async upload(pictureItem, contestId) {
    var token = Util.getJwt()

    var formData = new FormData()

    formData.append('picture', pictureItem)
    formData.append('contestId', contestId)

    var response = await fetch('http://localhost:58292/api/picture', {
      method: 'POST',
      body: formData,
      headers: new Headers({
        authorization: 'Bearer ' + token
      })
    })

    var json = await response.json()
    return json
  }
}
