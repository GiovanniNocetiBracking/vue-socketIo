# Contador Manual de Personas en VUE.JS

## Objetivo

El objetivo de este proyecto es implementar una interfaz de usuario para un **Contador Manual de Personas** utilizando el framework **Vue.js**. Se valorará especialmente el uso de la última versión de Vue.js (Vue 3), aprovechando la **Composition API**, **Vite**, **Pinia**, y **Vue Router** para gestionar el estado y la navegación de la aplicación.

La aplicación debe permitir interactuar con un Backend mediante una **API Rest** y un servidor **SocketIO** para mantener el estado del contador de personas en tiempo real.

---

## Requerimientos

1. **API Rest**:
   - Realizar peticiones POST para sumar y restar al contador de personas.
2. **Cliente SocketIO**:

   - Establecer una conexión en vivo con el servidor SocketIO.
   - Recibir eventos de actualización del contador de personas en tiempo real.

3. **Interfaz de Usuario**:
   - La interfaz debe ser implementada usando una plantilla propia, con algún framework CSS como **Bootstrap**, **Tailwind CSS**, o similar.

---

## API Documentación

### 1. **Url base API**:

- **API Rest**: [https://ikcount.com/iklab](https://ikcount.com/iklab)
- **Servidor SocketIO**: [https://ikcount.com](https://ikcount.com)

### 2. **Credenciales**:

- **Usuario**: `giovanni.noceti.demo`
- **Access Token**: `Z2lvdmFubmkubm9jZXRpLmRlbW86QVBJX0tFWUA0MWZmNGU0Zjc3NDM3MTIyMmY5Zjc2ZmIzYTE3Y2UyMDJjMTgwNzgwZjNkOGZhY2U4YzVlY2M1MTQ2YWI3ODYyNWMyY2M5NTdlNGYyMDQxNTdlMzk1YTg1ZDQyZTY3ODJhNWZlNDljODQ2YzI0YzVhYmJkZTUzM2I4NDE5NDZkYzpJS0xBQjAwNQ==`
- **Cliente**: `DEMO001`
- **Ubicación**: `DEMO001A1L1`
- **MacAddress/DeviceId/Serial**: `DEMO001A1L1Z1MC4`

---

## API Rest: Contar Personas

### **Descripción**:

Para interactuar con el contador de personas, debes enviar comandos para sumar o restar personas a través de la API Rest.

#### **Método**:

- **URL**: `{Url Base API}/ikcount/api/counting/command?atoken={Param1}`
- **Método HTTP**: `POST`
- **Parámetro**: `atoken` (Access Token)

#### **Encabezados**:

- **Content-Type**: `application/json`

#### **Cuerpo de la solicitud (JSON)**:

```json
{
  "type": "{manual-add or manual-sub}",
  "quantity": {Integer > 0},
  "client": "{Client}",
  "location": "{Location}",
  "mac_address": "{MacAddress/DeviceId/Serial}"
}
```

---

## Instrucciones para Ejecutar el Proyecto

Para ejecutar este proyecto, sigue los pasos a continuación:

1. **Clonar el repositorio**:

```bash

git clone https://github.com/GiovanniNocetiBracking/vue-socketIo.git
cd <NOMBRE_DEL_DIRECTORIO>
```

2. **Instalar dependencias**:

Asegúrate de tener pnpm instalado. Si no lo tienes, puedes instalarlo globalmente:

```bash

npm install -g pnpm
```

Luego, instala las dependencias del proyecto:

```bash

pnpm install
```

3. **Ejecutar el proyecto**:

Una vez que las dependencias están instaladas, puedes ejecutar el proyecto en modo de desarrollo:

```bash

pnpm dev
```
