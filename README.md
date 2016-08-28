# GTFS Statikus Feed Kaposvár Helyi Buszjárataihoz

A [General Transit Feed Specification (GTFS)](https://developers.google.com/transit/gtfs/) gépek által értelmezhető szöveges álományok összessége, melynek segítségével különféle szolgáltatások, alkalmazások dolgozhatnak tömegközlekedési szolgáltatók menetrendi adataival.

## A Projekt Célja

Kaposváron egy cég lát el a tömegközlekedéssel kapcsolatos szolgáltatásokat, a [Kaposvári Tömegközlekedési Zrt.](http://ktrt.hu). Járatinformációkat GTFS-formátumban nem tesz közzé - ezt a hiányosságot szeretnénk pótolni. Az ilyesformán közzétett információkat különféle térinformatikai rendszerek, útvonaltervező szoftverek, menetrendi adatbázisok használhatják fel.

## A Feedről

A *GTFS feed* több szöveges állományból tevődik össze, melyeket egy ZIP-állományban teszünk közzé. A különféle alkalmazásoknak ezt az URL-t kell megadni, hogy hozzáférhessenek az információkhoz.

## A Projekt Állapota

### A következő állományok vannak kész:

* agency.txt
* calendar.txt
* routes.txt
* stops.txt

### Ami vissza van:

* trips.txt
* stop_times.txt
* feed_info.txt

## Felhasználási területek
A kész feedet - melyet az [OPEN Kaposvár](https://openkaposvar.github.io) oldalán publikálunk majd - többféleképpen hasznosíthatjuk.

### Online menetrend, útvonaltervezés
Bár a [KT Zrt.](http://ktrt.hu) honlapján található online menetrend és útvonaltervező is, használata (főként mobil eszközről) nehézkes, sokszor instabil. Terveink között szerepel egy referencia web-, illetve mobil-alkalmazás elkészítése.

### Térinformatikai (GIS) alkalmazások
Térinformatikai analízishez, vizualizációhoz, stb.

## Google GTFS Feed Validator

A *GTFS validációhoz* a [Google Transitfeed projekt](https://github.com/google/transitfeed/wiki/FeedValidator) `feedvalidator` eszközét használjuk fel, melynek felhasználási feltételeire az [Apache Software Foundation Apache License 2.0](http://www.apache.org/licenses/LICENSE-2.0)-ban foglaltak vonatkoznak!
