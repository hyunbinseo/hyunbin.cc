import type { PageLoad } from './$types';

export const ssr = false;

export const load = (() => ({ title: '반복 날짜 생성' })) satisfies PageLoad;
