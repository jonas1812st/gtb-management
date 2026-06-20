# Roadmap

> **Hinweis**: Diese Roadmap ist eine theoretische Vorausschau, kein verbindlicher Entwicklungsplan.
> Die hier aufgeführten Features werden **nur dann umgesetzt, wenn ein konkreter Bedarf entsteht** – sei es durch Feedback aus dem produktiven Einsatz, durch Issues aus der Community oder durch eigene Notwendigkeit.
>
> Wer ein bestimmtes Feature benötigt oder priorisieren möchte, ist herzlich eingeladen, ein **Feature Request Issue** zu eröffnen.

---

## Aktueller Stand

Das System deckt den grundlegenden Betreuungsalltag bereits vollständig ab:

- ✅ Schülerverwaltung (Erstellen, Bearbeiten, Löschen, Notizen)
- ✅ Gruppen mit farblicher Kodierung
- ✅ Flexible Anwesenheitslisten (Zeitverwaltung, Tabellenoptionen, Aktivierungstage)
- ✅ Check-in / Check-out mit Zeiten, Notizen und Hausaufgaben-Flag
- ✅ Planbare Ausschlüsse (Datumsbereich oder einzelne Tage)
- ✅ Historische Listenansicht mit Datumsnavigation
- ✅ Tagesnotizen pro Liste
- ✅ Rollenbasiertes Benutzersystem (Owner / Admin / Default)
- ✅ Onboarding-System beim ersten Start

---

## Mögliche zukünftige Features

### Stufe 1 – Hoher praktischer Nutzen

Diese Features würden den Alltag in der GTB am stärksten verbessern und wären die ersten Kandidaten für eine Umsetzung.

#### 📄 Export-Funktionen (PDF / CSV)

Regelmäßige Nachweise für Eltern, Schulleitung oder das Sozialamt erfordern druckbare Dokumente. Denkbar wären:

- Tagesblatt als PDF (saubere Druckansicht ohne UI-Elemente)
- Monatsübersicht pro Schüler als CSV/Excel-Export

#### 📊 Statistiken & Auswertungen

Auswertungen über längere Zeiträume, um Muster zu erkennen und Berichte zu erstellen:

- Anwesenheitsquote pro Schüler (Ist-Tage / Soll-Tage)
- Durchschnittliche Verweildauer
- Gruppenvergleich
- Tagesstatistik-Chart auf dem Dashboard

#### 🗃️ Schüler-Archivierung (Aktiv / Inaktiv)

Wenn ein Schüler die GTB verlässt, sollten historische Daten erhalten bleiben, ohne dass der Schüler aktiv in Listen erscheint. Denkbar wäre ein `isActive`-Flag mit einer separaten Archiv-Ansicht.

---

### Stufe 2 – Deutliche Qualitätsverbesserungen

Features, die das System professioneller und robuster machen würden.

#### 📥 Massenimport von Schülern (CSV)

Zu Schuljahresbeginn müssen oft viele Schüler auf einmal angelegt werden. Ein CSV-Import mit Spalten-Mapping, Vorschau und Validierung würde diesen Prozess erheblich beschleunigen.

#### 🔔 Benachrichtigungen & Erinnerungen

Aktiver Warnhinweis (visuell oder als Browser-Notification), wenn ein Schüler seine geplante Endzeit überschreitet – als Ergänzung zum bestehenden Zeitstatus-Badge.

#### 🔐 Passwort-Richtlinien & Sicherheits-Logging

Stärkere Passwortvalidierung sowie ein Login-Audit-Log (Benutzer, Zeitstempel, Erfolg/Fehlschlag) für sicherheitssensible Umgebungen.

#### 👨‍👩‍👧 Kontaktdaten der Erziehungsberechtigten

Im Notfall muss schnell Kontakt zu den Eltern aufgenommen werden können. Denkbar wäre ein `Guardian`-Modell (Name, Telefon, E-Mail) mit direktem Wählen-Link auf Mobilgeräten.

#### 📱 Mobil-Optimierung / PWA

Viele Betreuungspersonen arbeiten mit Tablets oder Smartphones. Eine Progressive Web App (PWA) mit installierbar und touch-optimierter Anwesenheitsliste würde den mobilen Einsatz erheblich verbessern.

---

### Stufe 3 – Langfristige Erweiterungen

Features, die über den Kern des Systems hinausgehen oder nur für spezifische Szenarien relevant sind.

#### 🌍 Mehrsprachigkeit (i18n)

Das Frontend ist bewusst auf Deutsch ausgelegt. Eine Internationalisierung (z. B. via `next-intl`) würde erst dann Sinn ergeben, wenn das Projekt auch außerhalb des deutschsprachigen Raums eingesetzt wird.

#### 👪 Elternportal (Read-Only)

Eine separate, stark eingeschränkte Ansicht für Erziehungsberechtigte: Wann kam mein Kind an? Wann wurde es abgeholt? Hat es Hausaufgaben gemacht?

#### 📅 Schuljahres-Verwaltung

Sauberes Abschließen eines Schuljahres mit Datenexport und Neuanlage des Folgejahres, ohne historische Daten zu verlieren.

#### 📧 Automatische Abwesenheitsbenachrichtigung

Wenn ein Schüler ohne eingetragene Ausnahme ausbleibt, könnte eine automatische E-Mail an die Erziehungsberechtigten generiert werden – setzt das Elternportal und Kontaktdaten voraus.

#### 🔑 Zwei-Faktor-Authentifizierung (2FA)

Da das System personenbezogene Daten von Minderjährigen verwaltet, wäre 2FA per TOTP (z. B. Google Authenticator) eine sinnvolle zusätzliche Absicherung.

#### 🕵️ Audit-Log / Änderungshistorie

Nachvollziehbarkeit, wer welche Anwesenheit wann geändert hat – relevant für rechtliche Nachweispflichten in öffentlich geförderten Einrichtungen.

---

## Anmerkung zum Datenschutz

> [!IMPORTANT]
> Das System speichert personenbezogene Daten von Minderjährigen. Vor einem produktiven Einsatz – insbesondere in öffentlichen oder geförderten Einrichtungen – sollten folgende Punkte geprüft werden: Datenverschlüsselung, Zugriffsprotokoll, Löschfristen und Datenschutzerklärung (DSGVO).
