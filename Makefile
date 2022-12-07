install:
	npm ci
lint:
	npx eslint .
publish:
	npm publish --dry-run
Programmer-day:
	node bin/Programmer_Day.js
Quiz:
	node bin/Quiz.js