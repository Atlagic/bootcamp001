class Thing{
    constructor(name, avatarUrl, kind){
        this._name = name;
        this._avatarUrl = avatarUrl;
        this._kind = kind;
    }

    get name(){
        return this._name;
    }

    get avatarUrl(){
        return this._avatarUrl;
    }

    get kind(){
        return this._kind;
    }

    getData() {
        return `${this._kind} name: ${this._name}\navatar: ${this._avatarUrl}\n`;
    }
}

export default Thing;
