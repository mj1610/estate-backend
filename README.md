Estate backend:
Node + Express
Prisma + MongoDB

Dockerfile added,
to run docker image: docker run -it -p 8800:8800 --env-file .env image-Name

.env contains:

JWT_SECRET_KEY=""
AGE="366888"
DATABASE_URL=
PORT=8800
CLIENT_URL=
