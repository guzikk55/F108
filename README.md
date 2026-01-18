# F108
ZadaniaPR,
## License,
Projekt udostępniony na licencji MIT.

## Opis,
Projekt ZadaniaPR to prosta aplikacja napisana w Node.js, która pozwala na zarządzanie własnymi zadaniami.
Po zalogowaniu użytkownik ma dostęp do swoich zadań i może je dodawać, edytować, usuwać oraz oznaczać jako wykonane.
Każdy użytkownik ma osobne dane, a wszystkie zadania są zapisywane w bazie MongoDB.

## Funkcjonalność,
Rejestracja użytkownika, jeśli konto jeszcze nie istnieje,
Logowanie użytkownika,
Osobne dane dla każdego użytkownika,
Dodawanie zadań,
Edycja zadań,
Usuwanie zadań,
Oznaczanie zadań jako wykonane,
Filtrowanie zadań: wszystkie / niezrobione / zrobione,
Obsługa błędu 404 i możliwość powrotu do strony głównej,

## Technologie,
Node.js, Express.js, MongoDB (Docker), Mongoose, EJS, express-session, HTML, CSS

## Instrukcja instalacji i uruchomienia,
Sklonuj projekt na komputerze:
git clone <link_do_projektu>,
2.Przejdż do katologu projektu i wprowadz w koncoli npm install
3.Utwórz plik .env i dodaj tam MONGO_URI=mongodb://localhost:27017/tasksDB
4.Upewnij się, że MongoDB działa lokalnie lub w Dockerze:
docker run -d -p 27017:27017 --name tasks-mongo mongo:7
5.Uruchom serwer za pomocą npm start
6.Otwórz przegladarke na ustawionym porcie
##Lista endpointów
GET /register – formularz rejestracji
POST /register – rejestracja użytkownika
GET /login – formularz logowania
POST /login – logowanie użytkownika
GET /logout – wylogowanie
GET /tasks – lista wszystkich zadań użytkownika
GET /tasks/add – formularz dodania zadania
POST /tasks/add – dodanie zadania
GET /tasks/edit/:id – formularz edycji zadania
POST /tasks/edit/:id – edycja zadania
GET /tasks/delete/:id – usunięcie zadania
## AUTOR
Igor Guzik 4F 1gr 
