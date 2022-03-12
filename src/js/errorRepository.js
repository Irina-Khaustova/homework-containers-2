export default class ErrorRepository {
  constructor() {
    this.errors = new Map([
      [1, 'Некорректно введено имя!'],
      [2, 'Такой персонаж уже существует!'],
      [3, 'Проверьте правильность ввода данных!'],
    ]);
  }

  translate(code) {
    let result;
    if (this.errors.has(code)) {
      result = this.errors.get(code);
    } else {
      result = 'Unknown error';
    }
    return result;
  }
}
