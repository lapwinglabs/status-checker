build: node_modules
	@echo "[ RUNNING BUILD ]"
	node index.js

node_modules: package.json
	@echo "[ DOWNLOADING NODE MODULES ]"
	@npm install
	@touch node_modules

clean:
	@echo "[ RUNNING CLEAN ]"
	@rm -rf node_modules

.PHONY: build clean node_modules
