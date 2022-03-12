import ErrorRepository from '../errorRepository';

test('проверка работы метода translate', () => {
  const errorRepository = new ErrorRepository();
  const received = errorRepository.translate(1);
  expect(received).toEqual('Некорректно введено имя!');
});
test('проверка работы метода translate в случае неизвестной ошибки', () => {
  const errorRepository = new ErrorRepository();
  const received = errorRepository.translate(7);
  expect(received).toEqual('Unknown error');
});
