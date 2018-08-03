const express = require('express');
const bodyParser = require('body-parser');
const database = require('mysql');
const upload = require('express-fileupload');
var koneksi = require('cors');
var app = express();
var uniqid = require('uniqid');
const crypto=require('crypto')
const secret='abcdefg'


const db = database.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'project_user_e-c_game',
    port: '3306'
});
db.connect();


var port = 3001;

app.use('/images', express.static('images'))
app.use(koneksi());
app.use(upload());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.post('/LoginAdmin',function(req,res)
{
    var user=[];
    var Email=req.body.Email;
    var passwordbelomdiencrpt=req.body.password;
    const passwordsetelahdiencrpt=crypto.createHmac('sha256',secret)
    .update(passwordbelomdiencrpt)
    .digest('hex');
    // var sql='INSERT INTO master_user SET E_mail=?,password=?';
    // db.query(sql,[Email,passwordsetelahdiencrpt],(err,result)=>
    // {
    //     res.end('1')
    // })
    var sql = 'SELECT * FROM master_user';
    db.query(sql, (err, result)=>
    {
        if(err) throw err; 
        user=result
    for(i=0;i<user.length;i++)
    {
        if(Email==user[i].E_mail && passwordsetelahdiencrpt==user[i].password)
        {
            res.end('1');
        }
    };
    res.end('z');
    });
})
////////////Produk//////////////
app.get('/Produk/:id',function(req,res)
{
    var product=[];
    var id=req.params.id;
    
    var sql = 'SELECT * FROM product where id=?';
    db.query(sql,[id],(err, result)=>
    {
        if(err) throw err; 
        product=result
        res.json(product)
    });
    
})
app.get('/IsiProduk/:id',function(req,res)
{
    var product=[];
    var Categoryid=req.params.id;
    if(Categoryid == 0)
    {
        var sql = 'SELECT product.id,product.stock,product.image,product.product_name,product.harga,product.category_id,category.category FROM product,category where product.category_id=category.id ';
        db.query(sql,(err, result)=>
        {
            if(err) throw err; 
            product=result
            res.json(product)
        });
    }
    else
    {
        var sql = 'SELECT product.id,product.stock,product.image,product.product_name,product.harga,product.category_id,category.category FROM product,category where product.category_id=? AND product.category_id=category.id';
        db.query(sql,[Categoryid],(err, result)=>
        {
            if(err) throw err; 
            product=result
            res.json(product)
        });
    }
})
//////////////////////////////////
///////////IsiCategory////////////
app.get('/IsiCategory',function(req,res)
{
    var Category=[];
    var sql = 'SELECT * FROM category';
    db.query(sql, (err, result)=>
    {
        if(err) throw err; 
        Category=result
        res.json(Category)
    });
})

app.get('/EditCategory/:id',function(req,res)
{
    var id=req.params.id;
    var panggilData = 'SELECT * FROM  category where id = ?';
    db.query(panggilData,[id], (Err, hasilQuery) => {
        if(Err){
            throw Err;
        } else {
            res.json(hasilQuery);
        }
    });
})
/////////////////////////////////////////////



/////////////Edit&addCategory////////////////
app.post('/EditCategory',function(req,res)
{
    var Category=req.body.Category;
    var id=req.body.id;
    var desc1=req.body.desc1;
    var desc2=req.body.desc2;
    var u=0;
    if((Category=='' || desc1=='') || desc2=='')
    {
        res.end('0');
    }
    else
    {
        var panggilData = 'UPDATE category SET category=? ,description1=? ,description2=? where id = ?';
        db.query(panggilData,[Category,desc1,desc2,id], (Err, hasilQuery) => {
            if(Err){
                throw Err;
            } else {
                res.send('1');
            }
        });
    }
})

app.post('/InsertCategory',function(req,res)
{
    var Category=req.body.Category;
    var desc1=req.body.desc1;
    var desc2=req.body.desc2;
    var u=0;

    var SemuaCategory=[];


    var sql = 'SELECT * FROM category';
    db.query(sql, (err, result)=>
    {
        if(err) throw err; 
        SemuaCategory=result
        for(i=0;i<SemuaCategory.length;i++)
        {
            if(Category==SemuaCategory[i].category)
            {
                res.end('0');   
                u++;
            }
        };
        if(u==0)
        {
            var sql = 'INSERT INTO category SET category=?,description1=?,description2=?';
            db.query(sql, [Category,desc1,desc2], (err, result)=>
            {  
                if(err) throw err;  
            });
            res.end('1')
        }
    });
})
//////////////////////////////////////////////


