#!/usr/bin/python3
import json

# Inicializa la variable loaded_package_json con el contenido del archivo package.json
with open('package.json', 'r') as f:
    loaded_package_json = json.load(f)

# Verifica si el diccionario contiene una clave llamada devDependencies
if 'devDependencies' in loaded_package_json:
    # Obtén las claves de las dependencias de desarrollo
    dev_dependencies = loaded_package_json['devDependencies'].keys()
    print(list(dev_dependencies))
else:
    print("El archivo package.json no contiene una clave llamada 'devDependencies'")
