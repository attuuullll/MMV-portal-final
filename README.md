# AI-Powered College Information Portal

A full-stack college portal with:
- FastAPI backend for auth, profile management, notices, facilities, timetable, and admin actions
- React + Vite frontend for student and admin dashboards
- Lightweight ML recommendation module for personalized resource suggestions

## Project Structure

- `backend/` - FastAPI app, database models, auth, seed scripts
- `frontend/` - React + Vite client app
- `ml_model/` - recommendation logic

## Prerequisites

- Python 3.10+
- Node.js 18+
- npm

## 1) Backend Setup

From the project root:

```powershell
python -m venv .venv
.\.venv\Scripts\Activate.ps1
pip install -r backend/requirements.txt
```

Optional environment variable:

- `DATABASE_URL` (defaults to `sqlite:///./college_portal.db` if not set)

## 2) Seed Initial Data (Optional but recommended)

From the project root, with virtual environment activated:

```powershell
python -m backend.seed
python -m backend.seed_v2
```

## 3) Run Backend API

From the project root:

```powershell
uvicorn backend.main:app --reload
```

Backend will run on:
- `http://127.0.0.1:8000`

API docs:
- `http://127.0.0.1:8000/docs`

## 4) Frontend Setup and Run

In a new terminal:

```powershell
cd frontend
npm install
npm run dev
```

Frontend will run on Vite's local URL (typically):
- `http://127.0.0.1:5173`

## Development Notes

- CORS is currently open in backend (`allow_origins=["*"]`) for easier local development.
- Database tables are auto-created at backend startup.
- The app uses SQLite by default, but you can switch to PostgreSQL by setting `DATABASE_URL`.

## Default Seed Users

If you run `backend.seed`, sample users include:
- Admin: `admin@bhu.ac.in` / `admin123`
- Student: `paridhi@student.bhu.ac.in` / `student123`

(Use only for local development and testing.)
