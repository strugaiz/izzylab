fetch("data/articoli.json")
    .then(response => response.json())
    .then(articoli => {
        const container = document.getElementById("articoli-lista");
        articoli.forEach(articolo => {
            const el = document.createElement("article");
            el.innerHTML = `
                <h3><a href="\${articolo.url}">\${articolo.titolo}</a></h3>
                <p><em>\${articolo.data}</em> – \${articolo.categoria}</p>
                <p>\${articolo.descrizione}</p>
            `;
            container.appendChild(el);
        });
    });