document.addEventListener("DOMContentLoaded", function () {

    
    const signupForm = document.getElementById("signupForm");

    if (signupForm) {
        signupForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const id = document.getElementById("signupId").value.trim();
            const pw = document.getElementById("signupPw").value.trim();
            const pwCheck = document.getElementById("signupPwCheck").value.trim();
            const name = document.getElementById("signupName").value.trim();
            const email = document.getElementById("signupEmail").value.trim();
            const robot = document.getElementById("signupRobot").checked;
            const message = document.getElementById("signupMessage");

            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (id === "") {
                showMessage(message, "아이디를 입력해주세요.", "error");
                return;
            }

            if (id.length < 4) {
                showMessage(message, "아이디는 4글자 이상 입력해주세요.", "error");
                return;
            }

            if (pw === "") {
                showMessage(message, "비밀번호를 입력해주세요.", "error");
                return;
            }

            if (pw.length < 8) {
                showMessage(message, "비밀번호는 8글자 이상 입력해주세요.", "error");
                return;
            }

            if (pw !== pwCheck) {
                showMessage(message, "비밀번호와 비밀번호 확인이 일치하지 않습니다.", "error");
                return;
            }

            if (name === "") {
                showMessage(message, "이름을 입력해주세요.", "error");
                return;
            }

            if (!emailPattern.test(email)) {
                showMessage(message, "이메일 형식이 올바르지 않습니다.", "error");
                return;
            }

            if (!robot) {
                showMessage(message, "로봇이 아닙니다 항목을 체크해주세요.", "error");
                return;
            }

            showMessage(message, "회원가입 입력이 정상적으로 완료되었습니다!", "success");
        });
    }


    
    const loginForm = document.getElementById("loginForm");

    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const id = document.getElementById("loginId").value.trim();
            const pw = document.getElementById("loginPw").value.trim();
            const robot = document.getElementById("loginRobot").checked;
            const message = document.getElementById("loginMessage");

            if (id === "") {
                showMessage(message, "아이디를 입력해주세요.", "error");
                return;
            }

            if (pw === "") {
                showMessage(message, "비밀번호를 입력해주세요.", "error");
                return;
            }

            if (!robot) {
                showMessage(message, "로봇이 아닙니다 항목을 체크해주세요.", "error");
                return;
            }

            showMessage(message, "로그인 입력이 정상적으로 완료되었습니다!", "success");
        });
    }


    
    const searchButton = document.getElementById("searchButton");

    if (searchButton) {
        searchButton.addEventListener("click", function () {
            const searchInput = document.getElementById("searchInput");
            const searchResult = document.getElementById("searchResult");
            const keyword = searchInput.value.trim();

            if (keyword === "") {
                searchResult.textContent = "검색어를 입력해주세요.";
                searchResult.className = "SearchResult error";
                return;
            }

            searchResult.textContent = "'" + keyword + "'에 대한 게임을 찾는 중입니다. 물론 그런 기능이 존재하진 않습니다.";
            searchResult.className = "SearchResult success";
        });
    }


    
    const adBoxes = document.querySelectorAll(".AdBox");

    adBoxes.forEach(function (ad) {
        ad.addEventListener("click", function () {
            alert("광고를 클릭했습니다. 하지만 진짜로 광고를 띄울수는 없어서 어쩔수가 없습니다.");
        });
    });


    
    const gameCards = document.querySelectorAll(".GameAAA");

    gameCards.forEach(function (card) {
        card.addEventListener("click", function () {
            const title = card.querySelector("h3").textContent;
            alert(title + " 페이지는 아직 준비 중입니다!");
        });
    });


    
    const randomButton = document.getElementById("randomGameButton");

    if (randomButton) {
        randomButton.addEventListener("click", function () {
            const games = [
                "폴아웃: 뉴 베가스 - 포스트 아포칼립스 세계관 전통의 명작! 깊은 세계관에 빠져들고 싶은 사람에게",
                "Stardew Valley - 조용히 힐링하고 싶은 날 추천! 굉장한 중독석을 가진 농장 경영 게임",
                "Undertale - 전무후무한 개성 있는 세계관과 스토리를 보고 싶은 날 추천! 개인적으로 인생 최고 명작이었던 게임"
            ];

            const randomIndex = Math.floor(Math.random() * games.length);
            document.getElementById("randomGameResult").textContent = games[randomIndex];
        });
    }


    
    const genreSelect = document.getElementById("genreSelect");

    if (genreSelect) {
        genreSelect.addEventListener("change", function () {
            const genre = genreSelect.value;
            const result = document.getElementById("genreResult");

            if (genre === "rpg") {
                result.innerHTML = "<strong>RPG 추천:</strong><br>폴아웃: 뉴 베가스<br>선택과 대화, 자유로운 진행을 좋아한다면 추천합니다.";
            } else if (genre === "healing") {
                result.innerHTML = "<strong>힐링 게임 추천:</strong><br>Stardew Valley<br>농장 운영과 마을 생활을 천천히 즐길 수 있습니다.";
            } else if (genre === "story") {
                result.innerHTML = "<strong>스토리 게임 추천:</strong><br>Undertale<br>선택에 따라 분위기가 달라지는 독특한 게임입니다.";
            } else if (genre === "openworld") {
                result.innerHTML = "<strong>오픈월드 추천:</strong><br>폴아웃: 뉴 베가스<br>넓은 황무지를 돌아다니며 자유롭게 플레이할 수 있습니다.";
            } else {
                result.textContent = "장르를 선택하면 추천 게임이 표시됩니다.";
            }
        });
    }

});


function showMessage(target, text, type) {
    target.textContent = text;
    target.className = "FormMessage " + type;
}


const gameImages = document.querySelectorAll(".GameAAA img");

gameImages.forEach(function (image) {
    image.addEventListener("click", function (event) {
        event.stopPropagation();

        const gameCard = image.closest(".GameAAA");
        const trailerUrl = gameCard.getAttribute("data-trailer");

        const modal = document.getElementById("TrailerModal");
        const frame = document.getElementById("TrailerFrame");

        if (trailerUrl && modal && frame) {
            frame.src = trailerUrl;
            modal.style.display = "flex";
        }
    });
});


const closeTrailer = document.getElementById("CloseTrailer");

if (closeTrailer) {
    closeTrailer.addEventListener("click", function () {
        const modal = document.getElementById("TrailerModal");
        const frame = document.getElementById("TrailerFrame");

        modal.style.display = "none";
        frame.src = "";
    });
}


const trailerModal = document.getElementById("TrailerModal");

if (trailerModal) {
    trailerModal.addEventListener("click", function (event) {
        if (event.target === trailerModal) {
            const frame = document.getElementById("TrailerFrame");

            trailerModal.style.display = "none";
            frame.src = "";
        }
    });
}