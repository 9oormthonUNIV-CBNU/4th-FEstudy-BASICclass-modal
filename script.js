// 1. 모달과 관련된 DOM 요소들을 가져옵니다.
const overlay = document.getElementById('modalOverlay');
const modal = document.getElementById('modalBox');
const input = document.getElementById('nameInput');
const greeting = document.getElementById('greetingText');
const openBtn = document.getElementById('openBtn');

// 2. '모달 열기' 버튼 클릭 시 모달을 여는 함수를 작성해주세요.
openBtn.addEventListener('click', openModal);

// 3. openModal 함수 작성:
// 모달을 열 때 overlay의 스타일을 'flex'로 변경하고, modal에 'show' 클래스를 추가하세요.
// +) 추가 문제 : 화면에 표시하는 상황에서 왜 overlay는 display로 관리하고, modal은 classList로 관리하나요
function openModal(){
    overlay.style.display='flex';    
    modal.classList.add('show');
 
}
// 4. 모달을 닫는 closeModal 함수 작성:
// 이 함수는 modal에서 'show' 클래스를 제거하고, overlay를 'none'으로 설정하여 모달을 닫습니다.
function closeMoadal(){
    overlay.style.display='none'; 
    modal.classList.remove('show');
}
// 5. 이름을 입력하고 제출 버튼을 클릭할 때 호출되는 submitName 함수 작성:
// 이름이 비어 있지 않으면 인사말을 출력하고, '모달 열기' 버튼을 숨기세요.
// 이름이 비어 있으면 경고 메시지를 띄워주세요.
function submitName(){
    if(input!=''){
        
        console.log("안녕하세요",input,"님!");
        overlay.style.display='none';
    }
    else{
        alert("경고!!");
    }
}
// 6. 오버레이를 클릭하면 모달이 닫히게 이벤트 리스너를 추가해주세요.
// overlay 클릭 시 closeModal을 호출하도록 설정하세요.
overlay.addEventListener('click', closeModal);
// 7. 'Escape' 키를 눌렀을 때 모달이 닫히도록 이벤트 리스너를 추가해주세요.
window.addEventListener('Escape',27)
{
    closeModal();
}
// 키보드 이벤트에서 'Escape' 키가 눌렸을 때 closeModal을 호출하세요.
