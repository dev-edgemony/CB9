> Questa sezione fa parte del Coding Bootcamp 9 di Edgemony, Learning Week 3. Puoi trovare tutti gli altri contenuti [qui](../lw_03/README.md).

# CB9-LW3 – Il viaggio di una richiesta web

La [breve introduzione al web](./breve-introduzione-al-web.md) considera il sistema _client_/_server_ l'archetipo della comunicazione web.

![](../images/lw_03-the-web-client-server.jpg)

### Una prima differenza: back-end e front-end

Tipicamente, il _client_ che inizia la richiesta è il browser. Nei casi più comuni, la richeista restituisce un documento. Se fate click su <a href="https://edgemony.com/" target="_blank">edgemony.com/</a>, una buona approssimazione iniziale del viaggio della richiesta somiglia a qualcosa del genere,

![](../images/lw_03-request-journey-be.jpg)

Da un lato abbiamo il _server_, che si occupa di procurare il documento tramite una serie di operazioni che possono variare in base al tipo di risorsa richiesta (ad es., come è stata creata, salvata, ecc.). I dettagli di queste operazioni sono molto interessanti, ma ci porterebero molto lontano, ed esulano dall'ambito del corso. La programmazione di queste operazioni è solitamente responsabilità delle figure conosciute come _Back-end engineers_ (o developers, ecc.).

Dall'altro lato abbiamo il _client_, ovvero il browser, il quale esegue tutte le operazioni (ad es., legge, interpreta, ecc.) che ci permettono di vedere il documento ricevuto come "la homepage di Edgemony". Le operazioni del browser ci interessano più da vicino. Infatti, il risultato di queste dipende in grossa parte dal lavoro svolto dalle figure conosciute come _Front-end engineers_ (o developers, ecc.).

Così come server e client non lavorano allo stesso modo, back-end e front-end non condividono sempre le stesse competenze e responsabilità. Proviamo a individuarne alcune, prendendo l'esembio emblematico di creare una pagina web.

### Una seconda differenza: pagina statica e pagina dinamica

Quando richiediamo una pagina web, questa può già esistere all'interno del server, tipicamente come pagina HTML (ad es., `index.html`). Il compito del server sarà allora quello di trovarla, e restituirla. In questo caso, la pagina web è statica, e ciò che accade somiglia a qualcosa del genere,

![](../images/lw_03-request-journey-be.jpg)

In un secondo caso, la pagina HTML non esiste sul server. In altre parole, se andassimo a cercare sul server, non troveremmo alcuna `index.html`. Quello che esiste, invece, è un documento che il server usa come base per **creare in maniera dinamica** la pagina richiesta. Nella pratica, ci sono molti modi di realizzare questa cosa. In termini astratti, possiamo immaginare questo documento come contenent del codice scritto in un linguaggio che il server può capire (ad es., _JavaScript_, _PHP_, ecc.). Il codice fornisce le istruzioni che il server seguirà per generare il documento finale da restituire. In questo caso, la pagina web è generata in maniera dinamica. Ciò che accade somiglia a qualcosa del genere,

![](../images/lw_03-request-journey-be-ii.jpg)

Fin qui, abbiamo descritto come il server genera pagine statiche o dinamiche.

### Una terza differenza: generazione lato server e lato client

Da questo momento, faremo riferimento alle operazioni citate in precedenza con: Creare una pagina web. Di certo, le cose sono più complesse di così, ma questo ci aiuta ad afferrare l'essenziale tralasciando i dettagli che, per adesso, non sono utili.

## Link per approfondire

> **FOMO warning!** La curiosità è una cosa bella, ma non perdi nulla di essenziale se non visiti le pagine seguenti. <br /> **Rabbit Hole warning**
> Uno degli errori più fatali è quello di cominciare a leggere senza mai fermarsi. <br /> Prova a seguire questa linea guida:
> leggi **solo se hai una domanda** per la quale cerchi una risposta. Una volta trovata, **fermati**.
> Troverai sempre qui questi link, così da visitarli al momento guisto.

1. [Index](<https://it.wikipedia.org/wiki/Index_(informatica)>) su Wikipedia
1. [Cosa è un browser](https://it.wikipedia.org/wiki/Browser) su Wikipedia
