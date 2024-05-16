window.onload = async () => {
let res = await fetch("https://ok.surf/api/v1/cors/news-feed");
res = await res.json();
    console.log(res);
    const Business = document.getElementById("Business");
    const link = document.getElementById("link");
    const title = document.getElementById("title");
    res.Business.forEach((info) => {
        Business.src = info.og;
        link.href = info.link;
        title.innerHTML = info.title;
    });
}



