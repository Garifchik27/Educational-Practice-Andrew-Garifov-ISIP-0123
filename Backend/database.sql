CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username VARCHAR(50) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    best_record INTEGER DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE verbs (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    infinitive VARCHAR(50) NOT NULL,
    past_simple VARCHAR(50) NOT NULL,
    past_participle VARCHAR(50) NOT NULL,
    translation_ru VARCHAR(100) NOT NULL
);

CREATE TABLE training_sessions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER,
    verbs_count INTEGER,
    correct_count INTEGER,
    max_streak INTEGER,
    session_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

INSERT INTO verbs (infinitive, past_simple, past_participle, translation_ru) VALUES
('go', 'went', 'gone', 'идти'),
('eat', 'ate', 'eaten', 'есть'),
('drink', 'drank', 'drunk', 'пить'),
('see', 'saw', 'seen', 'видеть'),
('take', 'took', 'taken', 'брать'),
('give', 'gave', 'given', 'давать'),
('write', 'wrote', 'written', 'писать'),
('speak', 'spoke', 'spoken', 'говорить'),
('break', 'broke', 'broken', 'ломать'),
('choose', 'chose', 'chosen', 'выбирать');

SELECT * FROM verbs WHERE infinitive LIKE 'g%';

INSERT INTO users (username, password_hash, best_record) 
VALUES ('student123', 'hash_here', 0);

UPDATE users SET best_record = 15 WHERE username = 'student123';

DELETE FROM training_sessions WHERE correct_count < 5;

SELECT u.username, ts.correct_count, ts.max_streak, ts.session_date
FROM users u
JOIN training_sessions ts ON u.id = ts.user_id
WHERE ts.correct_count > 10
ORDER BY ts.correct_count DESC;