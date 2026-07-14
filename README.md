![CI](https://github.com/miguelpalomino27-hue/Lab-06/actions/workflows/nodejs.yml/badge.svg)
## 👨‍💻 Autor
Miguel Palomino Cárdenas

# Lab 06 - API REST


## API usada
https://jsonplaceholder.typicode.com

## Contenido
- Informe
- Postman
- Pruebas con Supertest

## Ejecutar
npm install
npm test

---

## 🔹 Lab 08 - Pruebas Funcionales
Se implementaron pruebas utilizando herramientas como Jest para validar el correcto funcionamiento del sistema.

---

## 🔹 Lab 09 - Integración Continua y Quality Gate
Se configuró GitHub Actions para automatizar la ejecución de pruebas y asegurar un mínimo de calidad del 70%.

---

## 🔹 Lab 10 - Pruebas de Rendimiento con k6

### 📌 Objetivo
Evaluar el comportamiento del sistema bajo diferentes niveles de carga.


### ▶️ Ejecución

```bash
k6 run tests/performance/load-test.js
k6 run tests/performance/stress-test.js
k6 run tests/performance/spike-test.js