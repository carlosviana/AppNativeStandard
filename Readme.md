Com o react-native-cli instalado

crie um projeto executando o comando:

```console
react-native init *nome_do_seu_projeto*
```

Rode no emulador para testar se está tudo OK

```console
react-native run-android
```

## Criando pasta **src** e remanejando index para lá

crie uma pasta _src_ na raiz do projeto apague o arquivo _App.js_ e crie um arquivo _index.js_ na pasta _./src_ com o conteúdo:

```javascript
import React, { Component } from "react";
import { View, Text } from "react-native";

export default class App extends Component {
    render() {
        return (
            <View>
                <Text>Modelo básico</Text>
            </View>
        );
    }
}
```

## Configurando o .editorConfig

Crie um arquivo _.editorconfig_ na raiz do projeto com o conteúdo:

```ini
root = true

[*]
indent_style = space
indent_size = 4
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true
```

## Instalando e configurando o esLint parão Airbnb

Instale o elLint

```console
yarn add eslint -D
```

Execute o esLint

```console
./node_modules/.bin/eslint --init
```

Escolha as opções:

-_Use a popular..._ -_Airbnb_ -_Y_ -_JSON_ -_Y_

Instale os plugins do esLint para o Babel

```console
yarn add eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-react eslint-plugin-jsx-a11y babel-eslint -D
```

Altere o conteúdo do aquivo _.eslintrc.json_ para o conteúdo:

```json
{
    "parser": "babel-eslint",
    "extends": ["airbnb", "plugin:react-native/all"],
    "plugins": ["react-native", "jsx-a11y", "import"],
    "env": {
        "browser": true,
        "jest": true
    },
    "rules": {
        "react/jsx-filename-extension": [
            "error",
            {
                "extensions": [".jsx", ".js"]
            }
        ],
        "import/prefer-default-export": "off"
    },
    "globals": {
        "__DEV__": true
    },
    "settings": {
        "import/resolver": {
            "babel-plugin-root-import": {},
            "node": {
                "paths": ["src"]
            },
            "babel-module": {}
        }
    }
}
```
