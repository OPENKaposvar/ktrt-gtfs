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

### Ami vissza van:

* stops.txt
* trips.txt
* stop_times.txt
* feed_info.txt
