// Global constants
const canvas = document.getElementById('glCanvas'); // Get the canvas element 
const gl = canvas.getContext('webgl2'); // Get the WebGL2 context

if (!gl) {
    console.error('WebGL 2 is not supported by your browser.');
}

// Set canvas size: 현재 window 전체를 canvas로 사용
canvas.width = 500;
canvas.height = 500;
gl.viewport(0, 0, canvas.width, canvas.height); // WebGL viewport 설정
gl.clearColor(0.1, 0.2, 0.3, 1.0); // 기본 배경색 설정

// Start rendering
render();

// Render loop
function render() {
    gl.clear(gl.COLOR_BUFFER_BIT);

    gl.enable(gl.SCISSOR_TEST);

    const halfSize = canvas.width/2;

    // 제 2사분면 그리기 : 빨간색
    gl.scissor(0, halfSize, halfSize, halfSize);
    gl.clearColor(1.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);

    // 제 1사분면 그리기 : 녹색
    gl.scissor(halfSize, halfSize, halfSize, halfSize);
    gl.clearColor(0.0, 1.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);

    // 제 3사분면 그리기 : 파란색
    gl.scissor(0, 0, halfSize, halfSize);
    gl.clearColor(0.0, 0.0, 1.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);

    // 제 4사분면 그리기 : 노란색
    gl.scissor(halfSize, 0, halfSize, halfSize);
    gl.clearColor(1.0, 1.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    
}

// Resize viewport and scissor box when window size changes
window.addEventListener('resize', () => {
    if (window.innerWidth <= window.innerHeight) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerWidth;
    }
    else {
        canvas.width = window.innerHeight;
        canvas.height = window.innerHeight;
    }
    
    gl.viewport(0, 0, canvas.width, canvas.height);
    render();
});