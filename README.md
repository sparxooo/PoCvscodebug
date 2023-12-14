# Proof of Concept for vscode issue #200257

Open in codespaces or a clean vscode install, tested on 1.85.1 (on Windows, and Github Codespaces)

Line numbers that are more than a single digit, that also have a trailing period, do not appear to be parsed correctly.
```
main.js:9.
```
Works, and takes you to line 9 in main.js
```
main.js:10.
```
Does not