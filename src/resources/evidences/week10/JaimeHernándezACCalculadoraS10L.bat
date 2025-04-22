@echo off
setlocal enabledelayedexpansion

:menu
cls
echo -----------------------------------
echo     CALCULADORA EN BATCH
echo -----------------------------------
echo 1. Suma
echo 2. Resta
echo 3. Multiplicacion
echo 4. Division
echo 5. Potencia (Base fija = 2)
echo 6. Salir
echo -----------------------------------
set /p opcion=Elige una opcion:

if "%opcion%"=="1" goto suma
if "%opcion%"=="2" goto resta
if "%opcion%"=="3" goto multiplicacion
if "%opcion%"=="4" goto division
if "%opcion%"=="5" goto potencia
if "%opcion%"=="6" exit
goto menu

:suma
cls
echo SUMA
set /p a=Ingresa el primer numero:
set /p b=Ingresa el segundo numero:
set /a resultado=%a% + %b%
echo Resultado: %resultado%
pause
goto menu

:resta
cls
echo RESTA
set /p a=Ingresa el primer numero:
set /p b=Ingresa el segundo numero:
set /a resultado=%a% - %b%
echo Resultado: %resultado%
pause
goto menu

:multiplicacion
cls
echo MULTIPLICACION
set /p a=Ingresa el primer numero:
set /p b=Ingresa el segundo numero:
set /a resultado=%a% * %b%
echo Resultado: %resultado%
pause
goto menu

:division
cls
echo DIVISION
set /p a=Ingresa el numerador:
set /p b=Ingresa el denominador:
if "%b%"=="0" (
    echo Error: No se puede dividir entre cero.
) else (
    set /a resultado=%a% / %b%
    echo Resultado: %resultado%
)
pause
goto menu

:potencia
cls
echo POTENCIA DE BASE 2
set /p p=Ingresa la potencia (entre 1 y 10):
if %p% LSS 1 (
    echo Error: Debes ingresar un valor entre 1 y 10.
) else if %p% GTR 10 (
    echo Error: Debes ingresar un valor entre 1 y 10.
) else (
    set resultado=1
    for /l %%i in (1,1,%p%) do (
        set /a resultado=!resultado! * 2
    )
    echo 2 elevado a la %p% = !resultado!
)
pause
goto menu
