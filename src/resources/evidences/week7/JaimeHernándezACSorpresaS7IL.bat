@echo off
echo Hola! yo (jaime Hernandez) hizo este archivo dice lo que le escribes. Para nada lo cree con IA.
set /p texto= Escribe algo para decir: 
powershell -Command "Add-Type -AssemblyName System.Speech; $speak = New-Object System.Speech.Synthesis.SpeechSynthesizer; $speak.Speak('%texto%')"
pause
