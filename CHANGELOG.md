# Changelog

Alle nennenswerten Änderungen an diesem Projekt werden in dieser Datei dokumentiert.

Das Format basiert auf [Keep a Changelog](https://keepachangelog.com/de/1.1.0/),
und dieses Projekt folgt der [Semantischen Versionierung](https://semver.org/lang/de/).

---

## [Unveröffentlicht]

### Hinzugefügt
- Onboarding-System: Automatische Weiterleitung auf `/auth/setup` beim ersten Start
- Passwörter können geändert und zurückgesetzt werden
- `CONTRIBUTING.md`, `CODE_OF_CONDUCT.md`, `SECURITY.md` und `.github/`-Templates für Open-Source-Readiness

---

## [0.1.0] – 2026-06-20

Initiales Release des GTB-Management-Systems.

### Hinzugefügt
- **Schülerverwaltung**: Erfassung von Stammdaten (Vorname, Nachname, Klassenstufe, Klasse) und individuellen Anmerkungen
- **Gruppenverwaltung**: Erstellung farblich kodierter Gruppen zur flexiblen Organisation von Schüler:innen
- **Anwesenheitserfassung**: Protokollierung von Anwesenheitsstatus (anwesend/abwesend) pro Liste und Tag
- **Besuchsberichte (Visitations)**: Erfassung von Ankunfts- und Abholzeiten, Hausaufgabenstatus und Notizen
- **Ausschlüsse (Exceptions)**: Verwaltung geplanter Abwesenheiten für bestimmte Tage oder Zeiträume
- **Listen-System**: Flexible Konfiguration von Anwesenheitslisten mit anpassbaren Tabellenspalten, Zeitverwaltung und Aktivierungszeitpunkten
- **Tagesnotizen**: Listenspezifische Notizen pro Tag
- **Benutzersystem**: Rollenbasierte Berechtigungen (Owner, Admin, Default) zum Schutz sensibler Daten
- **NextAuth.js-Integration**: Sichere Session-Verwaltung per JWT (12 Stunden Gültigkeit)
- **Prisma ORM**: Vollständige Datenbankabstraktion für MySQL mit Migrationssystem

### Technologien
- Next.js 16 (App Router, Turbopack)
- React 19
- Prisma ORM + MySQL
- NextAuth.js v5 Beta
- Tailwind CSS + Radix UI (shadcn/ui)
- TanStack Query & Table
- Zod, React Hook Form, Zustand, Framer Motion

[Unveröffentlicht]: https://github.com/jonas1812st/gtb-management/compare/v0.1.0...HEAD
[0.1.0]: https://github.com/jonas1812st/gtb-management/releases/tag/v0.1.0
