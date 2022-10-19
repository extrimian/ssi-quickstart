import { KMSStorage } from '@extrimian/kms-core';

const mapping = new Map();
export const storageMock : KMSStorage = {
	add: async (key, data) => {
		mapping.set(key, data);
	},
	get: (key) => mapping.get(key),
	getAll: async () => mapping,
	remove: (key) => mapping.delete(key),
	update: (key, data) => mapping.set(key, data),
};
