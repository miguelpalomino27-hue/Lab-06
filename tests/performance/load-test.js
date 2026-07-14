import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  vus: 10,
  duration: '30s',
};

export default function () {
  const res = http.get('https://airportgap.com/api/airports');

  check(res, {
    'status 200': (r) => r.status === 200,
    'menos de 1000ms': (r) => r.timings.duration < 1000,
  });

  sleep(1);
}