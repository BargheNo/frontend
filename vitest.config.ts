import { defineConfig } from "vitest/config";

defineConfig({
	test: {
		globals: true,
		environment: "jsdom",
        setupFiles: 'testSetup.js',
	},
});
