const prompt = require("prompt-sync")();
const { getMenu, getSecondaryMenu } = require("./menu");
const {
  createStudent,
  listStudents,
  updateStudent,
  deleteStudent,
  searchStudentByName,
  searchStudentByEnrollment,
  serachStudentByCourse,
  searchStudentByYear,
} = require("./studentRegistration");

function searchMenuOptions() {
  getMenu();

  const inputOption = prompt("Digite a opção aqui: ");

  switch (inputOption) {
    case "1":
      createStudent();
      searchMenuOptions();
      break;
    case "2":
      listStudents();
      searchMenuOptions();
      break;
    case "3":
      updateStudent();
      searchMenuOptions();
      break;
    case "4":
      deleteStudent();
      searchMenuOptions();
      break;
    case "5":
      searchSecondaryMenuOptions();
      searchMenuOptions();
      break;
    case "6":
      console.log("SAINDO...");
      break;
    default:
      throw new Error(
        "Opção inválida! Só são aceitos os valores 1, 2, 3, 4, 5 e 6."
      );
  }
}

function searchSecondaryMenuOptions() {
  getSecondaryMenu();

  const inputOption = prompt("Digite a opção aqui: ");

  switch (inputOption) {
    case "1":
      searchStudentByName();
      break;
    case "2":
      searchStudentByEnrollment();
      break;
    case "3":
      serachStudentByCourse();
      break;
    case "4":
      searchStudentByYear();
      break;
    default:
      console.log(
        "(" +
          inputOption +
          ") ->" +
          "Opção inválida! Só são aceitos os valores: 1, 2, 3 e 4."
      );
  }
}

module.exports = { searchMenuOptions };
