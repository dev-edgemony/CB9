> Questa sezione fa parte del Coding Bootcamp 9 di Edgemony, Learning Week 3. Puoi trovare tutti gli altri contenuti [qui](../lw_03/README.md).

# CB9-LW3 – Il viaggio di una richiesta web

La [breve introduzione al web](./breve-introduzione-al-web.md) considera il sistema _client_/_server_ l'archetipo della comunicazione web.

![](../images/lw_03-the-web-client-server.jpg)

### Una prima differenza: back-end e front-end

Tipicamente, il _client_ che inizia la richiesta è il browser. Nei casi più comuni, la richeista restituisce un documento. Se fate click su <a href="https://edgemony.com/" target="_blank">https://edgemony.com/</a>, una buona approssimazione iniziale del viaggio della richiesta somiglia a qualcosa del genere,

![](../images/lw_03-request-journey-be.jpg)

Da un lato abbiamo il _server_, che si occupa di procurare il documento tramite una serie di operazioni che possono anche variare in base al tipo di risorsa richiesta (ad es., come è stata creata, salvata, ecc.). I dettagli di queste operazioni sono molto interessanti, ma ci porterebero molto lontano, ed esulano dall'ambito del corso. La programmazione di queste operazioni è solitamente responsabilità delle figure conosciute come _Back-end engineers_ (o developers, ecc.).

Dall'altro lato abbiamo il _client_, ovvver il browser, il quale esegue le operazioni (ad es., legge, interpreta, ecc) che permettono a noi di vedere il documento ricevuto come "la homepage di Edgemony". Le operazioni del browser ci interessano più da vicino perché il risultato di queste operazioni dipende in grossa parte dal lavoro svolto da quelle figure conosciute come _Front-end engineers_ (o developers, ecc.).
