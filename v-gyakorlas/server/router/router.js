const routerUrl = (url)=>{
    let html = '/'
    switch (url) {
        case '/':
           html = 'index.html'
            break;
        case '/about':
           html = 'about.html'
            break;
        case '/contact':
           html = 'contact.html'
            break;
        default:
           html = 'index.html'
            break;
    }
    return html
}

module.exports =  routerUrl 