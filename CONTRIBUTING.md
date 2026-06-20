# Beitragen zu GTB-Management

Zunächst einmal: Danke, dass du dir die Zeit nimmst, zu diesem Projekt beizutragen! 🎉

Jede Form von Beteiligung ist willkommen – sei es das Melden von Fehlern, das Vorschlagen von Verbesserungen oder das Einreichen von Code. Bitte lies diesen Leitfaden durch, bevor du deinen ersten Beitrag leistest.

> [!NOTE]
> Dieses Projekt hat einen [Verhaltenskodex](CODE_OF_CONDUCT.md). Mit deiner Beteiligung erklärst du dich bereit, diesen einzuhalten.

---

## Inhaltsverzeichnis

- [Fehler melden](#fehler-melden)
- [Neue Features vorschlagen](#neue-features-vorschlagen)
- [Lokale Entwicklungsumgebung einrichten](#lokale-entwicklungsumgebung-einrichten)
- [Coding Guidelines](#coding-guidelines)
- [Pull Request einreichen](#pull-request-einreichen)

---

## Fehler melden

Hast du einen Fehler entdeckt? Bitte öffne ein **[Bug Report Issue](../../issues/new?template=bug_report.yml)** und fülle das Template vollständig aus. Achte darauf:

- Eine klare, beschreibende Zusammenfassung des Problems anzugeben.
- Die genauen Schritte zur Reproduktion zu beschreiben.
- Das erwartete und das tatsächliche Verhalten zu benennen.
- Relevante Fehlermeldungen oder Screenshots beizufügen.

> [!IMPORTANT]
> Bitte melde **Sicherheitslücken** niemals als öffentliches Issue! Lies stattdessen unsere [Sicherheitsrichtlinie](SECURITY.md).

---

## Neue Features vorschlagen

Hast du eine Idee für eine neue Funktion? Öffne ein **[Feature Request Issue](../../issues/new?template=feature_request.yml)** und beschreibe:

- Das Problem, das dein Feature lösen würde.
- Deine vorgeschlagene Lösung.
- Mögliche Alternativen, die du in Betracht gezogen hast.

---

## Lokale Entwicklungsumgebung einrichten

### Voraussetzungen

Stelle sicher, dass folgende Software installiert ist:

| Software | Mindestversion |
|----------|---------------|
| [Node.js](https://nodejs.org/) | 18.x |
| [MySQL](https://www.mysql.com/) | 8.0 |
| [Git](https://git-scm.com/) | beliebig |

### 1. Repository forken & klonen

Erstelle zunächst einen Fork des Repositories auf GitHub. Klone dann deinen Fork lokal:

```bash
git clone https://github.com/DEIN-BENUTZERNAME/gtb-management.git
cd gtb-management
```

Füge das ursprüngliche Repository als `upstream` Remote hinzu:

```bash
git remote add upstream https://github.com/jonas1812st/gtb-management.git
```

### 2. Abhängigkeiten installieren

```bash
npm install
```

### 3. Umgebungsvariablen konfigurieren

```bash
cp .env.example .env
```

Öffne die `.env` und passe die Werte an:

```env
DATABASE_URL="mysql://root:password@localhost:3306/gtb_dev"
AUTH_SECRET="ein-zufälliger-sicherer-schlüssel"
NEXTAUTH_URL="http://localhost:8080/"
NEXT_PUBLIC_APP_URL="http://localhost:8080/"
SALT_ROUNDS=12
MAIN_LIST_NAME="Allgemeine Anwesenheitsliste"
MAIN_GROUP_NAME="Alle"
MAIN_GROUP_COLOR="#d3d3d3"
```

> [!TIP]
> Den `AUTH_SECRET` kannst du einfach per `npx auth secret` generieren lassen.

### 4. Datenbank initialisieren

Für die **Entwicklungsumgebung** nutze `prisma migrate dev` (erstellt Migrationen bei Schemaänderungen):

```bash
npx prisma migrate dev
```

### 5. Entwicklungsserver starten

```bash
npm run dev
```

Die Anwendung ist nun unter [http://localhost:8080](http://localhost:8080) erreichbar. Beim ersten Start wirst du automatisch auf `/auth/setup` weitergeleitet, um das Owner-Konto anzulegen.

---

## Coding Guidelines

Dieses Projekt setzt auf einen konsistenten Code-Stil. Bitte halte dich an folgende Regeln:

### TypeScript

- Schreibe **striktes TypeScript** – vermeide `any`-Typen konsequent.
- Nutze für alle Datenmutationen **Server Actions** (Next.js App Router).
- Validiere alle Eingaben serverseitig mit **Zod**.
- Alle API- und Zod-Fehlermeldungen müssen auf **Englisch** verfasst sein.

### Formatierung

Die Formatierung wird durch [Prettier](../.prettierrc) erzwungen. Führe vor jedem Commit aus:

```bash
npx prettier --write .
```

### Linting

Der Code wird mit [ESLint](../eslint.config.mjs) geprüft:

```bash
npm run lint
```

### TypeScript-Check

Stelle sicher, dass keine Typfehler vorliegen:

```bash
npm run tsc
```

---

## Pull Request einreichen

### Branch-Namenskonvention

Erstelle deinen Feature-Branch vom aktuellen `main`-Branch:

```bash
git checkout main
git pull upstream main
git checkout -b feat/mein-neues-feature
```

Verwende folgende Präfixe:

| Präfix | Verwendung |
|--------|-----------|
| `feat/` | Neue Features |
| `fix/` | Fehlerbehebungen |
| `chore/` | Wartungsaufgaben, Abhängigkeits-Updates |
| `docs/` | Nur Dokumentationsänderungen |
| `refactor/` | Code-Umstrukturierungen ohne Funktionsänderung |

### PR-Checkliste

Bevor du deinen PR einreichst, überprüfe folgende Punkte:

- [ ] Der Code baut fehlerfrei (`npm run build`)
- [ ] Keine TypeScript-Fehler (`npm run tsc`)
- [ ] Kein Lint-Fehler (`npm run lint`)
- [ ] Der Code ist mit Prettier formatiert
- [ ] Der PR-Titel beschreibt die Änderung klar und präzise
- [ ] Breaking Changes sind im PR deutlich gekennzeichnet

### Commit-Messages

Halte dich an das [Conventional Commits](https://www.conventionalcommits.org/de/v1.0.0/)-Format:

```
feat(students): Suchfunktion für Schülerliste hinzufügen
fix(auth): Weiterleitungsschleife nach Login beheben
docs(readme): Installationsanleitung aktualisieren
```
