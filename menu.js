function getMenu() {
  console.log(
    "---------------------MENU--------------------------\n" +
      "Digite [1] para ADICIONAR um estudante\n" +
      "Digite [2] para LISTAR os estudantes\n" +
      "Digite [3] para ATUALIZAR dados de um estudante\n" +
      "Digite [4] para REMOVER um estudante\n" +
      "Digite [5] para BUSCAR um estudante\n" +
      "Digite [6] para SAIR!\n"
  );
}

function getSecondaryMenu() {
  console.log("Deseja BUSCAR um livro com base em qual critério? ");
  console.log(
    "---------------------MENU--------------------------\n" +
      "Digite [1] para buscar um estudante pelo nome\n" +
      "Digite [2] para buscar um estudante por matrícula\n" +
      "Digite [3] para buscar um estudante por curso\n" +
      "Digite [4] para buscar um estudante por ano de ingresso\n"
  );
}

module.exports = { getMenu, getSecondaryMenu };
