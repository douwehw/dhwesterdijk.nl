# MODULE 04 - Forum 1.0  
  
## Inleiding

In een voorbereidende fase hebben we een aantal stappen ondernomen en één van die stappen heeft geleidt tot wat je in de repository kan vinden.  
  
Je vindt hier namelijk de pagina's voor onze applicatie als HTML-bestanden terug. Verder nog alle benodigde CSS-bestanden, JS-bestanden, Fonts en Afbeeldingen.  

## Waarom HTML-bestanden?  

Door de UI eerst in eenvoudige HTML-bestanden te ontwikkelen hoef ik straks tijdens het programmeren in PHP niet meer bezig met de UI en kan ik de benodigde HTML-code uit deze bestanden halen en in PHP-bestanden overzetten. Ik kan me nu volledig concentreren op het functioneel maken van de applicatie.  
  
## De repository  

De repository bestaat uit het volgende:  
  
1. *MAP*: **CSS**  
   In deze map vinden we de complete styling van onze applicatie terug.  
2. *MAP:* **IMG**  
   In deze map vinden we alle afbeeldingen terug die we gebruiken in onze applicatie (of gaan gebruiken).  
3. *MAP:* **FONTS**  
   In deze map vinden we alle fonts terug die we gebruiken in onze applicatie.  
4. *MAP:* **JS**  
   In deze map vinden we alle JavaScript bestanden terug die we gebruiken in onze applicatie. Let op, niet alle JS-bestanden zullen voor iedere pagina gebruikt worden.  
5. *FILE:* **index.html**  
   In dit bestand hebben we met HTML en CSS de startpagina vorm gegeven.  
6. *FILE:* **thread.html**  
   In dit bestand hebben we met HTML en CSS de threadpagina vorm gegeven.  
7. *FILE:* **topic.html**  
   In dit bestand hebben we met HTML en CSS de topicpagina vorm gegeven.  
8. *FILE:* **register.html**  
   In dit bestand hebben we met HTML en CSS de registratie pagina vorm gegeven.  
9. *FILE:* **login.html**  
    In dit bestand hebben we met HTML en CSS de login pagina vorm gegeven.  

## Hoe gebruiken we deze repo?  

### STAP 1 - Clonen van de repo  

Allereerst clonen we deze repo in de projectmap van onze applicatie. Dit doen we door in een terminal venster de volgende opdracht in te tikken:  

```bash
git clone https://github.com/johanstr/04-design design
```  
  
Door bovenstaande opdracht wordt de gehele repo in je projectmap geplaatst en wel in een submap met de naam ***design***.  
  
### STAP 2 - Kopiëren van benodigdheden naar dev

Als het goed is heb je in je projectmap ook een submap met de naam ***dev***. Dit is namelijk de map waarin we met PHP onze applicatie gaan programmeren (functioneel maken).  
In de map ***dev*** gaan we de volgende zaken kopiëren:  
  
* design/css  
* design/fonts  
* design/img  
* design/js  
  
Let op!!! We kopiëren **niet** de HTML-bestanden.