/////////////////Add&Edit Produk//////////////
app.post('/AddProduk', (req, res) => 
{
    var Name=req.body.Name; var Price=req.body.Price;
    var MinOs=req.body.MinOs; var MaxOs=req.body.MaxOs;
    var MinGraphics=req.body.MinGraphics; var MaxGraphics=req.body.MaxGraphics;
    var MinMemory=req.body.MinMemory; var MaxMemory=req.body.MaxMemory;
    var MinStorage=req.body.MinStorage; var MaxStorage=req.body.MaxStorage;
    var MinProcessor=req.body.MinProcessor; var MaxProcessor=req.body.MaxProcessor;
    var Categoryid=req.body.idCategory;
    var uniq=uniqid();
    var SemuaProd=[];
    if(req.files){
        
        var file = req.files.file;
        file.mv(__dirname +'/images/' +uniq+ '.' + req.files.file.mimetype.split('/')[1], function(err) {
            if (err){
                console.log(err);
                res.send('Upload failed');
            }
          });
    }
    var sql = 'SELECT product_name FROM product';
    db.query(sql, (err, result)=>
    {
        if(err) throw err; 
        SemuaProd=result
        for(i=0;i<SemuaProd.length;i++)
        {
            if(Name==SemuaProd[i])
            {
                res.end('Sudah Ada Category Terrsebut');   
                u++;
            }
        };
        if(u==0)
        {
            var queryInsert = 'INSERT INTO product SET product_name=?, harga=?, image=?, min_os=?, min_processor=?, min_memory=?, min_graphic=?, min_storage=?, max_os=?, max_processor=?, max_memory=?, max_graphic=?, max_storage=?, category_id=?';
            db.query(queryInsert,[Name,Price,uniq,MinOs,MinProcessor,MinMemory,MinGraphics,MinStorage,MaxOs,MaxProcessor,MaxMemory,MaxGraphics,MaxStorage,Categoryid],(err, result) => {
                if(err){
                    throw err;
                } else {
                    res.send('1');
                }
            });
        }
    });

});
app.post('/UpdateProduk', (req, res) => 
{
    var Name=req.body.Name; var Price=req.body.Price;
    var MinOs=req.body.MinOs; var MaxOs=req.body.MaxOs;
    var MinGraphics=req.body.MinGraphics; var MaxGraphics=req.body.MaxGraphics;
    var MinMemory=req.body.MinMemory; var MaxMemory=req.body.MaxMemory;
    var MinStorage=req.body.MinStorage; var MaxStorage=req.body.MaxStorage;
    var MinProcessor=req.body.MinProcessor; var MaxProcessor=req.body.MaxProcessor;
    var Categoryid=req.body.idCategory; var id=req.body.id;
    var image=req.body.image; var Stock=req.body.Stock;
    var SemuaProd=[];
    if(req.files){
        var uniq=uniqid();
        var fs = require('fs');
        var filePath = __dirname +'/images/'+image+'.'+req.files.file.mimetype.split('/')[1]; 
        fs.unlinkSync(filePath);
        var file = req.files.file;
        file.mv(__dirname +'/images/' +uniq+ '.' + req.files.file.mimetype.split('/')[1], function(err) {
            if (err){
                console.log(err);
                res.send('Upload failed');
            }
          });
        var image=uniq
    }
    
    var queryInsert = 'UPDATE product SET product_name=?,stock=?, harga=?, image=?, min_os=?, min_processor=?, min_memory=?, min_graphic=?, min_storage=?, max_os=?, max_processor=?, max_memory=?, max_graphic=?, max_storage=?, category_id=? where id=?';
    db.query(queryInsert,[Name,Stock,Price,image,MinOs,MinProcessor,MinMemory,MinGraphics,MinStorage,MaxOs,MaxProcessor,MaxMemory,MaxGraphics,MaxStorage,Categoryid,id],(err, result) => {
        if(err){
            throw err;
        } else {
            res.send('1');
        }
    });
});

/////////////////////////////////////////////////////Untuk User////////////////////////////////////////////////////////////////////////////



