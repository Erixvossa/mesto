import { authorNameInput, authorProfessionInput } from '../utils/constants';

export class UserInfo {
    constructor({authorNameSelector, authorJobSelector}) {
        this._name = authorNameSelector;
        this._profession = authorJobSelector;
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