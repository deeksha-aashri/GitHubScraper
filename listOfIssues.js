const jsPDF  = require("jspdf");
const request=require("request");
const cheerio=require("cheerio");
const fs=require("fs");
const path=require("path");


 
function getTheList(url){
    request(url,cb);
}

 function cb(err,res,body){
     if(err){
         console.log(err);
     }
     else{
         issueList(body);
     }
 }
 function issueList(html){
     let selecTool=cheerio.load(html);
     let heading=selecTool(".d-block.d-md-none.position-absolute.top-0.bottom-0.left-0.right-0");
     console.log(heading.text());

 }
 module.exports={
     getTheListFn:getTheList
 }