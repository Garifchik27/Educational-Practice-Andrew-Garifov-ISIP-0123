const verbs = [
    { infinitive: "be", past: "was/were", participle: "been", translation: "быть" },
    { infinitive: "become", past: "became", participle: "become", translation: "становиться" },
    { infinitive: "begin", past: "began", participle: "begun", translation: "начинать" },
    { infinitive: "break", past: "broke", participle: "broken", translation: "ломать" },
    { infinitive: "bring", past: "brought", participle: "brought", translation: "приносить" },
    { infinitive: "build", past: "built", participle: "built", translation: "строить" },
    { infinitive: "buy", past: "bought", participle: "bought", translation: "покупать" },
    { infinitive: "catch", past: "caught", participle: "caught", translation: "ловить" },
    { infinitive: "choose", past: "chose", participle: "chosen", translation: "выбирать" },
    { infinitive: "come", past: "came", participle: "come", translation: "приходить" },
    { infinitive: "cost", past: "cost", participle: "cost", translation: "стоить" },
    { infinitive: "cut", past: "cut", participle: "cut", translation: "резать" },
    { infinitive: "do", past: "did", participle: "done", translation: "делать" },
    { infinitive: "draw", past: "drew", participle: "drawn", translation: "рисовать" },
    { infinitive: "drink", past: "drank", participle: "drunk", translation: "пить" },
    { infinitive: "drive", past: "drove", participle: "driven", translation: "водить" },
    { infinitive: "eat", past: "ate", participle: "eaten", translation: "есть" },
    { infinitive: "fall", past: "fell", participle: "fallen", translation: "падать" },
    { infinitive: "feed", past: "fed", participle: "fed", translation: "кормить" },
    { infinitive: "feel", past: "felt", participle: "felt", translation: "чувствовать" },
    { infinitive: "fight", past: "fought", participle: "fought", translation: "бороться" },
    { infinitive: "find", past: "found", participle: "found", translation: "находить" },
    { infinitive: "fly", past: "flew", participle: "flown", translation: "летать" },
    { infinitive: "forget", past: "forgot", participle: "forgotten", translation: "забывать" },
    { infinitive: "get", past: "got", participle: "gotten", translation: "получать" },
    { infinitive: "give", past: "gave", participle: "given", translation: "давать" },
    { infinitive: "go", past: "went", participle: "gone", translation: "идти" },
    { infinitive: "grow", past: "grew", participle: "grown", translation: "расти" },
    { infinitive: "hang", past: "hung", participle: "hung", translation: "висеть" },
    { infinitive: "have", past: "had", participle: "had", translation: "иметь" },
    { infinitive: "hear", past: "heard", participle: "heard", translation: "слышать" },
    { infinitive: "hide", past: "hid", participle: "hidden", translation: "прятать" },
    { infinitive: "hit", past: "hit", participle: "hit", translation: "ударять" },
    { infinitive: "hold", past: "held", participle: "held", translation: "держать" },
    { infinitive: "hurt", past: "hurt", participle: "hurt", translation: "ранить" },
    { infinitive: "keep", past: "kept", participle: "kept", translation: "хранить" },
    { infinitive: "know", past: "knew", participle: "known", translation: "знать" },
    { infinitive: "learn", past: "learned/learnt", participle: "learned/learnt", translation: "учить" },
    { infinitive: "leave", past: "left", participle: "left", translation: "покидать" },
    { infinitive: "lend", past: "lent", participle: "lent", translation: "одалживать" },
    { infinitive: "let", past: "let", participle: "let", translation: "позволять" },
    { infinitive: "lose", past: "lost", participle: "lost", translation: "терять" },
    { infinitive: "make", past: "made", participle: "made", translation: "делать" },
    { infinitive: "mean", past: "meant", participle: "meant", translation: "значить" },
    { infinitive: "meet", past: "met", participle: "met", translation: "встречать" },
    { infinitive: "pay", past: "paid", participle: "paid", translation: "платить" },
    { infinitive: "put", past: "put", participle: "put", translation: "класть" },
    { infinitive: "read", past: "read", participle: "read", translation: "читать" },
    { infinitive: "ride", past: "rode", participle: "ridden", translation: "ездить" },
    { infinitive: "ring", past: "rang", participle: "rung", translation: "звонить" },
    { infinitive: "rise", past: "rose", participle: "risen", translation: "подниматься" },
    { infinitive: "run", past: "ran", participle: "run", translation: "бежать" },
    { infinitive: "say", past: "said", participle: "said", translation: "говорить" },
    { infinitive: "see", past: "saw", participle: "seen", translation: "видеть" },
    { infinitive: "sell", past: "sold", participle: "sold", translation: "продавать" },
    { infinitive: "send", past: "sent", participle: "sent", translation: "отправлять" },
    { infinitive: "set", past: "set", participle: "set", translation: "устанавливать" },
    { infinitive: "shake", past: "shook", participle: "shaken", translation: "трясти" },
    { infinitive: "shine", past: "shone", participle: "shone", translation: "светить" },
    { infinitive: "shoot", past: "shot", participle: "shot", translation: "стрелять" },
    { infinitive: "show", past: "showed", participle: "shown", translation: "показывать" },
    { infinitive: "shut", past: "shut", participle: "shut", translation: "закрывать" },
    { infinitive: "sing", past: "sang", participle: "sung", translation: "петь" },
    { infinitive: "sink", past: "sank", participle: "sunk", translation: "тонуть" },
    { infinitive: "sit", past: "sat", participle: "sat", translation: "сидеть" },
    { infinitive: "sleep", past: "slept", participle: "slept", translation: "спать" },
    { infinitive: "speak", past: "spoke", participle: "spoken", translation: "говорить" },
    { infinitive: "spend", past: "spent", participle: "spent", translation: "тратить" },
    { infinitive: "stand", past: "stood", participle: "stood", translation: "стоять" },
    { infinitive: "steal", past: "stole", participle: "stolen", translation: "воровать" },
    { infinitive: "stick", past: "stuck", participle: "stuck", translation: "приклеивать" },
    { infinitive: "swim", past: "swam", participle: "swum", translation: "плавать" },
    { infinitive: "take", past: "took", participle: "taken", translation: "брать" },
    { infinitive: "teach", past: "taught", participle: "taught", translation: "учить" },
    { infinitive: "tell", past: "told", participle: "told", translation: "рассказывать" },
    { infinitive: "think", past: "thought", participle: "thought", translation: "думать" },
    { infinitive: "throw", past: "threw", participle: "thrown", translation: "бросать" },
    { infinitive: "understand", past: "understood", participle: "understood", translation: "понимать" },
    { infinitive: "wake", past: "woke", participle: "woken", translation: "просыпаться" },
    { infinitive: "wear", past: "wore", participle: "worn", translation: "носить" },
    { infinitive: "win", past: "won", participle: "won", translation: "выигрывать" },
    { infinitive: "write", past: "wrote", participle: "written", translation: "писать" }
];

