FROM python:3.11-slim

WORKDIR /app
# RUN pip install --upgrade pip

COPY ./requirements.txt requirements.txt
RUN pip install -r requirements.txt

COPY ./backend/ .

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]

CMD ["gunicorn", "--bind", "0.0.0.0:8000", "backend.wsgi"]


