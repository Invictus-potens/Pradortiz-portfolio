# Pradortiz-portfolio

## Iniciar com Docker

```bash
docker build -t portfolio .
docker run --rm -p 48096:48096 portfolio
```

Acesse em: `http://localhost:48096`

## Iniciar com Docker Compose

```bash
docker compose up --build
```

Para parar:

```bash
docker compose down
```