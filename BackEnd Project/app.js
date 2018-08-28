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
            if(product!=undefined)
            {
                res.json(product)
            }
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
        var u=0
        if(err) throw err; 
        SemuaProd=result
        for(i=0;i<SemuaProd.length;i++)
        {
            if(Name==SemuaProd[i])
            {
                res.end('Sudah Ada Produk Terrsebut');   
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
        var finalprice=jumlah*harga;
        var cek='Select * FROM cart where user_id=?'
        db.query(cek, [user_id], (err, result)=>
        {  
            var u=0
            if(err) throw err;
            for(i=0;i<result.length;i++)
            {
                if(result[i].product_id == productid)
                {
                    var lol='Update cart SET Jumlah=? where id=?'
                    db.query(lol, [result[i].Jumlah+1,result[i].id], (err, result)=>
                    {
                    });
                    u++
                }
            }
            if(u == 0)
            {
                var mysql = 'INSERT INTO cart SET product_id=?,user_id=?,Jumlah=?,harga=?,hargatotal=?';
                db.query(mysql, [productid,user_id,jumlah,harga,finalprice], (err, result)=>
                {  
                    if(err) throw err;  
                    res.end('1')
                });
            }
        });
        var sql='Select stock FROM product where id=?'
        db.query(sql, [productid], (err, result)=>
        {  
            if(err) throw err;  
            var stock=result[0].stock
            var sisa=stock-jumlah
            var lol='Update product SET stock=? where id=?'
            db.query(lol, [sisa,productid], (err, result)=>
            {
                res.end('1')
            });
        });
    }
    else if(Process == 1)
    {
        var user_id=req.body.userid;
        var alamat=req.body.alamat;
        var hp=req.body.Hp;
        var Nama=req.body.Nama;
        var KodePos=req.body.KodePos;
        var Cart=req.body.Cart;
        var CaraBayar=req.body.CaraBayar;
        var carakirim=req.body.CaraKirim
        // var mysql = 'UPDATE cart SET hp_penerima=?,kode_pos=?,nama_penerima=?,alamat=?,process_data=1,Time=CURRENT_TIMESTAMP  where user_id=? AND process_data=0';
        // db.query(mysql, [hp,KodePos,Nama,alamat,user_id], (err, result)=>
        // {  
        //     if(err) throw err;  
        // });
        // res.end('1')
        var finalprice=0;
        for(i=0;i<Cart.length;i++)
        {
            finalprice+=Cart[i].hargatotal
        }
        var DeleteCart='DELETE FROM cart WHERE user_id = ?'
        db.query(DeleteCart, [user_id], (err, result)=>
        {
            if(err) throw err;
        });
        var invoiceid=0
        var InsertInvoice='INSERT INTO invoice SET user_id=?,nama_penerima=?,kode_pos=?,alamat=?,hp_penerima=?,finalprice=?,carakirim=?,carabayar=?,processdata=?'
        db.query(InsertInvoice, [user_id,Nama,KodePos,alamat,hp,finalprice,carakirim,CaraBayar,0], (err, result)=>
        {
            if(err) throw err;
            invoiceid=result.insertId
            for(i=0;i<Cart.length;i++)
            {
                var InvoiceDetail='INSERT INTO invoice_detail SET invoice_id=?,category_name=?,product_name=?,jumlah=?,harga=?,hargatotal=?'
                db.query(InvoiceDetail, [invoiceid,Cart[i].category,Cart[i].product_name,Cart[i].jumlah,Cart[i].harga,Cart[i].hargatotal], (err, result)=>
                {
                    if(err) throw err;
                    console.log('berhasil')
                });
            }
            res.end('1')
        });
    }
    else if(Process == 5)
    {
        var idCart=req.body.idcart;
        var jumlah=req.body.jumlah;
        var harga=req.body.harga;
        var finalprice=jumlah*harga;
        var cek='Select * FROM cart where id=?'
        db.query(cek, [idCart], (err, result)=>
        {
            console.log(jumlah)
            console.log(result[0].Jumlah)
            var productid=result[0].product_id
            if(jumlah>result[0].Jumlah)
            {
                var hasil=jumlah-result[0].Jumlah
                var sql='Select stock FROM product where id=?'
                db.query(sql, [productid], (err, result)=>
                {  
                    if(err) throw err;  
                    var poke=result[0].stock
                    var sisa=poke-hasil
                    if(sisa>=0)
                    {
                        var lol='Update product SET stock=? where id=?'
                        db.query(lol, [sisa,productid], (err, result)=>
                        {
                            var mysql = 'UPDATE cart SET Jumlah=?,hargatotal=? where id=?';
                            db.query(mysql, [jumlah,finalprice,idCart], (err, result)=>
                            {  
                                if(err) throw err;  
                            });
                            res.end('1')
                        });
                    }
                    else
                    {
                        res.end('0')
                    }
                });
            }
            else
            {
                var hasil=result[0].Jumlah-jumlah
                var sql='Select stock FROM product where id=?'
                db.query(sql, [productid], (err, poke)=>
                {  
                    if(err) throw err;  
                    var result=poke[0].stock
                    var sisa=result+hasil
                    var lol='Update product SET stock=? where id=?'
                    db.query(lol, [sisa,productid], (err, result)=>
                    {
                    });
                });
                var mysql = 'UPDATE cart SET Jumlah=?,hargatotal=? where id=?';
                db.query(mysql, [jumlah,finalprice,idCart], (err, result)=>
                {  
                    if(err) throw err;  
                });
                res.end('1')
            }
        });
    }
    else if(Process == 6)
    {
        var id=req.body.id
        var process=req.body.process
        var sql = 'UPDATE invoice SET processdata=?  where id=?';
        db.query(sql,[process,id], (err, result)=>
        {
            if(err){
                throw err;
            } else {
                res.json(result);
            }
        });
    }
})
app.get('/Cart/:Process',function(req,res)
{
    var Process=req.params.Process;
    if(Process == 0)
    {
        var id=req.query.id
        Cart=[]
        var sql = 'SELECT cart.id,product.product_name,product.harga,category.category,cart.jumlah,cart.hargatotal,cart.product_id FROM cart,product,category where user_id = ?AND(cart.product_id=product.id AND product.category_id=category.id)';
        db.query(sql,[id], (err, result)=>
        {
            if(err){
                throw err;
            } 
            else if(result != undefined){
                res.json(result);
            }
        });
    }
    else if(Process == 1)
    {
        var id=req.query.id;
        var Invoice=[];
        var sql = 'SELECT * FROM invoice where user_id=?';
        db.query(sql,[id], (err, result)=>
        {
            if(err){
                throw err;
            } 
            else if(result != undefined){
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
    else if(Process == 6)
    {
        var id=req.query.id;
        var sql = 'SELECT * FROM invoice_detail where invoice_id=?';
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
app.post('/DeleteCart',function(req,res)
{
    var id=req.body.id
    var hasil=req.body.jumlah
    var productid=req.body.product_id
    var DeleteCart='DELETE FROM cart WHERE id = ?'
        db.query(DeleteCart, [id], (err, result)=>
        {
            if(err) throw err;
            var sql='Select stock FROM product where id=?'
            db.query(sql, [productid], (err, poke)=>
            {  
                if(err) throw err;  
                var result=poke[0].stock
                var sisa=result+hasil
                var lol='Update product SET stock=? where id=?'
                db.query(lol, [sisa,productid], (err, result)=>
                {
                });
            });
        });
})
app.post('/DeleteInvoice',function(req,res)
{
    var id=req.body.id
    var DeleteInvoice='DELETE FROM invoice WHERE id = ?'
        db.query(DeleteInvoice, [id], (err, result)=>
        {
            if(err) throw err;
        });
    var DeleteDetail='DELETE FROM invoice_detail WHERE invoice_id = ?'
        db.query(DeleteDetail, [id], (err, result)=>
        {
            if(err) throw err;
        });
})
app.post('/Confirm/:Process',function(req,res)
{
    var Process=req.params.Process;
    var id=req.body.id;
    var mysql='UPDATE invoice SET processdata=?  where id=?'
    db.query(mysql,[Process,id], (err, result)=>
        {
            if(err){
                throw err;
            }
            res.end('1')
        });

});

///////////////////////////////////////////
/////////////Delete Produk Category////////
app.post('/DeleteProduct',function(req,res)
{
    var id=req.body.id
    var DeleteDetail='DELETE FROM cart WHERE product_id = ?'
        db.query(DeleteDetail, [id], (err, result)=>
        {
            if(err) throw err;
        });
        var DeleteInvoice='DELETE FROM product WHERE id = ?'
        db.query(DeleteInvoice, [id], (err, result)=>
        {
            if(err) throw err;
        });
})
app.post('/DeleteAll',function(req,res)
{
    // var id=req.body.id
    // var DeleteDetail='DELETE FROM cart INNER JOIN product ON t2. = t1.id WHERE product_id = ?'
    //     db.query(DeleteDetail, [id], (err, result)=>
    //     {
    //         if(err) throw err;
    //     });
    //     var DeleteInvoice='DELETE FROM product WHERE category_id = ?'
    //     db.query(DeleteInvoice, [id], (err, result)=>
    //     {
    //         if(err) throw err;
    //     });
    for(i=0;i<req.body.IsiProduk.length;i++)
    {
        var id=req.body.IsiProduk[i].id
        var DeleteDetail='DELETE FROM cart WHERE product_id = ?'
        db.query(DeleteDetail, [id], (err, result)=>
        {
            if(err) throw err;
        });
        var DeleteInvoice='DELETE FROM product WHERE id = ?'
        db.query(DeleteInvoice, [id], (err, result)=>
        {
            if(err) throw err;
        });
    }
})
app.post('/DeleteCategory',function(req,res)
{
    var id=req.body.id
    var sql = 'SELECT * FROM product where category_id=?';
    db.query(sql,[id],(err, result)=>
    {
        if(err) throw err; 
        var product=result
        if(product.length == 0)
        {
            var Delete='DELETE FROM category WHERE id = ?'
            db.query(Delete, [id], (err, result)=>
            {
                if(err) throw err;
                res.end('1')
            });
        }
        else
        {
            res.end('0')
        }
    });
})
//////////////////////////////////////////
app.listen(port, () => {
    console.log('Server berjalan di port '+port+' ....')
});