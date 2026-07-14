import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  stages: [
    { duration: '20s', target: 10 },
    { duration: '20s', target: 50 },
    { duration: '20s', target: 100 },
    { duration: '20s', target: 0 },
  ],
};

export default function () {
  const res = http.get('https://airportgap.com/api/airports');

  check(res, {
    'status 200': (r) => r.status === 200,
  });

  sleep(1);
}