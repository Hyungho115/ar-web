document.addEventListener('DOMContentLoaded', () => {
    const scene = document.querySelector('a-scene');
    
    // AR 세션이 시작될 때 실행되는 이벤트
    scene.addEventListener('arReady', (event) => {
        console.log('AR 세션이 시작되었습니다.');
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