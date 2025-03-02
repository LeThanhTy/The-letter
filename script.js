function HideLine() {
    var btHline = document.getElementById("btHline");
    var btHline = document.getElementById("btHline");
    var line = document.getElementsByClassName("line");
    for (var i = 0; i < line.length; i++) {
        line[i].style.border = "none";
        //line[i].style.padding = "20.6px 0";
    }
    btHline.style.display = "none";
    btUHline.style.display = "flex";
}

function UnHideLine() {
    var btUHline = document.getElementById("btUHline");
    var btHline = document.getElementById("btHline");
    var line = document.getElementsByClassName("line");
    for (var i = 0; i < line.length; i++) {
        line[i].style.border = "1px solid black";
        //line[i].style.padding = "20px 0";
    }
    btUHline.style.display = "none";
    btHline.style.display = "flex";
}

function HideNumber() {
    var btHNumber = document.getElementById("btHNumber");
    var btUHNumber = document.getElementById("btUHNumber");
    var number = document.getElementsByClassName("line");
    for (var i = 0; i < number.length; i++) {
        number[i].innerHTML = "";
        //number[i].style.padding = "25.6px";
    }
    btHNumber.style.display = "none";
    btUHNumber.style.display = "flex";
}


function UnHideNumber() {
    var btHNumber = document.getElementById("btHNumber");
    var btUHNumber = document.getElementById("btUHNumber");
    var number1 = document.getElementsByClassName("class1");
    var number2 = document.getElementsByClassName("class2");
    var number3 = document.getElementsByClassName("class3");
    var number4 = document.getElementsByClassName("class4");
    var number5 = document.getElementsByClassName("class5");
    var number6 = document.getElementsByClassName("class6");
    var number7 = document.getElementsByClassName("class7");
    var number8 = document.getElementsByClassName("class8");
    var number9 = document.getElementsByClassName("class9");
    var number10 = document.getElementsByClassName("class10");
    var number11 = document.getElementsByClassName("class11");
    var number12 = document.getElementsByClassName("class12");
    var number = document.getElementsByClassName("line");
    // for (var i = 0; i < number.length; i++) {
    //     number[i].style.padding = "20px 0";
    // }


    for (var i = 0; i < number1.length; i++) {
        number1[i].innerHTML = "1";
    }
    for (var i = 0; i < number2.length; i++) {
        number2[i].innerHTML = "2";
    }
    for (var i = 0; i < number3.length; i++) {
        number3[i].innerHTML = "3";
    }
    for (var i = 0; i < number4.length; i++) {
        number4[i].innerHTML = "4";
    }
    for (var i = 0; i < number5.length; i++) {
        number5[i].innerHTML = "5";
    }
    for (var i = 0; i < number6.length; i++) {
        number6[i].innerHTML = "6";
    }
    for (var i = 0; i < number7.length; i++) {
        number7[i].innerHTML = "7";
    }
    for (var i = 0; i < number8.length; i++) {
        number8[i].innerHTML = "8";
    }
    for (var i = 0; i < number9.length; i++) {
        number9[i].innerHTML = "9";
    }
    for (var i = 0; i < number10.length; i++) {
        number10[i].innerHTML = "10";
    }
    for (var i = 0; i < number11.length; i++) {
        number11[i].innerHTML = "11";
    }
    for (var i = 0; i < number12.length; i++) {
        number12[i].innerHTML = "12";
    }

    btUHNumber.style.display = "none";
    btHNumber.style.display = "flex";
}

