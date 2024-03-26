> Questa sezione fa parte del Coding Bootcamp 9 di Edgemony, Learning Week 3.
> Puoi trovare tutti gli altri contenuti della LW [qui](../lw_03/README.md).

# CB9-LW3 – Usare Git

### Cosa è Git?

I concetti necessari inizialmente per poter lavorare con Git sono:
`Linea termporale` e `Istantanea`. Una prima approsimazione di cosa è Git: Una
sequenza di istantanee disposte lungo una linea temporale. Ovvero, qualcosa del
genere,

![](../images/lw_03-git-timeline-books.jpg)

Nel gergo di Git, la linea temporale è detta `branch`, mentre l'instantane è
chiamata `commit`. L'immagine sopra diventa qualcosa del genere,

![](../images/lw_03-git-timeline.jpg)

### Repository

Git lavora su collezioni di file e cartelle che chiamiamo `repository`. In
italiano, dovremmo dire `magazzino` o `deposito`, ma ha poco senso. Terremo
quindi la versione in inglese _repository_.

> **Fun fact**: parlare di _repository_ in italiano è come parlare di arancin\*
> in siciliano. La questione del femminile o maschile è ancora in fase di
> risoluzione. Tuttavia, ci sono buone ragioni per pensare che sia maschile.

La _repository_ è quindi il luogo dove avvengono tutte le operazioni che noi
compiamo su file e cartelle tramite Git. Un esempio di _repository_ è quella che
stai navigando adesso.

### Remota e locale

Ogni _repository_ può essere clonata. Possiamo pensare al clone di una
_repository_ come **la stessa repository** ma in locale (ossia, sul nostro PC
invece che su un server). Quindi, la _repository_ principale sarà quella remota,
e sarà unica. Tutte le altre copie, saranno quelle locali. Qualcosa di simile
all'immagine seguente,

![](../images/lw_03-git-remote-local.jpg)

> **Nota bene**: clonare una _repository_ non è la stessa cosa di creare un
> fork. Nel primo caso, infatti, il link tra la _repository_ remota e quella
> locale è pressoché indissolubile. In altre parole, una _repository_ locale
> trae la sua identità dal link con quella remota.

È possibile ottenere una copia locale della _repository_ tramite il comando
`git clone`.
[Qui](https://github.com/dev-edgemony/CB9/blob/main/lw_03/esercitazioni/README.md#1-clona-la-repository-cb9)
trovi una esercitazione utile.

Una delle funzioni delle _repository_ locali è quella di permettere ai singoli
individui di apportare modifiche senza che queste abbiano effetto sulla remota.
In altre parole, possiamo

### Tre stati, più uno

## Link per approfondire

> **FOMO warning!** La curiosità è una cosa bella, ma non perdi nulla di
> essenziale se non visiti le pagine seguenti. <br /> **Rabbit Hole warning!**
> Uno degli errori più fatali è quello di cominciare a leggere senza mai
> fermarsi. <br /> Prova a seguire questa linea guida: leggi **solo se hai una
> domanda** per la quale cerchi una risposta. Una volta trovata, **fermati**.
> Troverai sempre qui questi link, così da visitarli al momento guisto.

1.[Cos'è Git?](https://git-scm.com/book/it/v2/Per-Iniziare-Cos%E2%80%99%C3%A9-Git%3F)
sul sito ufficiale

1. [Anatomia dell'arancin\*](https://www.instagram.com/p/CILMYH3hGjq/?img_index=1)
   su Instagram
