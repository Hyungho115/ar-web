document.addEventListener('DOMContentLoaded', () => {
    const scene = document.querySelector('a-scene');
    const startButton = document.getElementById('start-ar');
    const stopButton = document.getElementById('stop-ar');
    const arContainer = document.getElementById('ar-container');
    
    // AR 시작 버튼 클릭 이벤트
    startButton.addEventListener('click', async () => {
        try {
            // 카메라 권한 요청
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            
            // AR 시작
            scene.setAttribute('mindar-image', 'autoStart: true');
            
            // 버튼 상태 변경
            startButton.style.display = 'none';
            stopButton.style.display = 'inline-block';
            
            console.log('AR 세션이 시작되었습니다.');
        } catch (error) {
            console.error('카메라 접근 권한을 얻을 수 없습니다:', error);
            alert('카메라 접근 권한이 필요합니다. 브라우저 설정에서 카메라 권한을 허용해주세요.');
        }
    });
    
    // AR 중지 버튼 클릭 이벤트
    stopButton.addEventListener('click', () => {
        // AR 중지
        scene.setAttribute('mindar-image', 'autoStart: false');
        
        // 버튼 상태 변경
        startButton.style.display = 'inline-block';
        stopButton.style.display = 'none';
        
        console.log('AR 세션이 중지되었습니다.');
    });
    
    // AR 세션이 시작될 때 실행되는 이벤트
    scene.addEventListener('arReady', (event) => {
        console.log('AR 세션이 준비되었습니다.');
    });

    // AR 세션이 종료될 때 실행되는 이벤트
    scene.addEventListener('arError', (event) => {
        console.log('AR 세션에서 오류가 발생했습니다:', event.detail);
    });

    // 이미지가 인식되었을 때 실행되는 이벤트
    scene.addEventListener('targetFound', (event) => {
        console.log('이미지가 인식되었습니다.');
    });

    // 이미지가 더 이상 인식되지 않을 때 실행되는 이벤트
    scene.addEventListener('targetLost', (event) => {
        console.log('이미지가 더 이상 인식되지 않습니다.');
    });
});
