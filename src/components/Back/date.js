// подлючаем mysql 
const mysql=require('mysql')
// В переменную присваиваем host
const conn=mysql.createConnection({
    host:"127.0.0.1",
    user:"localhost",
    database:"feliz_data",
    password:''

});

conn.connect(err=>{
    if(err){
        console.log(err)
        return err;
    }else{
        console.log('Database----ok')
    }
})