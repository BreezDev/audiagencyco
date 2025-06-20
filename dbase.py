import os
import sqlite3
from werkzeug.security import generate_password_hash, check_password_hash

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
DB_PATH = os.path.join(BASE_DIR, "app.db")

def get_db():
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    return conn

def init_db():
    conn = get_db()
    cur = conn.cursor()

    # Users table
    cur.execute("""
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            email TEXT UNIQUE,
            phone TEXT,
            password_hash TEXT,
            is_admin INTEGER DEFAULT 0,
            plan_id INTEGER,
            plan_start TEXT,
            plan_end TEXT,
            created_at TEXT DEFAULT CURRENT_TIMESTAMP
        )
    """)

    # Plans table
    cur.execute("""
        CREATE TABLE IF NOT EXISTS plans (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            price REAL NOT NULL,
            duration_days INTEGER NOT NULL,
            features TEXT,  -- comma-separated feature list
            is_active INTEGER DEFAULT 1
        )
    """)

    # Payments table
    cur.execute("""
        CREATE TABLE IF NOT EXISTS payments (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER,
            amount REAL,
            date TEXT,
            method TEXT,
            plan_id INTEGER,
            notes TEXT
        )
    """)

    # Bills table (auto-generated invoices)
    cur.execute("""
        CREATE TABLE IF NOT EXISTS bills (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER,
            amount REAL,
            due_date TEXT,
            paid INTEGER DEFAULT 0,
            paid_on TEXT,
            notes TEXT
        )
    """)

    # Admin logs (activity tracking)
    cur.execute("""
        CREATE TABLE IF NOT EXISTS admin_logs (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            admin_id INTEGER,
            action TEXT,
            target_user_id INTEGER,
            timestamp TEXT DEFAULT CURRENT_TIMESTAMP,
            notes TEXT
        )
    """)

    # Plan change history
    cur.execute("""
        CREATE TABLE IF NOT EXISTS user_plan_history (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER,
            old_plan_id INTEGER,
            new_plan_id INTEGER,
            changed_on TEXT DEFAULT CURRENT_TIMESTAMP
        )
    """)

    conn.commit()
    conn.close()


