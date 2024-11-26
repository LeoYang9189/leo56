async function validateEORI() {
    try {
        const eoriInput = document.getElementById('eoriInput');
        const eoriNumber = eoriInput.value.trim();
        
        if (!eoriNumber) {
            throw new Error('请输入 EORI 号码');
        }

        // 显示加载状态
        document.getElementById('validateBtn').disabled = true;
        
        const response = await fetch('/api/validate-eori', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ eoriNumber })
        });

        if (!response.ok) {
            throw new Error(`验证失败: ${response.status}`);
        }

        const data = await response.json();
        
        // 显示结果
        const resultArea = document.getElementById('resultArea');
        resultArea.classList.remove('hidden');
        
        // 更新结果显示
        document.getElementById('statusText').textContent = data.valid ? '验证成功' : '验证失败';
        document.getElementById('eoriNumber').textContent = eoriNumber;
        document.getElementById('status').textContent = data.valid ? '有效' : '无效';
        
    } catch (error) {
        console.error('验证失败:', error);
        alert(error.message);
    } finally {
        // 恢复按钮状态
        document.getElementById('validateBtn').disabled = false;
    }
}

// 添加回车键监听
document.getElementById('eoriInput')?.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        validateEORI();
    }
});