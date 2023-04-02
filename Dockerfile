FROM node:16.19.1 as builder
RUN mkdir /app

WORKDIR /app
COPY ui/package.json /app
RUN npm install
COPY ui /app
RUN npm run build

FROM python:3.9.7-slim-buster
RUN mkdir /app
WORKDIR /app
COPY python_backend/requirements.txt /app
RUN pip install -r requirements.txt
COPY python_backend/src /app
RUN rm -rf /app/static  
COPY --from=builder /app/build /app/static
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8080"]
