import { authorNameInput, authorProfessionInput } from '../utils/constants';

export class UserInfo {
    constructor(data) {
        this._name = data.name;
        this._job = data.job;
    }


    getUserInfo() {
        const dataObj = {
            name: this._name.textContent,
            job: this._job.textContent
        }
        return dataObj;

    }

    setUserInfo() {
        this._name.textContent = authorNameInput.value;
        this._job.textContent = authorProfessionInput.value;
    }
}