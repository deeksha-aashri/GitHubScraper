const request=require("request");
const cheerio=require("cheerio");
const fs=require("fs");
const path=require("path");
 let {getTheListFn}=require('./listOfIssues')

 function getrepo(url){
    oldUrl =url
  request(url,cb);
}
function cb(err,res,body) {
    if (err) {
        console.log(err);
    }
    else {
        issuelink(body);
    }
}
function issuelink(html){
    let selecTool=cheerio.load(html);
    let issueElem=selecTool('.tabnav-tabs [data-ga-click="Explore, go to repository issues, location:explore feed"]');
    // (issueElem[0].attr("href"

   for(let i=0;i<issueElem.length;i++){
       console.log('https://github.com/'+issueElem[i].attribs.href)
   }
   console.log("-----------------------------------------------------------------------");
}




module.exports = {

    getrepoFn:getrepo
}
