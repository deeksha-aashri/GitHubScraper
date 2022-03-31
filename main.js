let url="https://github.com/topics";
const request=require("request");
const cheerio=require("cheerio");
const fs=require("fs");
const path=require("path");


let {getrepoFn} = require('./topics')

request(url,cb);

function cb(err,res,body){
    if(err){
        console.log(error,"err");
    }
    else{
        handleHtml(body);
        
    }
}

function handleHtml(html){
    let selecTool=cheerio.load(html);
    let anchorElem=selecTool('a[class="no-underline flex-1 d-flex flex-column"]');
   // console.log(anchorElem);
   
   for(let i=0;i<3;i++){
      // console.log(anchorElem[i]);
       let relativeLink=selecTool(anchorElem[i]).attr("href");
       //console.log(relativeLink);
       let fullLink="https://github.com"+relativeLink;


    console.log(fullLink);
    getrepoFn(fullLink)
   }
   
}
