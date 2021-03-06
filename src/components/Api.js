export class Api {
    constructor(baseURL, token) {
      this._baseURL = baseURL;
      this._token = token;
    }


  _fetchData(url, options) {
    return fetch(this._baseURL + url, options)
      .then(res => {
        if (res.ok) {
          return res.json();
        }

        return Promise.reject(`Ошибка: ${res.status}`);
      })
  }


  getInitialCards() {
    return this._fetchData('/cards', {
      headers: {
        authorization: this._token
      }
    })
  }


  getUserInfo() {
    return this._fetchData('/users/me', {
      headers: {
        authorization: this._token
      }
    })
  }


  setUserInfo(data) {
    return this._fetchData('/users/me', {
      method: 'PATCH',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
  }



  uploadCard(data) {
    return this._fetchData('/cards', {
      method: 'POST',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
  }



  likeCard(id, liked) {
    let method;
    if (liked) {
      method = 'DELETE';
    } else {
      method = 'PUT';
    }
    return this._fetchData('/cards/likes/' + id, {
      method: method,
      headers: {
        authorization: this._token
      }
    })
  }


  deleteCard(id) {
    return this._fetchData('/cards/' + id, {
      method: 'DELETE',
      headers: {
        authorization: this._token
      }
    })
  }


  changeAvatar(link) {
    return this._fetchData('/users/me/avatar', {
      method: 'PATCH',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        avatar: link
      })
    })
  }
}