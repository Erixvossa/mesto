

export class UserInfo {
    constructor({authorNameElement, authorProfessionElement}) {
        this._name = authorNameElement;
        this._profession = authorProfessionElement;
    }


    getUserInfo() {
        const dataObj = {
            name: this._name.textContent,
            profession: this._profession.textContent
        }
        return dataObj;

    }

    setUserInfo(data) {
        this._name.textContent = data.name;
        this._profession.textContent = data.profession;
    }
}