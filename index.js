const fullUrl = document.getElementById('full-url');
const shortUrl = document.getElementById('short-url');
const shortenBtn = document.getElementById('shorten-btn');
const copyBtn = document.getElementById('copy-btn');



copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(`${shortUrl.value}`);
    // shortUrl.select()
    // // document.execCommand('copy')
    // navigator.clipboard.writeText = shortUrl.value
    alert('copied')
    fullUrl.value = ""

})

shortenBtn.addEventListener('click', async () => {
    try {


        const text = fullUrl.value
        const data = await fetch(`https://api.shrtco.de/v2/shorten?url=${text}`);
        const finalData = await data.json();
        const finalLink = finalData.result.short_link2
        shortUrl.value = finalLink

        // console.log(finalLink)
    } catch (err) {
        fullUrl.value = ""
        alert('wrong url')
    }
})























