const messages = [
    "2025년, 더 큰 희망과 행복으로 가득 찬 한 해가 되시길 기원합니다. 새해 복 많이 받으세요.🎉",
    "지난 한 해의 사랑과 성원에 감사드리며, 2025년에도 함께 나아가길 바랍니다.⭐️",
    "감사와 축복을 담아 새해 인사드립니다. 새해에는 모든 일이 뜻대로 이루어지시길 바랍니다.  🎉",
    "2025년, 새로운 도전과 함께 빛나는 성취가 가득하시길 바랍니다.🙏",
    "한 해 동안 베풀어 주신 은혜에 감사드리며, 새해에는 더 큰 행복이 가득하시길 기원합니다.🎉",
    "사랑하는 가족과 함께 따뜻한 새해 맞이하시길 바랍니다. 새해 복 많이 받으세요.⭐️",
    "올 한 해도 사랑과 건강이 가득하시길 기원합니다.🌕",
    "가족의 웃음과 행복이 2025년 내내 넘쳐나길 바랍니다.🌕",
    "사랑과 기쁨으로 가득 찬 한 해가 되시길 바랍니다.🙏",
    "새해에도 가족과 함께하는 소중한 시간이 가득하시길 바랍니다💪",
    "새해에는 새로운 꿈이 시작되고, 큰 기쁨으로 채워지시길 바랍니다.🎉",
    "2025년에도 늘 밝은 미소와 좋은 일만 가득하시길 기원합니다.❤️",
    "새해는 더 높이 비상하는 한 해가 되시길 응원합니다.❤️",
    "당신의 꿈이 더 큰 날개를 달 수 있도록 응원하겠습니다. 새해 복 많이 받으세요.❤️",
    "새해에는 행복이 문을 두드리고, 행운이 함께하시길 바랍니다.☺️",
    "건강과 행복이 가득한 2025년 되시길 바랍니다.🎉",
    "늘 건강하시고, 매일매일 웃음 가득한 날들 되시길 기원합니다.🥳",
    "새해에는 평안과 건강이 함께하시길 바랍니다.🥳",
    "당신과 가족의 건강과 행복을 진심으로 기원합니다.❤️",
    "웃음과 건강이 넘치는 한 해 보내시길 바랍니다.❤️",
    "새해에도 함께 성공적인 한 해를 만들어 가길 기대합니다.❤️",
    "새해에도 변함없이 함께 웃고 성장하길 바랍니다. 새해 복 많이 받으세요.🙏",
    
];

let isAnimating = false; // 애니메이션 진행 상태 변수

function getRandomMessage() {
    const randomIndex = Math.floor(Math.random() * messages.length);
    return messages[randomIndex];
}

function toggleVisibility(element, show) {
    element.classList.toggle('hidden', !show);
    element.classList.toggle('opened', show);
}

function typeMessage(callback) {
    if (isAnimating) return; // 애니메이션 중이면 함수를 종료합니다.
    isAnimating = true; // 애니메이션이 시작됨을 표시합니다.

    const randomMessage = getRandomMessage();
    const messageElement = document.querySelector('.p-message');
    messageElement.innerHTML = '';

    let i = 0;

    function typeNextCharacter() {
        if (i < randomMessage.length) {
            messageElement.innerHTML += randomMessage[i];
            i++;
            setTimeout(typeNextCharacter, 100);
        } else {
            isAnimating = false; // 애니메이션이 끝났음을 표시합니다.
            if (callback) {
                callback();
            }
        }
    }

    typeNextCharacter();
}

function renewMessage() {
    if (isAnimating) return; // 애니메이션 중이면 함수를 종료합니다.

    const postcardElement = document.getElementById('postcard');
    const nameElement = document.querySelector('.p-name');

    toggleVisibility(postcardElement, false);
    toggleVisibility(nameElement, false);

    setTimeout(() => {
        typeMessage(() => {
            toggleVisibility(nameElement, true);
        });
        toggleVisibility(postcardElement, true);
    }, 500);
}

window.onload = () => {
    renewMessage(); 
};