let currentUser = null;

function loadUsers() {
    if (!localStorage.getItem("users")) {
        localStorage.setItem("users", JSON.stringify([]));
    }
}

function saveUsers(users) {
    localStorage.setItem("users", JSON.stringify(users));
}

function register(username, password) {
    const users = JSON.parse(localStorage.getItem("users"));
    if (users.find(u => u.username === username)) {
        return { success: false, error: "Пользователь уже существует" };
    }
    if (username.length < 3 || password.length < 4) {
        return { success: false, error: "Логин (мин 3) и пароль (мин 4)" };
    }
    users.push({ username, password, record: 0 });
    saveUsers(users);
    return { success: true };
}

function login(username, password) {
    const users = JSON.parse(localStorage.getItem("users"));
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        currentUser = user;
        localStorage.setItem("currentUser", JSON.stringify(currentUser));
        return { success: true };
    }
    return { success: false, error: "Неверный логин или пароль" };
}

function logout() {
    currentUser = null;
    localStorage.removeItem("currentUser");
}

function updateUserRecord(record) {
    if (!currentUser) return;
    if (record > currentUser.record) {
        currentUser.record = record;
        const users = JSON.parse(localStorage.getItem("users"));
        const index = users.findIndex(u => u.username === currentUser.username);
        if (index !== -1) users[index].record = record;
        saveUsers(users);
        localStorage.setItem("currentUser", JSON.stringify(currentUser));
        return true;
    }
    return false;
}

