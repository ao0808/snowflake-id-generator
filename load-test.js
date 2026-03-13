// load-test.js
import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
	stages: [
		// Быстро увеличиваем нагрузку для достижения порогов HPA
		{ duration: '30s', target: 500 },    // Рост до 50 VUs
		{ duration: '1m', target: 1000 },     // Увеличиваем до 100 VUs
		{ duration: '2m', target: 2000 },     // Пиковая нагрузка 200 VUs
		{ duration: '1m', target: 100 },     // Спад нагрузки
		{ duration: '30s', target: 0 },      // Остановка
	],
	thresholds: {
		'http_req_duration': ['p(95)<1000'], // Увеличили порог до 1с
		'http_req_failed': ['rate<0.05'],    // Увеличили допустимый процент ошибок
	},
};

export default function () {
	// Используем правильный эндпоинт /next-id (возвращает число, а не JSON)
	let protocol = __ENV.PROTOCOL || 'http';
	let host = __ENV.HOST || 'localhost:8080'; // Меняем на 8081 для port-forward
	let url = `${protocol}://${host}/next-id`;

	// Делаем несколько запросов за одну итерацию для увеличения нагрузки
	for (let i = 0; i < 3; i++) {
		let res = http.get(url);

		// Проверяем ответ (приложение возвращает просто число, не JSON)
		check(res, {
			'status is 200': (r) => r.status === 200,
			'response is a number': (r) => {
				// Проверяем, что ответ - это число (не пустая строка и не NaN)
				return r.body && !isNaN(parseInt(r.body));
			},
		});

		// Небольшая пауза между запросами внутри итерации
		sleep(0.01);
	}

	// Пауза между итерациями
	sleep(0.2);
}
