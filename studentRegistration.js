const prompt = require("prompt-sync")();

let students = [];

function createStudent() {
  let inputName = prompt("Informe o nome do estudante: ");
  let inputEnrollment = prompt("Informe a matícula do estudante: ");
  let inputCourse = prompt("Informe o curso do estudante: ");
  let inputYear = prompt("Informe o ano ingresso do estudante: ");

  let newStudent = {
    id: Date.now().toString(),
    name: inputName,
    enrollment: inputEnrollment,
    course: inputCourse,
    year: inputYear,
  };

  students.push(newStudent);

  console.log("ESTUDANTE ADICIONADO COM SUCESSO!");
}

function listStudents() {
  console.log("LISTA DE ALUNOS: ");

  students.forEach((student) => {
    console.log(
      `Id: ${student.id}, nome: ${student.name}, matrícula: ${student.enrollment}, curso: ${student.course}, ano: ${student.year}`
    );
  });
}

function updateStudent() {
  let updateId = prompt("Informe o id do estudante que deseja atualizar: ");

  let index = students.findIndex((student) => student.id === updateId);

  if (index !== -1) {
    console.log(
      "Digite enter para continuar, ou seja, se não quiser alterar algum valor."
    );

    let inputName = prompt("Informe o nome do estudante: ");
    let inputEnrollment = prompt("Informe a matrícula do estudante: ");
    let inputCourse = prompt("Informe o curso do estudante: ");
    let inputYear = prompt("Informe o ano de ingresso do estudante: ");

    students[index].name = inputName || students[index].name;
    students[index].enrollment = inputEnrollment || students[index].enrollment;
    students[index].course = inputCourse || students[index].course;
    students[index].year = inputYear || students[index].year;

    console.log(
      `Os dados do(a) estudante com id:${index} foi atualizado com sucesso!`
    );
    return;
  }
  console.log(
    "Não foi possível atualizar, pois o id informado não percente a nenhum estudante!"
  );
}

function deleteStudent() {
  let deleteId = prompt("Informe o id do estudante que deseja remover: ");

  let index = students.findIndex((student) => student.id === deleteId);

  if (index !== -1) {
    students.splice(index, 1);
    console.log(
      `O(a) estudante ${students[index].name} foi removido(a) com sucesso!`
    );
    return;
  }
  console.log(
    "Não foi possível remover, pois o id informado não pertence a nenhum estudante!"
  );
}

function searchStudentByName() {
  let searchName = prompt("Informe o nome do estudante: ").toLowerCase();

  let resultList = students.filter((student) =>
    student.name.toLowerCase().includes(searchName)
  );

  console.log("RESULTADO DA BUSCA POR NOME: ");

  displaySearchResult(resultList, searchName);
}

function searchStudentByEnrollment() {
  let searchEnrollment = prompt("Informe a matrícula do estudante: ");

  let resultList = students.filter((student) =>
    student.enrollment.includes(searchEnrollment)
  );

  console.log("RESULTADO DA BUSCA POR MATRÍCULA: ");

  displaySearchResult(resultList, searchEnrollment);
}

function serachStudentByCourse() {
  let searchCourse = prompt("Informe o curso do estudante: ").toLowerCase();

  let resultList = students.filter((student) =>
    student.course.toLowerCase().includes(searchCourse)
  );

  console.log("RESULTADO DA BUSCA POR CURSO: ");

  displaySearchResult(resultList, searchCourse);
}

function searchStudentByYear() {
  let searchYear = prompt("Informe o ano de ingresso do estudante: ");

  let resultList = students.filter((student) =>
    student.year.includes(searchYear)
  );

  console.log("RESULTADO DA BUSCA POR ANO DE INGRESSO: ");

  displaySearchResult(resultList, searchYear);
}

function displaySearchResult(resultList, search) {
  if (resultList.length > 0) {
    resultList.forEach((student) => {
      console.log(
        `Id: ${student.id}, nome: ${student.name}, matrícula: ${student.enrollment}, curso: ${student.course}, ano: ${student.year}`
      );
    });
    return;
  }
  console.log(
    `Nenhum estudante foi encontrado com base na busca informada (${search.toUpperCase()}).`
  );
}

module.exports = {
  createStudent,
  listStudents,
  updateStudent,
  deleteStudent,
  searchStudentByName,
  searchStudentByEnrollment,
  serachStudentByCourse,
  searchStudentByYear,
};
