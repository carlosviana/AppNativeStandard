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

```javascrip
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
