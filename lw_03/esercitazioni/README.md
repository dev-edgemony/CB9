> Questa sezione fa parte del Coding Bootcamp 9 di Edgemony, Learning Week 3.
> Puoi trovare tutti gli altri contenuti della LW [qui](../lw_03/README.md).

# CB9-LW3 – Esercitazioni

## 1. Clona la repository CB9

Per eseguire un clone di questa repository:

1. Individua una cartella utile sul tuo PC/Mac
1. Naviga verso la directory principale (ad es., nel mio caso
   `https://github.com/angelogulina/CB9`)
1. Invividua il tasto verde `Code`, e fai click
1. Copia l'URL sotto la bat `HTTPS` (ad es., nel mio caso
   `https://github.com/angelogulina/CB9.git`)
1. Sul tuo terminale, esegui il comando:

```bash
git clone <link-alla-tua-repo>
```

## 2. Il mio primo commit

All'interno della tua fork di `CB9,

1. Vai alla cartella `lw_03/esercitazioni`
1. Crea un nuovo file, denominato `il-mio-primo-commit.md`
1. All'interno del file, inserisci questo test

```md
# CB9-LW3 – Esercitazioni: il mio primo commit
```

Adesso, esegui questi comandi dal terminale:

```bash
git status
```

Se è tutto corretto, il terminale dovrebbe mostrari
il file modificato.

```bash
git add lw_03/esercitazioni/il-mio-primo-commit.md
```

**Nota**: per aggiungere il file correttamente, è necessario che
il percorso sia corretto (ad es., `lw_03/esercitazioni/il-mio-primo-commit.md`)
e che l'estensione sia presente.

```bash
git commit -m "Aggiungi un file"
```

## 3. Modificare un file esistente

All'interno della tua fork di `CB9`,

1. Vai alla cartella `lw_03/esercitazioni`
1. Apri il file `lw_03/esercitazioni/zombie-filosofici.md`
1. Trova gli errori all'interno del file (ad, es., refusi)
1. Per ogni correzione, esegui il
   [flusso di lavoro in 3 step](https://github.com/dev-edgemony/CB9/blob/main/lw_03/usare-git.md#il-flusso-di-lavoro-git-in-tre-step)
