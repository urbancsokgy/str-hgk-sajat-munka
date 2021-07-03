

const dispDate = ()=>{
    const dispDate = new Intl.DateTimeFormat('hu-HU', {
    timeZoneName: 'long',
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour:  '2-digit',
    minute: '2-digit',
    second: '2-digit'
}).format(new Date())
return dispDate.toString('utf8')
}
const logger =(req,res) => {
  
    console.log(
    `Date: ${dispDate()}`,
    'URL: ',req.url, '\n',
    'Host: ',req.headers.host, '\n',
    'Method: ',req.method, '\n',
    'Status Code: ',res.statusCode, '\n',  
    'Remote Address: ',req.connection.remoteAddress)
     //'Headers: ',console.log('Headers: ' + JSON.stringify(req.headers));
    'IP: ',console.log('IP: ' + JSON.stringify(req.ip))
    }
module.exports ={
    dispDate,logger
}

   