let bookmarkletTitle = document.getElementsByTagName('input')[0]
let textarea = document.getElementsByTagName('textarea')[0]
let bookmarklet = document.getElementsByTagName('a')[0]

bookmarkletTitle.addEventListener('input', e => {
    bookmarklet.innerHTML = bookmarkletTitle.value
})

textarea.addEventListener('input', e => {
    let js = textarea.value
    js = js.replace(/(\r\n|\n|\r)/gm, ',') // replace newlines with commas
    js = js.replace(/{,/g, '{') // replace {, with {
    js = js.replace(/,}/g, '}') // replace ,} with {
    bookmarklet.href = `javascript:${js}`
})