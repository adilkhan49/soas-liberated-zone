FROM python:3.11-slim

WORKDIR /app
# RUN pip install --upgrade pip

COPY ./requirements.txt requirements.txt
RUN pip install -r requirements.txt

COPY ./backend/ .

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

RUN mkdir -p /var/log/gunicorn

# CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]

CMD ["gunicorn", "--bind", "0.0.0.0:8000", "backend.wsgi", \
    "--error-logfile", "/var/log/gunicorn/error.log", \
    "--access-logfile", "/var/log/gunicorn/access.log", \
    "--capture-output", "--log-level", "debug"]



