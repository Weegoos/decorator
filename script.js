class DataBase{
    constructor(data){
        if (DataBase.exists){
            return DataBase.instance
        }

        DataBase.instance = this;
        DataBase.exists = true;
        this.data = data;
    }

    getData(){
        return this.data
    }
}

const data_base = new DataBase('За сколько вы добираетесь в школу?')
console.log(data_base.getData());

const text = new DataBase('Долго ли?')
console.log(text.getData());

