const fsp = require('fs').promises;
const path = require('path')

const getHtmlContent= async (dirname, url)=>{
    if(url=='/')url='index'
    if(url=='/favicon.ico')return
    const filePath =  path.join(
        dirname,
        'views',
        `${url.replace(/\//g,'')}.html`
        )
        console.log('Path: ', filePath)
        const content = await fsp.readFile(filePath,'utf-8')
            .catch((err)=>{console.log(err)})
        //console.log(content);
        return content
}

module.exports = getHtmlContent