//////////////Login,Register///////////
app.post('/login',function(req,res)
{
    var user=[];
    var Username=req.body.Username;
    var passwordbelomdiencrpt=req.body.password;
    const passwordsetelahdiencrpt=crypto.createHmac('sha256',secret)
    .update(passwordbelomdiencrpt)
    .digest('hex');
    var sql = 'SELECT * FROM user';
    db.query(sql, (err, result)=>
    {
        if(err) throw err; 
        user=result
    for(i=0;i<user.length;i++)
    {
        if(Username==user[i].user_name && passwordsetelahdiencrpt==user[i].password)
        {
            var userid=user[i].id;
            var b='5';
            res.send({userid,b});
        }
    };
    res.end('z');
    });
})

app.post('/Register',function(req,res)
{
    var username=req.body.Username;
    var passwordbelomdiencrpt=req.body.password;
    const passwordsetelahdiencrpt=crypto.createHmac('sha256',secret)
    .update(passwordbelomdiencrpt)
    .digest('hex');
    var u=0;

    var user=[];


    var sql = 'SELECT * FROM user';
    db.query(sql, (err, result)=>
    {
        if(err) throw err; 
        user=result
        for(i=0;i<user.length;i++)
        {
            if(username==user[i].user_name)
            {
                res.end('0');   
                u++;
            }
        };
        if(u==0)
        {
            var mysql = 'INSERT INTO user SET user_name=?,password=?';
            db.query(mysql, [username,passwordsetelahdiencrpt], (err, result)=>
            {  
                if(err) throw err;  
            });
            res.end('1')
        }
    });
})
///////////////////////////////////////////

//////////////Ngambil data dari user///////////
app.get('/Dataid/:id',function(req,res)
{
    var id=req.params.id;
    var sql = 'SELECT * FROM user where id = ?';
    db.query(sql,[id], (err, result)=>
    {
        if(err){
            throw err;
        } else {
            res.json(result);
        }
    });
})
/////////////////////////////////////////////

///////////////Cart////////////////////////
app.post('/Cart/:Process',function(req,res)
{
    var Process=req.params.Process;
    if(Process == 0)
    {
        var user_id=req.body.userid;
        var productid=req.body.productid;
        var harga=req.body.harga;
        var jumlah=req.body.jumlah;
        var finalprice=jumlah*harga
        var mysql = 'INSERT INTO cart SET product_id=?,user_id=?,process_data=?,Jumlah=?,finalprice=?';
        db.query(mysql, [productid,user_id,Process,jumlah,finalprice], (err, result)=>
        {  
            if(err) throw err;  
        });
        res.end('1')
    }
    else if(Process == 1)
    {
        var user_id=req.body.userid;
        var alamat=req.body.alamat;
        var hp=req.body.Hp;
        var Nama=req.body.Nama;
        var KodePos=req.body.KodePos;
        var mysql = 'UPDATE cart SET hp_penerima=?,kode_pos=?,nama_penerima=?,alamat=?,process_data=1,Time=CURRENT_TIMESTAMP  where user_id=? AND process_data=0';
        db.query(mysql, [hp,KodePos,Nama,alamat,user_id], (err, result)=>
        {  
            if(err) throw err;  
        });
        res.end('1')
    }
    else if(Process == 5)
    {
        var idCart=req.body.idcart;
        var jumlah=req.body.jumlah;
        var harga=req.body.harga;
        var finalprice=jumlah*harga;
        var mysql = 'UPDATE cart SET Jumlah=?,finalprice=? where id=?';
        db.query(mysql, [jumlah,finalprice,idCart], (err, result)=>
        {  
            if(err) throw err;  
        });
        res.end('1')
    }
})
app.get('/Cart/:Process',function(req,res)
{
    var Process=req.params.Process;
    if(Process == 0)
    {
        var id=req.query.id
        Cart=[]
        var sql = 'SELECT cart.id,product.product_name,product.harga,category.category,cart.jumlah,cart.finalprice FROM cart,product,category where (user_id = ? AND process_data = ?)AND(cart.product_id=product.id AND product.category_id=category.id)';
        db.query(sql,[id,Process], (err, result)=>
        {
            if(err){
                throw err;
            } else {
                res.json(result);
            }
        });
    }
    else if(Process == 5)
    {
        var sql = 'SELECT * FROM invoice';
        db.query(sql,[id,Process], (err, result)=>
        {
            if(err){
                throw err;
            } else {
                res.json(result);
            }
        });
    }
})
///////////////////////////////////////////
app.listen(port, () => {
    console.log('Server berjalan di port '+port+' ....')
});