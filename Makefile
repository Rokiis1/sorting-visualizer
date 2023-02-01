install:
	pnpm install

start:
	pnpm run dev

lint:
	pnpm run lint

build:
	#build container
	docker build -t rokiis1/table 