// Danh sách câu hỏi
const questions = [
    {
        question: "1. Ngày Quốc tế Phụ nữ (8/3) có nguồn gốc từ phong trào nào?",
        options: [
            "Phong trào đấu tranh của công nhân nữ đòi quyền lợi",
            "Ngày lễ truyền thống của châu Âu",
            "Kỷ niệm một sự kiện lịch sử tại Pháp",
            "Một ngày lễ tôn giáo"
        ],
        correct: "Phong trào đấu tranh của công nhân nữ đòi quyền lợi",
        info: "Ngày 8/3 có nguồn gốc từ phong trào đấu tranh của công nhân nữ đòi quyền lợi vào đầu thế kỷ 20."
    },
    {
        question: "2. Năm nào Liên Hợp Quốc chính thức công nhận ngày 8/3 là Ngày Quốc tế Phụ nữ?",
        options: ["1910", "1945", "1977", "2000"],
        correct: "1977",
        info: "Liên Hợp Quốc chính thức công nhận ngày 8/3 là Ngày Quốc tế Phụ nữ vào năm 1977."
    },
    {
        question: "3. Chủ đề chính thức của Ngày Quốc tế Phụ nữ do Liên Hợp Quốc đưa ra mỗi năm nhằm mục đích gì?",
        options: [
            "Quảng bá sản phẩm dành cho phụ nữ",
            "Thúc đẩy bình đẳng giới và quyền lợi phụ nữ",
            "Tổ chức các cuộc thi sắc đẹp trên toàn cầu",
            "Vinh danh những phụ nữ nổi tiếng trong ngành thời trang"
        ],
        correct: "Thúc đẩy bình đẳng giới và quyền lợi phụ nữ",
        info: "Chủ đề chính thức của ngày 8/3 do Liên Hợp Quốc đề ra nhằm thúc đẩy bình đẳng giới và quyền lợi của phụ nữ."
    },
    {
        question: "4. Quốc gia nào dưới đây không coi ngày 8/3 là ngày nghỉ lễ chính thức?",
        options: ["Việt Nam", "Nga", "Mỹ", "Trung Quốc"],
        correct: "Mỹ",
        info: "Mỹ không coi ngày 8/3 là ngày nghỉ lễ chính thức, trong khi nhiều quốc gia khác có."
    },
    {
        question: "5. Ai trong số những nhân vật sau đây là một trong những nhà hoạt động nổi bật vì quyền phụ nữ?",
        options: ["Marie Curie", "Rosa Luxemburg", "Amelia Earhart", "Coco Chanel"],
        correct: "Rosa Luxemburg",
        info: "Rosa Luxemburg là một trong những nhà hoạt động nổi bật vì quyền phụ nữ."
    },
    {
        question: "6. Ngày 8/3 được tổ chức để tôn vinh điều gì?",
        options: [
            "Sự đóng góp của phụ nữ trong xã hội",
            "Vai trò của phụ nữ trong gia đình",
            "Vẻ đẹp của phụ nữ",
            "Cả A và B đều đúng"
        ],
        correct: "Cả A và B đều đúng",
        info: "Ngày 8/3 nhằm tôn vinh sự đóng góp của phụ nữ trong xã hội và gia đình."
    },
    {
        question: "7. Những hành động nào dưới đây có thể giúp thúc đẩy bình đẳng giới trong cuộc sống hàng ngày?",
        options: [
            "Chia sẻ công việc gia đình và chăm sóc con cái",
            "Khuyến khích phụ nữ tham gia vào các lĩnh vực khoa học, công nghệ",
            "Phản đối định kiến giới trong xã hội",
            "Cả A, B và C đều đúng"
        ],
        correct: "Cả A, B và C đều đúng",
        info: "Các hành động như chia sẻ công việc gia đình, khuyến khích phụ nữ tham gia vào nhiều lĩnh vực và phản đối định kiến giới đều giúp thúc đẩy bình đẳng giới."
    },
    {
        question: "8. Hoa nào thường được tặng nhiều nhất vào ngày 8/3?",
        options: ["Hoa hồng", "Hoa hướng dương", "Hoa cẩm chướng", "Hoa sen"],
        correct: "Hoa hồng",
        info: "Hoa hồng là loại hoa được tặng nhiều nhất vào ngày 8/3 để bày tỏ sự trân trọng và yêu thương."
    }
];

let currentQuestionIndex = 0; // Câu hỏi hiện tại
let correctCount = 0; // Số câu đúng

// Tạo giao diện câu hỏi
function loadQuestions() {
    let quizContainer = document.getElementById("col-2");
    quizContainer.innerHTML = "";
    let q = questions[currentQuestionIndex];
    var div = document.getElementsByClassName("class" + (currentQuestionIndex));
    for (let i = 0; i < div.length; i++) {
        setTimeout(() => {
            div[i].style.backgroundColor = "rgb(175,5,5)";
        }, i * 300); // Mỗi ô trễ hơn 300ms
    }
    if (currentQuestionIndex === questions.length) {
        quizContainer.style.display = "none";
        document.body.style.backgroundColor = "rgb(251, 193, 213)";
        window.scrollTo({ top: 0, behavior: "smooth" });
        // Tạo cánh hoa liên tục
        setInterval(createFlower, 300);
        text.style.display = "block";
    }
    else {
        quizContainer.innerHTML = `
            <div class="question">${q.question}</div>
            <div class="answers">
                ${q.options.map(option => `
                    <label>
                        <input type="radio" name="question${currentQuestionIndex}" value="${option}" onclick="checkAnswer('${option}')"> ${option}
                    </label>
                `).join("")}
            </div>
            <div class="info" id="info${currentQuestionIndex}">${q.info}</div>
        `;
    }
}

// Kiểm tra đáp án
function checkAnswer(selected) {
    var radio = document.querySelectorAll(`input[name=question${currentQuestionIndex}]`);
    let q = questions[currentQuestionIndex];
    let explanation = document.getElementById("info" + currentQuestionIndex);
    if (selected === q.correct) {
        correctCount++;
        explanation.innerHTML = q.info;
        explanation.style.color = "green";
        explanation.style.display = "block"; // Hiện giải thích
        radio.forEach(r => r.disabled = true); // Bỏ chọn radio
        setTimeout(() => {
            currentQuestionIndex++; // Chuyển sang câu tiếp theo
            radio.forEach(r => r.disabled = false); // Bỏ chọn radio
            loadQuestions();
        }, 2000); // Sau 1.5 giây chuyển câu tiếp theo
    } else {
        explanation.innerHTML = "❌ Sai rồi! Hãy thử lại.";
        explanation.style.color = "red";
        explanation.style.display = "block";
        radio.forEach(r => r.disabled = true); // Không cho chọn lại
        setTimeout(() => {
            radio.forEach(r => r.disabled = false); // Cho chọn lại
            explanation.innerHTML = "";
        }, 1000);
    }
}



// Tải câu hỏi khi trang mở
loadQuestions();


function createFlower() {
    const flower = document.createElement("div");
    var block = document.getElementById("title");
    flower.classList.add("flower");
    flower.innerHTML = "🌹"; // Ký tự hoa
    block.appendChild(flower);


    // Random vị trí và kích thước
    flower.style.left = Math.random() * 90 + 1 + "vw"; // Vị trí ngang từ 0 đến 100vw
    flower.style.animationDuration = Math.random() * 5 + 3 + "s"; // Thời gian rơi từ 3s đến 8s
    flower.style.animationDelay = Math.random() * 2 + "s"; // Trễ ngẫu nhiên để rơi không đồng bộ

    // Xóa phần tử sau khi rơi xong
    setTimeout(() => {
        flower.remove();
    }, 10000);
}

