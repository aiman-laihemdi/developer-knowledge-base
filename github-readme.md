# Git & GitHub Cheatsheet

Mein persönliches Nachschlagewerk für Git und GitHub.

## 1. First Upload – Neues Projekt hochladen

Voraussetzung: Das Repository auf GitHub existiert bereits und ist leer..

git init |
git add . |
git commit -m "chore: initial commit" |
git branch -M main |
git remote add origin https://github.com/USERNAME/REPOSITORY.git |
git push -u origin main |

**Wichtig:** `USERNAME` und `REPOSITORY` durch die eigenen Angaben ersetzen.

## 2. Git-Grundlagen

Befehl:                 | Funktion: 
git init                | Git-Repository initialisieren 
git add .               | Änderungen vormerken 
git commit -m "message" | Änderungen lokal speichern 
git push                | Commits zu GitHub hochladen 
git status              | Aktuellen Status anzeigen 
git log --oneline       | Commit-Verlauf anzeigen 
git remote -v           | Remote-Verbindungen anzeigen 
git branch              | Lokale Branches anzeigen 

## 3. Repository herunterladen und aktualisieren

### Repository klonen
git clone https://github.com/USERNAME/REPOSITORY.git


### Änderungen abrufen und integrieren
git pull    ||  git pull origin main


### Änderungen abrufen, ohne sie zu integrieren
git fetch   ||    git fetch origin


## 4. Branches verstehen

### Branches anzeigen
git branch

### Neuen Branch erstellen und wechseln
git switch -c feature-name

### Zwischen Branches wechseln
git switch main

### Branches zusammenführen
Zuerst zum Ziel-Branch wechseln, dann den anderen Branch integrieren:

git switch main
git merge feature-name

Branches ermöglichen es, neue Funktionen getrennt vom Hauptbranch zu entwickeln.

## 5. Commit Types – Conventional Commits

 Typ:              | Verwendung:
 `feat:`           | Neue Funktion 
 `fix:`            | Fehler beheben 
 `refactor:`       | Code intern verbessern 
 `style:`          | Formatierung ohne Änderung der Logik 
 `docs:`           | Dokumentation bearbeiten
 `test:`           | Tests hinzufügen oder ändern
 `chore:`          | Wartungsarbeiten
 `perf:`           | Performance verbessern
 `build:`          | Build-System ändern
 `ci:`             | Automatisierte CI-Prozesse ändern

### Beispiele:
git commit -m "feat: add user registration"
git commit -m "fix: correct form validation"
git commit -m "refactor: simplify authentication logic"
git commit -m "docs: update README"


## 6. Standard-Workflow für weitere Änderungen

Wenn das Repository bereits eingerichtet ist:
git status
git add .
git commit -m "feat: describe your change"
git push


**Merke:** `add` → `commit` → `push`.

## 7. Wichtige Hinweise

- `git commit` speichert Änderungen lokal.
- `git push` überträgt deine Commits zu GitHub.
- `git pull` holt Änderungen und integriert sie.
- `git fetch` holt Informationen, ohne sie automatisch zu integrieren.
-  Niemals Passwörter oder API-Schlüssel hochladen.
-  Vor `git add .` mit `git status` prüfen, welche Dateien geändert wurden.
