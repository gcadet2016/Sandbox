function test(x)
{
    console.log(x);
}
function loadSource(url) {
    const headers = new Headers();
    headers.append('Content-Type', 'text/html');
    headers.append('origin','http://localhost');
    fetch(url, {
        method: "GET",
        mode:"cors",
        headers: headers
    })
        .then(response => response.text())
        .then(data => {
            const iframe = document.getElementById('sourceFrame');
            iframe.srcdoc = `<pre>${escapeHtml(data)}</pre>`;
        })
        .catch(error => console.error('Erreur:', error));
}

function escapeHtml(unsafe) {
    return unsafe
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}