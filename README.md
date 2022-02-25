# Project-Kambria

## Skýrsla

_Nemendur: Alexander Viðar, Daníel Þór og Tristan Pétur_

_Áfangi: VEFÞ2VÞ05DU - Vefforritun II, Tölvubraut, Tækniskólinn_

[Tengill á vef(óvirkur)]()

### Verkefnalýsing
Tilgangurinn með þessu appi er að veita notanda uppskriftir miðað við það sem að notandinn á til í eldhúsinu.

Notandinn getur skráð vörur annaðhvort með því að pikka inn vöruna eða skanna inn strikamerki með myndavélinni í símanum.
Hægt væri að nota appið þannig til að finna uppskriftir samkvæmt því sem væri til staðar og er leitar-sía ef notandi vildi finna sérsniðnar uppskriftir fyrir kvöldmat, morgunmat, eftirrétti o.fl.

Þetta ferli gæti komið í veg fyrir matarsóun og gerir það auðveldara fyrir notanda að ákveða hvað á að vera í matinn eða finna eitthvað sniðugt úr hráefnum sem að maður á.

Appið gefur líka yfirsýn á hráefnum sem að notandinn hefur í gegnum innbyggðan lista sem við köllum ísskápinn.

Afurð okkar virkar þannig að þú skráir þig inn, skráir aðgang eða heldur áfram án þess að skrá þig inn á login skjá. Síðan er haldið á heimaskjá þar sem þú sérð uppástungur að uppskriftum og ýmsa hnappa, svo sem stillingar, profile og footer með ísskáps-, myndavélar- og uppskriftarhnapp. Hægt er að smella beint á sample uppskriftir og skoða þær. Ísskápur, myndavél og uppskriftarhnappur virka ekki sem stendur.

### Vefkerfi

Vefkerfið sem við settum saman, samanstóð af React Native og Firebase. Við ákváðum að nota flex pattern í gerð appsins, þar sem við töldum það vera bestu leiðina til að halda því responsive. Einnig notuðum við expo, sem er hluti af react native til þess að keyra appið í vinnuferlinu. Hægt er að nota expo go appið á síma til að skoða virkni þar og einnig hægt að kíkja beint á það í vef á local server.

### Þarfagreining og hönnunarlýsing

* Hver? Manneskja sem þarf að elda eitthvað
* Hvað? Vantar uppskriftir miðað við hvað er til
* Af hverju? Til þess að fá eitthvað að borða, spara peninga og minnka matarsóun

#### Lýsing 
Notandi opnar appið og fær skjá sem að biður notanda annaðhvort að skrá sig inn, búa til aðgang eða skrá sig seinna.

Ef að notandi skráir sig inn, þá fer hann á aðalsíðuna sem að hefur sérsniðnar uppskriftir eftir sínar stilltar þarfir og það sem að notandinn á nú þegar í ísskápnum og getur uppfært ísskápinn (hráefni).

Ef að notandi skráir sig seinna, þá fer hann á aðalsíðuna með ósérsniðnar uppskriftir.

Við vorum einnig með hönnun og plön fyrir admin aðgang, en komumst ekki svo langt.

(![image](https://user-images.githubusercontent.com/54663650/155518251-99c790a7-e219-4ddb-9846-5167a2bdbf90.png)

### Gagnagrunnshönnun

![image](https://user-images.githubusercontent.com/54663650/155519543-0c0bf992-d387-49a9-a2c8-54158c17bc99.png)

Gagnagrunnurinn okkar var settur upp í firebase firestore, og má sjá að við notumst við fjóra flokka. Users, recipes, ingredients og fridges. Í users eru user IDs og á bak við hvert ID eru upplýsingar users sem stilltar eru í nýskráningu: email, fullName og id. 

Undir recipes eru uppskriftir með id, 0 og upp. Undir hverri uppskrift eru description - string, image - string, ingredients - array af strings (sem hefði orðið collection af ingredients references), instructions - array af strings, source - string (af uppskrift) og title - string. Ingredients flokkurinn er með ingredients id, 0 og upp. Og undir hverju ingredient er title field. 

Í fridges flokknum er User ID hvers users sem á þann tiltekna fridge. Undir UID eru hvert ingredient fyrir sig sem user er með í fridge og eru ingredientin array. Array-ið samanstendur af titli ingredientsins, fjölda til af því og image link.

Þessi gögn eru svo tekin öll inn í appið á viðeigandi stað með implementation á firebase firestore með react native.

### Skjámyndir

![screenshot1]()
![screenshot2]()
![screenshot3]()

[Youtube myndband(óvirkur)]()

### Stillingar og uppsetning
*
### Heimildir
*

### Vinnuflæði
*

## Samantekt

Að lokum, ekki er hægt að sjá myndavélina, nema hnappinn, þar sem við höfðum ekki tíma í að útfæra hana. Ísskápurinn misheppnaðist þar sem reynt var að ná virkni en hún gekk ekki eftir sem skyldi. Leitarsían komst inn á frumstig, þar sem hægt er að leita í gegnum uppskriftirnar með nafni. Höfðum ekki tíma í að útfæra merkingar fyrir sérstakar máltíðir.
