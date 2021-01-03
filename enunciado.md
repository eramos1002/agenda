# Listado telefónico

## Descripción

La idea es construir un listado de contactos como el de tu teléfono. El listado telefónico será un objeto, donde cada propiedad es un identificador único (deberás generar la función que genera dicho identificador y debe ser llamada `genId()`).
En dicho listado telefónico, genera las siguientes funciones:

- Generación de un contacto. Un contacto es un objeto que debe tener la siguiente forma:
```javascript
  {
    id: String, // Autogenerado
    name: String,
    surname: String,
    phones: [
      {
        tag: String || null
        value: String
      }
    ],
    email: String || null,
    image: String // una url de imagen
  }
  ```

  Nota: Los campos como opcionalmente nulos no tienen porque ser introducidos al crear un contacto, el resto SI
- Genera funciones que me permitan actualizar cada campo de contacto *excepto la id, la ID NUNCA SE PODRÁ ACTUALIZAR*
  - Incluyendo añadir nuevos teléfonos y sus etiquetas
  - Cada etiqueta de un teléfono nuevo puede ser del tipo:
    - Movil
    - Trabajo
    - Casa
    - Principal
    - Otro
- El listado telefónico tendrá un array de contactos favoritos
- Debo poder añadir un contacto como favorito al listin telefónico
  Puedo ademas buscar cualquier contacto por:
  - Nombre
  - Apellido
  - Teléfono
  - Email
  - Obteniendo al buscarlos un array de n contactos con la coincidencia.

En cuanto a los añadidos a los favoritos:
- La lista de favoritos guardada en el listin, solo contendrá la id de aquellos contactos que son favoritos.
- Debo poder obtener la lista de todos los contactos que son favoritos, obteniendo una lista de objetos contactos.
- Debo poder eliminar un contacto de favoritos.
  A continuación un ejemplo del objeto del listado telefonico:

```javascript
const contacts = {
  favorites: ["1jfoo"]
  list: {
    "1jfoo": {
      id: "1jfoo",
      name: "Foo",
      surname: "Bar",
      phones: [
        {
          tag: null
          value: "666777999"
        }
      ],
      email: "foo@bar.es",
      image: "https://foo.bar/img.jpeg"
    }
  }
}
```

## Aclaraciones

### Los contactos en este caso son objetos sin clase

A la hora de añadir contactos con el método `addContact(contact)`, habría que verificar los campos de `contact` uno por uno de forma que:
- Si hay error en alguno de sus campos, ejecutar `throw Error`.
- Una vez revisados, añadir a `contact` un campo `id` usando la función `genId()`.
- El método `addContact(contact)` debe devolver el identificador generado o lanzar un error en caso de que los campos no cumplan lo establecido en el enunciado.
