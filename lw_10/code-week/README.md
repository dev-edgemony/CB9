PROGETTO CODE WEEK - {WhatTheShow}

Progetto: QuickFlix
Descrizione:
Il tuo compito è sviluppare una semplice web app che permetta agli utenti di visualizzare un elenco di serie TV popolari e i loro dettagli base. La web app dovrebbe essere intuitiva, con un design minimale che metta in risalto i contenuti senza fronzoli.
Indirizzo API: https://developer.themoviedb.org/reference/intro/getting-started
Target:
Questo progetto è ideale per gli utenti che desiderano una rapida occhiata alle serie TV più popolari, senza la necessità di funzioni complesse o personalizzazioni.
Linee guida tecnologiche:
Per accedere alle informazioni sulle serie TV, utilizzerai le API di MovieDB. Consulta la documentazione su MovieDB Developers per iniziare.
Funzionalità Richieste:
● Visualizzazione Elenco Serie: Mostra un elenco delle serie TV più
popolari al momento. Ogni elemento dell'elenco dovrebbe includere il titolo della serie, una breve descrizione e un'immagine di copertina.
Challenges Aggiuntive:
– Aggiungi una funzionalità di ricerca che permetta agli utenti di trovare serie specifiche utilizzando il titolo come chiave di ricerca.
– Cliccando su una serie, gli utenti dovrebbero essere reindirizzati a una pagina di dettagli che mostra informazioni più approfondite come il cast, la stagione corrente e una sinossi estesa.



UTILITIES
1. documentazione https://developer.themoviedb.org/reference/intro/getting-started
2. chiamata fetch alla repo https://api.themoviedb.org/3/search/tv per cercare una serie per query (elenco: https://developer.themoviedb.org/reference/search-tv)
3. chiamata fetch alla repo https://api.themoviedb.org/3/discover/tv per cercare una serie con filtri (elenco: https://developer.themoviedb.org/reference/discover-tv)
4. chiamata fetch al genere serie tv https://api.themoviedb.org/3/genre/tv/list
5. chiamata fetch al genere serie tv più viste: https://api.themoviedb.org/3/trending/tv/week?api_key=54ba07b69851b27c129da3059e6156a7
6. chiamata fetch al genere serie tv in corso: ... 



ARCHITETTURA E DETTAGLI
Contenuto progetto: 1 pagina con menu, filtri e card + 1 pagina per ogni serie tv
Colori: black (#2B2D42), grey (#8D99AE), white (#EDF2F4) red (#EF233C), dark red (#D90429)
Ispirazione: https://www.justwatch.com/it/serie-tv
Wireframe LR: https://www.figma.com/file/L9qkSkHQ3myLfx5BSMydRD?node-id=0-1&t=7cn2abVCgao8UPWS-0&type=whiteboard
Mockup HR: figma...

Contenuto Home (listing serie tv)
1. Menu: più popolari (default), ultime uscite
2. Filtri: cerca per nome, genere, rating, data (1, ultimo episodio?)
3. Ordinamento (alfabetico, popolarità)?
4. Gallery card serie tv -> immagine, titolo, genere, descrizione (max 2 righe)

Contenuto pagina dettaglio serie tv
1. Copertina
2. Titolo
3. Genere
4. Popolarità
5. Data 1 ep - ultimo episodio
6. N Stagioni - Tot episodi
7. Elenco stagioni ed episodi ?
8. Cast

