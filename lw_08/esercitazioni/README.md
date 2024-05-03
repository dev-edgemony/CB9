> Questa sezione fa parte del Coding Bootcamp 9 di Edgemony, Learning Week 8.
> Puoi trovare tutti gli altri contenuti della LW [qui](../README.md).

# CB9-LW8 – Esercitazioni

## 1. Creazione componenti

Sulla base della lezione del 30/04/2024, creare delle funzioni che restituiscono
Elementi HTML (li abbiamo chiamati componenti), con le seguenti caratteristiche:

1. Componente `Container`

   1. Elemento `div`

1. Componente `Titolo`

   1. Elemento `h1`
   1. Testo dinamico

1. Componente `Immagine`

   1. Elemento `img`
   1. `src` dinamico

1. Component `Paragrafo`

   1. Elemento `p`
   1. Testi dinamico

Alcune cose da notare:

1. Per il nome funzione è possibile utilizzare `createX` o `genZ`, come a
   lezione. In alternativa, potete semplicemente chiamare la funzione con il
   nome del component, ad es., `Titolo` (nota la prima lettera maiuscola)
1. Ciascuna funzione non deve generare e restituire più di un elemento
1. Gli elementi possono avere delle classi di stile associati, se conveniente
1. Non è necessario che gli elementi siano aggiunti al DOM (opzionale)

## 2. Fetch: then, e catch

Utilizzando l'API `https://fakestoreapi.com/products/1`, mostrare sullo schermo
un messaggio nel caso che la chiamata abbia successo e nel caso in cui invece
fallisca.

## 3. Avanzato – Creazione Prodotto

**Extra: per chi avesse del tempo libero in più**

Utilizzando la API precedente (2) e i componenti creati con (1), creare un
componente `Prodotto` contenente un titolo, immagine, e paragrafo, e
visualizzarlo a schermo (lo stile non è importante).

Nota che tutti gli elementi del `Prodotto` deve essere dentro un componente
`Container`. Puoi utilizzare tanti `Container` quanti necessari all'interno del
prodotto.