function loadCurrentUser() {
    const stored = localStorage.getItem("currentUser");
    if (stored) {
        currentUser = JSON.parse(stored);
    }
}

function fillTable(filter = "", letter = "all") {
    const tbody = document.getElementById("table-body");
    if (!tbody) return;
    
    let filtered = verbs.filter(v => 
        v.infinitive.toLowerCase().includes(filter.toLowerCase()) ||
        v.translation.toLowerCase().includes(filter.toLowerCase())
    );
    
    if (letter !== "all") {
        filtered = filtered.filter(v => v.infinitive[0].toLowerCase() === letter.toLowerCase());
    }
    
    tbody.innerHTML = "";
    filtered.forEach(v => {
        tbody.innerHTML += `<tr>
            <td><strong>${v.infinitive}</strong></td>
            <td>${v.past}</td>
            <td>${v.participle}</td>
            <td>${v.translation}</td>
        </tr>`;
    });
    
    document.getElementById("verb-count") && (document.getElementById("verb-count").innerText = filtered.length);
}

function initLetterFilter() {
    const select = document.getElementById("letter-filter");
    if (!select) return;
    const letters = [...new Set(verbs.map(v => v.infinitive[0].toUpperCase()))].sort();
    select.innerHTML = '<option value="all">Все буквы</option>';
    letters.forEach(l => {
        select.innerHTML += `<option value="${l}">${l}</option>`;
    });
}

let trainQuestions = [];
let trainCurrentIndex = 0;
let trainCurrentStreak = 0;
let trainMaxStreak = 0;
let trainCorrect = 0;

function startTraining() {
    const countSelect = document.getElementById("question-count");
    let count = countSelect.value;
    let shuffled = [...verbs];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    if (count === "all") trainQuestions = shuffled;
    else trainQuestions = shuffled.slice(0, parseInt(count));
    
    trainCurrentIndex = 0;
    trainCurrentStreak = 0;
    trainMaxStreak = 0;
    trainCorrect = 0;
    
    document.getElementById("train-controls").style.display = "none";
    document.getElementById("train-area").style.display = "block";
    document.getElementById("result-area").style.display = "none";
    document.getElementById("total-q").innerText = trainQuestions.length;
    updateProgress();
    showNextQuestion();
}

function updateProgress() {
    const percent = (trainCurrentIndex / trainQuestions.length) * 100;
    document.getElementById("progress-fill").style.width = percent + "%";
    document.getElementById("current-streak").innerText = trainCurrentStreak;
}

function showNextQuestion() {
    if (trainCurrentIndex >= trainQuestions.length) {
        showFinalResult();
        return;
    }
    const q = trainQuestions[trainCurrentIndex];
    document.getElementById("current-q-num").innerText = trainCurrentIndex + 1;
    document.getElementById("infinitive-word").innerText = q.infinitive;
    document.getElementById("past-simple-input").value = "";
    document.getElementById("past-participle-input").value = "";
    document.getElementById("feedback").innerHTML = "";
    document.getElementById("feedback").className = "";
    updateProgress();
}

function checkAnswer() {
    const q = trainQuestions[trainCurrentIndex];
    const userPast = document.getElementById("past-simple-input").value.trim().toLowerCase();
    const userPart = document.getElementById("past-participle-input").value.trim().toLowerCase();
    
    const correctPast = q.past.toLowerCase().split("/").map(s => s.trim());
    const correctPart = q.participle.toLowerCase().split("/").map(s => s.trim());
    
    const isPastCorrect = correctPast.includes(userPast);
    const isPartCorrect = correctPart.includes(userPart);
    
    if (isPastCorrect && isPartCorrect) {
        trainCorrect++;
        trainCurrentStreak++;
        if (trainCurrentStreak > trainMaxStreak) trainMaxStreak = trainCurrentStreak;
        document.getElementById("feedback").innerHTML = "✅ Верно!";
        document.getElementById("feedback").style.color = "green";
    } else {
        trainCurrentStreak = 0;
        document.getElementById("feedback").innerHTML = `❌ Ошибка: ${q.infinitive} → ${q.past} / ${q.participle}`;
        document.getElementById("feedback").style.color = "red";
    }
    trainCurrentIndex++;
    setTimeout(() => {
        showNextQuestion();
    }, 800);
}

