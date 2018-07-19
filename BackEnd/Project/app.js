var express = require('express');
var bodyParser = require('body-parser')
var app = express();
var url = bodyParser.urlencoded({ extended: false })
var session=require('express-session');
app.use(session({secret:'ssshhhhh'}));
var sess;

var cors=require('cors');
app.use(cors())
app.use(bodyParser.json());
app.set('view engine' , 'ejs');


const crypto=require('crypto')
const secret='abcdefg'


const mysql = require('mysql');


const db = mysql.createConnection(
    {
        host	: 'localhost',
        port:3306,  
        user : 'root',  
        database : 'project_user_e-c_game'
    });
/////////////////////////////////////////////////////Untuk Admin////////////////////////////////////////////////////////////////////////////

app.post('/LoginAdmin',url,function(req,res)
{
    var user=[];
    var Email=req.body.Email;
    var passwordbelomdiencrpt=req.body.password;
    const passwordsetelahdiencrpt=crypto.createHmac('sha256',secret)
    .update(passwordbelomdiencrpt)
    .digest('hex');
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


app.get('/IsiCategory',url,function(req,res)
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

app.get('/EditCategory/:id',url,function(req,res)
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

app.post('/EditCategory',url,function(req,res)
{
    var Category=req.body.Category;
    var id=req.body.id;
    var desc1=req.body.desc1;
    var desc2=req.body.desc2;
    var u=0;
    console.log(Category)
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

app.post('/InsertCategory',url,function(req,res)
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
/////////////////////////////////////////////////////Untuk User////////////////////////////////////////////////////////////////////////////

app.post('/login',url,function(req,res)
{
    var user=[];
    var Username=req.body.Username;
    var passwordbelomdiencrpt=req.body.password;
    const passwordsetelahdiencrpt=crypto.createHmac('sha256',secret)
    .update(passwordbelomdiencrpt)
    .digest('hex');
    console.log(passwordsetelahdiencrpt);
    var sql = 'SELECT * FROM user';
    db.query(sql, (err, result)=>
    {
        if(err) throw err; 
        user=result
    for(i=0;i<user.length;i++)
    {
        console.log(i)
        if(Username==user[i].user_name && passwordsetelahdiencrpt==user[i].password)
        {
            var userid=user[i].id;
            var b='5';
            console.log(userid);
            res.send({userid,b});
        }
    };
    res.end('z');
    });
})

app.get('/Dataid/:id',url,function(req,res)
{
    var id=req.params.id;
    var sql = 'SELECT * FROM user where id = ?';
    db.query(sql,[id], (err, result)=>
    {
        if(err){
            throw err;
        } else {
            res.json(result);
            console.log(result)
        }
    });
})
app.post('/Register',url,function(req,res)
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
        console.log(user);
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



app.listen(3001);
