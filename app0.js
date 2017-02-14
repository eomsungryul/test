// var express = require('express');
// var path = require('path');
// var app = express();
// var mongoose = require('mongoose');
//
// mongoose.connect("mongodb://eom88:eom88@ds145299.mlab.com:45299/eom88");
// var db = mongoose.connection;
// db.once("open",function(){
//   console.log("DB CONNECTED!");
// });
// db.on("error",function(err){
//   console.log("DB ERROR :",err);
// });
//
// var dataSchema = mongoose.Schema({
//   name:String,
//   count : Number
// });
//
// var Data = mongoose.model('data',dataSchema);
// //Data.findOne({name :"myData"},function(err,data){
// //  if(err) return console.log("Data Error",err);
// //  if(!data){
// //    Data.create({name: "myData",count:0},function(err,data){
// //      if(err) return console.log("Data Error",err);
// //      console.log("Counter initialized",data);
// //    });
// //  }
// //});
//
//
// app.set("view engine",'ejs');
// app.use(express.static(path.join(__dirname+'public')));
//
// //var data = {count:0};
//
// app.get('/',function(req,res){
//   Data.findOne({name :"myData"},function(err,data){
//     if(err) return console.log("Data Error",err);
//     data.count++;
//     data.save(function(err){
//         if(err) return console.log("Data Error",err);
//         res.render('test',data);
//     });
//   });
// });
//
// app.get('/reset',function(req,res){
//   data.count=0;
//   res.render('test',data);
// });
// app.get('/set/count',function(req,res){
//   if(req.query.count)data.count=req.query.count;
//   res.render('test',data);
// });
// app.get('/set/:num',function(req,res){
//   data.count=req.params.num;
//   res.render('test',data);
// });
//
// app.listen(3000,function(){
//   console.log('on');
// });