function showFinalResult() {
    document.getElementById("train-area").style.display = "none";
    document.getElementById("result-area").style.display = "block";
    document.getElementById("correct-count").innerText = trainCorrect;
    document.getElementById("total-count").innerText = trainQuestions.length;
    document.getElementById("max-streak-result").innerText = trainMaxStreak;
    
    const isNewRecord = updateUserRecord(trainMaxStreak);
    if (isNewRecord && currentUser) {
        document.getElementById("new-record-badge").style.display = "block";
        updateGlobalRecordDisplay();
    } else {
        document.getElementById("new-record-badge").style.display = "none";
    }
}

function updateGlobalRecordDisplay() {
    const recordSpan = document.getElementById("global-record");
    if (recordSpan && currentUser) {
        recordSpan.innerText = currentUser.record;
    } else if (recordSpan) {
        recordSpan.innerText = "Войдите для рекорда";
    }
    const profileRecord = document.getElementById("profile-record");
    if (profileRecord && currentUser) {
        profileRecord.innerText = currentUser.record;
    }
}

function initProfile() {
    const unauthBlock = document.getElementById("unauth-block");
    const authBlock = document.getElementById("auth-block");
    if (!unauthBlock) return;
    
    if (currentUser) {
        unauthBlock.style.display = "none";
        authBlock.style.display = "block";
        document.getElementById("profile-username").innerText = currentUser.username;
        document.getElementById("profile-record").innerText = currentUser.record;
        document.getElementById("total-verbs-stat").innerText = verbs.length;
    } else {
        unauthBlock.style.display = "block";
        authBlock.style.display = "none";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    loadUsers();
    loadCurrentUser();
    
    if (document.getElementById("table-body")) {
        fillTable();
        initLetterFilter();
        document.getElementById("search-input").addEventListener("input", (e) => {
            fillTable(e.target.value, document.getElementById("letter-filter").value);
        });
        document.getElementById("letter-filter").addEventListener("change", (e) => {
            fillTable(document.getElementById("search-input").value, e.target.value);
        });
        updateGlobalRecordDisplay();
    }
    
    const startBtn = document.getElementById("start-train");
    if (startBtn) {
        startBtn.addEventListener("click", startTraining);
        const checkBtn = document.getElementById("check-btn");
        if (checkBtn) checkBtn.addEventListener("click", checkAnswer);
        const trainAgain = document.getElementById("train-again");
        if (trainAgain) trainAgain.addEventListener("click", () => location.reload());
        const backToMenu = document.getElementById("back-to-menu");
        if (backToMenu) backToMenu.addEventListener("click", () => window.location.href = "index.html");
    }
    
    if (document.getElementById("login-form")) {
        initProfile();
        
        document.getElementById("login-form").addEventListener("submit", (e) => {
            e.preventDefault();
            const username = document.getElementById("login-username").value;
            const password = document.getElementById("login-password").value;
            const result = login(username, password);
            if (result.success) {
                document.getElementById("auth-message").innerHTML = "<span style='color:green'>Успешный вход!</span>";
                setTimeout(() => location.reload(), 1000);
            } else {
                document.getElementById("auth-message").innerHTML = `<span style='color:red'>${result.error}</span>`;
            }
        });
        
        document.getElementById("register-form").addEventListener("submit", (e) => {
            e.preventDefault();
            const username = document.getElementById("reg-username").value;
            const password = document.getElementById("reg-password").value;
            const result = register(username, password);
            if (result.success) {
                document.getElementById("auth-message").innerHTML = "<span style='color:green'>Регистрация успешна! Теперь войдите.</span>";
                document.getElementById("reg-username").value = "";
                document.getElementById("reg-password").value = "";
            } else {
                document.getElementById("auth-message").innerHTML = `<span style='color:red'>${result.error}</span>`;
            }
        });
        
        document.getElementById("logout-btn") && document.getElementById("logout-btn").addEventListener("click", () => {
            logout();
            location.reload();
        });
    }
});