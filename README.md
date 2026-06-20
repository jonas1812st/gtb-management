<div align="center">

# GTB-Management

**Moderne Webanwendung zur Verwaltung von Anwesenheiten, Schüler:innen und Gruppen in der Ganztagsbetreuung.**

[![Lizenz: MIT](https://img.shields.io/badge/Lizenz-MIT-blue.svg)](LICENSE)
[![Node.js Version](https://img.shields.io/badge/Node.js-%3E%3D18-brightgreen)](https://nodejs.org/)
[![PRs willkommen](https://img.shields.io/badge/PRs-willkommen-brightgreen.svg)](CONTRIBUTING.md)
[![Changelog](https://img.shields.io/badge/Changelog-ansehen-orange)](CHANGELOG.md)

</div>

---

GTB-Management ist eine moderne Webanwendung zur Verwaltung von Schüler:innen, Anwesenheiten und Gruppen in der Ganztagsbetreuung (GTB) einer Schule.

Das Projekt basiert auf **Next.js 16 (App Router)** und nutzt **Prisma ORM** zur Datenbankverwaltung.

---

## Features

- **Schülerverwaltung**: Erfassung von Stammdaten, Klassenstufen und individuellen Anmerkungen.
- **Gruppenverwaltung**: Erstellung farblich kodierter Gruppen zur flexiblen Organisation.
- **Anwesenheitserfassung & Besuchsberichte**: Protokollierung von Anwesenheitszeiten, Hausaufgabenstatus und Notizen.
- **Ausschlüsse (Exceptions)**: Verwaltung geplanter Abwesenheiten an spezifischen Tagen.
- **Benutzersystem & Rechteverwaltung**: Rollenbasierte Berechtigungen (Owner, Admin, Default) zum Schutz sensibler Daten.
- **Onboarding-System**: Einfache Erstkonfiguration beim ersten Systemstart.

---

## Technologien

| Bereich | Technologie |
|---------|-------------|
| Framework | Next.js 16 (React 19, Turbopack) |
| Datenbank | MySQL 8 & Prisma ORM |
| Authentifizierung | NextAuth.js v5 Beta (JWT) |
| Styling | Tailwind CSS & Radix UI (shadcn/ui) |
| State Management | TanStack Query, Zustand |
| Formulare & Validierung | React Hook Form, Zod |
| Animationen | Framer Motion |

---

## Installation & Setup

### Voraussetzungen

Stelle sicher, dass folgende Software auf deinem System installiert ist:
- **Node.js** (Version 18 oder höher)
- **MySQL** (laufender Datenbankserver, Version 8 empfohlen)

### 1. Repository klonen und Abhängigkeiten installieren

```bash
git clone https://github.com/jonas1812st/gtb-management.git
cd gtb-management
npm install
```

### 2. Umgebungsvariablen konfigurieren

Kopiere die Vorlage `.env.example` in eine neue Datei namens `.env`:

```bash
cp .env.example .env
```

Passe die Werte in der `.env` an deine Umgebung an:
- `DATABASE_URL`: Der MySQL-Verbindungsstring (z. B. `mysql://user:password@localhost:3306/gtb_db`).
- `AUTH_SECRET`: Ein sicherer Schlüssel für die Session-Verschlüsselung (kann via `npx auth secret` generiert werden).
- `MAIN_LIST_NAME` & `MAIN_GROUP_NAME`: Namen für die Standard-Anwesenheitsliste und Gruppe, die bei der Initialisierung angelegt werden.

### 3. Datenbank initialisieren

Generiere den Prisma-Client und wende die initialen Migrationen auf deine Datenbank an:

```bash
npx prisma generate
npx prisma migrate deploy
```

### 4. Anwendung starten

Starte den Next.js-Produktionsserver:

```bash
npm run build && npm run start
```

Die Anwendung läuft nun unter [http://localhost:8080](http://localhost:8080).

---

## Erstmaliges Einrichten (Onboarding)

Um das System sicher in Betrieb zu nehmen, ist kein manueller Datenbank-Eintrag nötig:

1. Rufe die Anwendung im Browser auf ([http://localhost:8080](http://localhost:8080)).
2. Da noch kein Benutzer in der Datenbank existiert, wirst du automatisch auf die Setup-Seite (`/auth/setup`) weitergeleitet.
3. Erstelle dort das primäre Betreiberkonto (**Owner**) durch Eingabe eines Benutzernamens und eines starken Passworts.
4. **Automatische Initialisierung**: Beim Absenden des Formulars erstellt das System das Owner-Konto und initialisiert im Hintergrund die Standard-Listen und Gruppen auf Basis deiner `.env`-Variablen.
5. Nach der erfolgreichen Initialisierung wirst du direkt in das Dashboard eingeloggt.

---

## Entwickler-Skripte

| Befehl | Beschreibung |
|--------|-------------|
| `npm run dev` | Startet den lokalen Entwicklungsserver mit Turbopack |
| `npm run build` | Erstellt eine optimierte Produktionsversion |
| `npm run start` | Startet den Produktionsserver (erfordert vorherigen Build) |
| `npm run tsc` | Führt TypeScript-Typprüfungen aus |
| `npm run lint` | Prüft den Code mit ESLint |

---

## Beitragen

Beiträge sind herzlich willkommen! Bitte lies unsere **[Beitragsrichtlinien (CONTRIBUTING.md)](CONTRIBUTING.md)** und unseren **[Verhaltenskodex (CODE_OF_CONDUCT.md)](CODE_OF_CONDUCT.md)**, bevor du deinen ersten Pull Request einreichst.

Für Sicherheitslücken beachte bitte unsere **[Sicherheitsrichtlinie (SECURITY.md)](SECURITY.md)**.

---

## Changelog

Alle wichtigen Änderungen werden im **[CHANGELOG.md](CHANGELOG.md)** dokumentiert.

---

## Lizenz

Dieses Projekt ist unter der [MIT-Lizenz](LICENSE) lizenziert.
