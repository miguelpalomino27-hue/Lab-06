import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  stages: [
    { duration: '10s', target: 5 },
    { duration: '5s', target: 100 },
    { duration: '10s', target: 100 },
    { duration: '5s', target: 5 },
    { duration: '10s', target: 0 },
  ],
};

export default function () {
  const res = http.get('https://airportgap.com/api/airports');

  check(res, {
    'status 200': (r) => r.status === 200,
  });

  sleep(0.5);
}